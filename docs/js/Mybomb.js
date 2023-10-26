class myBomb {
    constructor(gameScreen, playerleft, playertop, obstacles){
        this.gameScreen = gameScreen;
        this.left = playerleft;
        this.top = playertop;
        this.element=document.createElement("img");
        this.element.src= "./docs/images/dinamite.png"
        this.element.style.width="50px";
        this.element.style.height="50px";
        this.element.style.position ="absolute";
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.gameScreen.appendChild(this.element);
        this.element.classList.add("my-bomb")
        this.exploded = false;
        this.obstacles= obstacles
        this.pickedUp=false;
        this.explode() // adicionado
    }

    explode(){
        setTimeout(function() {
            this.element.src="./docs/images/myExplosion.gif"
          }.bind(this), 1500)   
          setTimeout(() => {
            this.removeExplosion()
            this.removeBomb()
        }, 1750);
    }

    removeExplosion(){
        let explosions = document.querySelectorAll(".explosion")
        explosions.forEach(exp =>{
        exp.remove()
    })
    }

    removeBomb(){
        this.element.remove()
        this.obstacles.shift()
    }


}