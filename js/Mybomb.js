class myBomb {
    constructor(gameScreen, playerleft, playertop, obstacles){
        this.gameScreen = gameScreen;
        this.left = playerleft;
        this.top = playertop;
        this.element=document.createElement("img");
        this.element.src= "./images/myBomb.png"
        this.element.style.width="50px";
        this.element.style.height="50px";
        this.element.style.position ="absolute";
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.gameScreen.appendChild(this.element);
        this.element.classList.add("my-bomb")
        this.exploded = false;
        this.obstacles= obstacles
        this.explode() // adicionado
    }

    explode(){
        setTimeout(function() {
            this.generateExplosion(this.gameScreen, this.left, this.top)
          }.bind(this), 3000)   
          setTimeout(() => {
            this.removeExplosion()
            this.removeBomb()
        }, 3350);

    }

    generateExplosion(gamescreen, bombleft, bombtop) {


        for (let i=0; i<10; i++){
            new Explosion(gamescreen, i * 50, bombtop);
            new Explosion(gamescreen, bombleft, i * 50);
        }
        

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