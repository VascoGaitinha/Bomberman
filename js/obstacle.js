class Obstacle {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = 50 * Math.floor(Math.random() * 10);
        this.top = 50 * Math.floor(Math.random() * 10);
        console.log(this.top, this.left)
        this.width=50;
        this.height=50;
        this.element=document.createElement("img");
        this.element.src= "./images/bomb.png"
        this.element.style.position ="absolute";
        this.element.style.width=`${this.width}px`;
        this.element.style.height=`${this.height}px`;
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.gameScreen.appendChild(this.element);
        this.exploded = false;
    }

    updatePosition(){
    }

    move(){
        setTimeout(function() {
            this.element.src = "./images/boom.png";
            this.exploded = true;
          }.bind(this), 3000)
    }
}