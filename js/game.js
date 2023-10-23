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
    this.bombs = [];
    this.score = 0;
    this.lives = 1;
    this.gameIsOver = false;
    this.loadingBomb = false;
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
      for(let i = 0; i<this.obstacles.length; i++){
          const obstacle = this.obstacles[i];
          obstacle.explode();
          //Check for Collision
          if(this.player.didCollide(bomb)){
              bomb.element.remove();
              this.bombs.splice(i,1);
              this.lives --;
              console.log("colided")
          }
          else if(bomb.top > this.height){
              this.score ++;
              this.bomb.element.remove();
              this.bombs.splice(i,1);
          }
          if (this.lives===0){
            this.endGame();
      }
      }
      let score  = document.getElementById("score")
      let lives = document.getElementById("lives")
      score.innerHTML = this.score;
      lives.innerHTML = this.lives;
      if(!this.bombs.length && !this.loadingBomb)
      {
          this.loadingBomb=true;
          setTimeout(()=>{
              this.bombs.push(new Bomb(this.gameScreen, this.bombs, this.player.left, this.player.top, this.lives));
              this.loadingBomb = false;
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





