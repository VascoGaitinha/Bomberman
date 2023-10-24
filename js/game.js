class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
      this.player = new Player(
      this.gameScreen,
      200,
      500,
      50,
      50,
      "./images/car.png"
    );
    this.height = 500;
    this.width = 500;
    //ARRAYS
    this.bombs = [];
    this.objectives = [];
    this.myBombs= []; 
    this.ammunitions= [];
    this.score = 0;
    this.ammunition = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.loadingBomb = false
    this.loadingObjectives = false;
    this.loadingAmmunition = false;

  }
  
  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    // Hide the start screen
    this.startScreen.style.display = "none";
    // Show the game screen
    this.gameScreen.style.display = "block";
    // Start the game loop
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
  update() {
      this.player.move();


                    //COMPARÇÕES
//-------------------------------------------------------------------------------------------
    for ( let i = 0 ; i<this.ammunitions.length; i++){
      const ammo = this.ammunitions[i];
      if(this.ammunitions.length>0){
      console.log(this.ammunitions)
      if (this.player.left === ammo.left && this.player.top === ammo.top){
        	this.ammunition ++
          this.ammunitions[0].destroyed()
          console.log(this.ammunitions)
          this.ammunitions.shift()
      }}
    }


//-------------------------------------------------------------------------------------------
      for(let i=0; i<this.myBombs.length;i++){
        const myBomb = this.myBombs[i];

        setInterval(()=>{
          myBomb.exploded = true}, 3000)

        if(this.objectives.length>0 && myBomb.exploded===true){
        if(myBomb.left === this.objectives[0].left || myBomb.top === this.objectives[0].top){
          console.log("MESMA POSICAO DO OBJETIVO  ")
          this.score ++
          this.objectives[0].destroyed()
          this.objectives.shift()
          
        }}
      }
//------------------------------------------------------------------------------------------
      for(let i = 0; i<this.bombs.length; i++){
        
          const bomb = this.bombs[i];

          setInterval(()=>{
            bomb.exploded = true}, 3000)
          if(bomb.exploded === true){
          
          if (this.player.left === bomb.left || this.player.top === bomb.top)
          {
            setTimeout(()=>{this.lives --},250);
            
          }}


          if (this.lives<=0){
            this.lives=0;
            this.endGame();
      }
      }
      let score  = document.getElementById("score")
      let lives = document.getElementById("lives")
      let ammunition = document.getElementById("ammunition")
      score.innerHTML = this.score;
      lives.innerHTML = this.lives;
      ammunition.innerHTML = this.ammunition;

// CREATE BOMBS ----------------------------------------------------------------------------
    
  	if(this.bombs.length <1 && !this.loadingBomb) 
      {
          this.loadingBomb=true;
          setTimeout(()=>{
              this.bombs.push(new Bomb(this.gameScreen, this.bombs));
              this.loadingBomb = false;
          }, 500)
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

      if(this.ammunitions.length <1 && !this.loadingAmmunition) 
      {
          this.loadingAmmunition=true;
          setTimeout(()=>{
              this.ammunitions.push(new Ammunition (this.gameScreen));
              this.loadingAmmunition = false;
          }, 500)
      }

      }





      endGame(){
        this.gameIsOver=true;
        this.player.element.remove();
        this.bombs.forEach(bomb =>{
          bomb.element.remove()});
          this.gameScreen.style.display="none";
          this.gameEndScreen.style.display="block";
      }
}