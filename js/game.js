class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameScreen.style.boxShadow = "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, " +
    "rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, " +
    "rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, " +
    "rgba(0, 0, 0, 0.06) 0px 2px 1px, " +
    "rgba(0, 0, 0, 0.09) 0px 4px 2px, " +
    "rgba(0, 0, 0, 0.09) 0px 8px 4px, " +
    "rgba(0, 0, 0, 0.09) 0px 16px 8px, " +
    "rgba(0, 0, 0, 0.09) 0px 32px 16px";
    this.gameScreen.style.borderRadius= "5%"
      this.player = new Player(
      this.gameScreen,
      200,
      500,
      50,
      50,
      "./images/charUp.png"
    );
    this.height = 500;
    this.width = 500;
    //ARRAYS
    this.bombs = [];
    this.objectives = [];
    this.myBombs= []; 
    this.ammunitions= [];
    this.livesArray = [];
    this.checkPoint = [false, false, false]
    //STATUS
    this.score = 0;
    this.ammunition = 0;
    this.lives = 10;
    this.numberOfBombs = 1;

    //LOADINGS
    this.gameIsOver = false;
    this.loadingBomb = false
    this.loadingObjectives = false;
    this.loadingAmmunition = false;
    this.loadingLives = false;

  }
  
  start() {
    let statusList = document.getElementById("status-list")
    let tijolinho = document.getElementById("tijolinho")
    statusList.style.display= "block";
    tijolinho.style.display= "block";
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }
  gameLoop() {
    // Interrupt the function to stop the loop if "gameIsOver" is set to "true"
    if (this.gameIsOver) {
      return;
    }
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }

// -------------------------------- UPDATE -------------------------------------------------
  update() {
      this.player.move();
      this.checkScore();
      this.highScore();
      let highScore = localStorage.getItem("highscore");
      let score  = document.getElementById("game-score")
      let lives = document.getElementById("lives")
      let ammunition = document.getElementById("ammunition")
      let highScoreP = document.getElementById("high-score")
      score.innerHTML = ("Objectives Destroyed: "+this.score)
      lives.innerHTML = this.lives;
      highScoreP.innerHTML = ("High Score: "+highScore)
      ammunition.innerHTML = this.ammunition;


                    //COMPARÇÕES
//PICK UP AMMUNITION--------------------------------------------------------------------------------
    for ( let i = 0 ; i<this.ammunitions.length; i++){
      const ammo = this.ammunitions[i];
      if(this.ammunitions.length>0){
      if (this.player.left === ammo.left && this.player.top === ammo.top){
        	this.ammunition ++
          this.ammunitions[0].destroyed()
          ammunition.style.color = "green"          
          setInterval(() => {
            ammunition.style.color = "rgb(255,134,49)"
          }, 1000);
          this.ammunitions.shift()
      }}
    }

 //PICK UP LIVES--------------------------------------------------------------------------------
    for ( let i = 0 ; i<this.livesArray.length; i++){
      const live = this.livesArray[i];
      if(this.livesArray.length>0){
      if (this.player.left === live.left && this.player.top === live.top){
        	this.lives += 5
          this.livesArray[0].destroyed()
          lives.style.color = "green"          
          setInterval(() => {
            lives.style.color = "rgb(255,134,49)"            
          }, 500);
          this.livesArray.shift()
      }}
    }

//AMUNITION DESTROY OBJECTIVE------------------------------------------------------------------------------
      for(let i=0; i<this.myBombs.length;i++){
        const myBomb = this.myBombs[i];
        setInterval(()=>{
          myBomb.exploded = true}, 1500)
        if(this.objectives.length>0 && myBomb.exploded===true){
        if(myBomb.left === this.objectives[0].left && myBomb.top === this.objectives[0].top){
          this.score ++
          this.objectives[0].destroyed()
          this.objectives.shift()
        }}
      }

//BOMBS EXPLOSION------------------------------------------------------------------------------
      for(let i = 0; i<this.bombs.length; i++){  
          const bomb = this.bombs[i];
          setInterval(()=>{
            bomb.exploded = true}, 3000)
          if(bomb.exploded === true){
          if (this.player.left === bomb.left || this.player.top === bomb.top)
          {
            lives.style.color = "red"           
            setInterval(() => {
              lives.style.color = "rgb(255,134,49)"             
            }, 500);
            setTimeout(()=>{this.lives --},250);
          }}

          if (this.lives<=0){
            this.lives=0;
            this.endGame();
      }}

// CREATE BOMBS ----------------------------------------------------------------------------
    
  	if(this.bombs.length < this.numberOfBombs && !this.loadingBomb) 
      {
          this.loadingBomb=true;
          setTimeout(()=>{
              this.bombs.push(new Bomb(this.gameScreen, this.bombs));
              this.loadingBomb = false;
          }, 500)
      }

// CREATE LIVES ----------------------------------------------------------------------------
    
  	if(this.livesArray.length < 1 && !this.loadingLives) 
    {
        this.loadingLives=true;
        setTimeout(()=>{
            this.livesArray.push(new Live(this.gameScreen));
            this.loadingLives = false;
        }, 15000)
    }

// CREATE OBJECTIVES ----------------------------------------------------------------------------

      if(this.objectives.length <1 && !this.loadingObjectives) 
      {
          this.loadingObjectives=true;
          setTimeout(()=>{
              this.objectives.push(new Objective (this.gameScreen));
              this.loadingObjectives = false;
          }, 500)
      }

// CREATE AMMUNITION ----------------------------------------------------------------------------

      if(this.ammunitions.length <1 && !this.loadingAmmunition && this.ammunition < 1) 
      {
          this.loadingAmmunition=true;
          setTimeout(()=>{
              this.ammunitions.push(new Ammunition (this.gameScreen));
              this.loadingAmmunition = false;
          }, 3000)
      }

      }


