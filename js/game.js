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
    this.score = 0;
    this.armas = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.loadingBomb = false
    this.loadingObjectives = false;
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


      for(let i = 0; i<this.bombs.length; i++){
        
          const bomb = this.bombs[i];


          //novo
          setInterval(()=>{
            bomb.exploded = true}, 3000)
          if(bomb.exploded === true){
          
          if (this.player.left === bomb.left || this.player.top === bomb.top)
          {
            setTimeout(()=>{this.lives --},250);
            
          }}
          // novo


        //Check for Collision
          if(this.player.didCollide(bomb)){
            bomb.pickedUp = true;
              bomb.element.remove();
              this.bombs.splice(i,1);
              
          }


          if (this.lives<=0){
            this.lives=0;
            this.endGame();
      }
      }
      let score  = document.getElementById("score")
      let lives = document.getElementById("lives")
      score.innerHTML = this.score;
      lives.innerHTML = this.lives;


      if(this.bombs.length <1 && !this.loadingBomb) // BOMB LIMIT
      {
          this.loadingBomb=true;
          setTimeout(()=>{
              this.bombs.push(new Bomb(this.gameScreen, this.bombs));
              this.loadingBomb = false;
          }, 500)
      }

      if(this.objectives.length <1 && !this.loadingObjectives) // Objectives LIMIT
      {
          this.loadingObjectives=true;
          setTimeout(()=>{
              this.objectives.push(new Objective (this.gameScreen));
              this.loadingObjectives = false;
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