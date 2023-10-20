class Explosion {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = 50 * Math.floor(Math.random() * 10);
        this.top = 50 * Math.floor(Math.random() * 10);
        console.log(this.top, this.left)
        this.width=50;
        this.height=50;
        this.element=document.createElement("img");
        this.element.src= "./images/explosion.png"
        this.element.style.position ="absolute";
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.gameScreen.appendChild(this.element);
    }
}