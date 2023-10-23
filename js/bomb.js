class Bomb {
    constructor(gameScreen, obstacles){
        this.gameScreen = gameScreen;
        this.left = 50 * Math.floor(Math.random() * 10);
        this.top = 50 * Math.floor(Math.random() * 10);
        this.element=document.createElement("img");
        this.element.src= "./images/bomb.png"
        this.element.style.width="50px";
        this.element.style.height="50px";
        this.element.style.position ="absolute";
        this.element.style.left=`${this.left}px`;
        this.element.style.top=`${this.top}px`;
        this.gameScreen.appendChild(this.element);
        this.element.classList.add("explosion")
        this.exploded = false;
        this.obstacles= obstacles
        this.explode() // adicionado
    }

    explode(){
        setTimeout(function() {
            console.log("generateExplosion")
            this.generateExplosion(this.gameScreen, this.left, this.top)
          }.bind(this), 3000)   
          setTimeout(() => {
            this.removeBomb()
        }, 3350);

    }

 generateExplosion(gamescreen, bombleft, bombtop) {

        for (let i=0; i<10; i++){
            new Explosion(gamescreen, i * 50, bombtop);
            new Explosion(gamescreen, bombleft, i * 50);
        }

}

    removeBomb(){
        let explosions = document.querySelectorAll(".explosion")
        explosions.forEach(exp =>{
        exp.remove()
        this.obstacles.shift()
    })
    }

}