class Live {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = 50 * Math.floor(Math.random() * 10);
        this.top = 50 * Math.floor(Math.random() * 10);
        this.element=document.createElement("img");
        this.element.src= "./docs/images/heart.gif"
        this.element.style.width="50px";
        this.element.style.height="50px";
        this.element.style.position ="absolute";
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.gameScreen.appendChild(this.element);
        this.element.classList.add("ammunition")
        this.exploded = false;

        this.pickedUp=false;
    }
    
    destroyed(){
        this.element.remove()
    }

}