// GAME CONDITIONS ------------------------------------------------------------------------------
      checkScore(){

        let levelDisplay = document.getElementById("level-display")
       
    
        if(this.score > 2 && this.score < 7){ // level 2
          this.numberOfBombs = 2
          levelDisplay.innerHTML = "Level 2"
        
          if(this.checkPoint[0]===false){
        let levelUpDiv = document.getElementById("lvl-up-div")
        levelUpDiv.style.display = "block";
        setTimeout(()=>{levelUpDiv.style.display = "none"},1500)
        this.checkPoint[0] = true
      }}

        if(this.score > 5 && this.score < 10){ // level 3
          this.numberOfBombs = 3 
          levelDisplay.innerHTML = "Level 3"
          if(this.checkPoint[1]===false){
            let levelUpDiv = document.getElementById("lvl-up-div")
            levelUpDiv.style.display = "block";
            setTimeout(()=>{levelUpDiv.style.display = "none"},1500)
            this.checkPoint[1] = true
          }
        }

        if(this.score > 8 && this.score < 13){ // level 4
          this.numberOfBombs = 4
          levelDisplay.innerHTML = "Level 4"
          if(this.checkPoint[2]===false){
            let levelUpDiv = document.getElementById("lvl-up-div")
            levelUpDiv.style.display = "block";
            setTimeout(()=>{levelUpDiv.style.display = "none"},1500)
            this.checkPoint[2] = true
          }
        }

      }

      highScore(){
        
        let highScore = localStorage.getItem("highscore");
        if( this.score > highScore){
          localStorage.setItem("highscore", this.score)
        }
        console.log("current score "+this.score)
        console.log("highscore is "+highScore)
      }

      endGame(){
        let statusList = document.getElementById("status-list")
        let tijolinho = document.getElementById("tijolinho")
        statusList.style.display= "none";
        tijolinho.style.display= "none";
        this.gameIsOver=true;
        this.player.element.remove();
        this.bombs.forEach(bomb =>{
          bomb.element.remove()});
          this.gameScreen.style.display="none";
          this.gameEndScreen.style.display="block";
        }
}