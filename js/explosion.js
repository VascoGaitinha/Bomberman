class Explosion {
    constructor(gameScreen, left, top){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.element=document.createElement("img");
        this.element.style.width="50px";
        this.element.style.height="50px";
        this.element.src= "./images/explosion.png"
        this.element.style.position ="absolute";
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.element.classList.add("explosion")
        this.gameScreen.appendChild(this.element);
        /*console.log(`explosion left ${this.left} explosion top ${this.top}`)*/
    }
}