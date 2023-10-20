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
    }

    explode(){
        if(this.exploded===false){
        setTimeout(function() {
            this.generateExplosion(this.gameScreen, this.left, this.top)
            this.exploded = true;
          }.bind(this), 3000)   
          setTimeout(() => {
            this.removeBomb()
        }, 4500);
        }
          
  
    }

 generateExplosion(gamescreen, bombleft, bombtop) {
    // X axis
    let i = 0;
    function generateExplosionIteration() {
        if (i < 10) {
            new Explosion(gamescreen, i * 50, bombtop);
            new Explosion(gamescreen, bombleft, i * 50);
            i++;
            setTimeout(generateExplosionIteration, 10); // 1000 milliseconds (1 second) delay
        }
    }

    generateExplosionIteration(); // Start the loop
}

    removeBomb(){
        let explosions = document.querySelectorAll(".explosion")
        explosions.forEach(exp =>{
        exp.remove()
        this.obstacles.shift()
    })
    }
}