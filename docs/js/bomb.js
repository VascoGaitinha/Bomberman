class Bomb {
    constructor(gameScreen, obstacles){
        this.gameScreen = gameScreen;
        this.left = 50 * Math.floor(Math.random() * 10);
        this.top = 50 * Math.floor(Math.random() * 10);
        this.element=document.createElement("img");
        this.element.src= "./docs/images/bomb.png"
        this.element.style.width="50px";
        this.element.style.height="50px";
        this.element.style.position ="absolute";
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.gameScreen.appendChild(this.element);
        this.element.classList.add("bomb")
        this.exploded = false;
        this.obstacles= obstacles
        this.explode()
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