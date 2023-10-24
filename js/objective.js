class Objective {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = 50 * Math.floor(Math.random() * 10);
        this.top = 50 * Math.floor(Math.random() * 10);
        this.element=document.createElement("img");
        this.element.src= "./images/objective.png"
        this.directionX = 0;
        this.directionY = 0;
        this.element.style.width="50px";
        this.element.style.height="50px";
        this.element.style.position ="absolute";
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.gameScreen.appendChild(this.element);
        this.element.classList.add("objective")
    }
    destroyed(){
        this.element.remove()
    }

    move() {
        // Update player's car position based on directionX and directionY
        this.left += (Math.floor(Math.random() * 20 - 10));
        this.top += (Math.floor(Math.random() * 20 - 10));
    
        // Ensure the player's car stays within the game screen
        // handles left hand side
        if (this.left < 0) {
          this.left = 0;
        }
    
        // handles top side
        if (this.top < 0) {
          this.top = 0;
        }
    
        // handles right hand side
        if (this.left > this.gameScreen.offsetWidth - this.width) {
          this.left = this.gameScreen.offsetWidth - this.width;
        }
    
        // handles bottom side
        if (this.top > this.gameScreen.offsetHeight - this.height) {
          this.top = this.gameScreen.offsetHeight - this.height;
        }
    
        // Update the player's car position on the screen
        this.updatePosition();
      }
    
      updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
}