
let explosions = document.querySelectorAll(".explosion")

explosions.forEach(element => {

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }
      }
});



let explosions = document.querySelectorAll(".explosion")

explosions.forEach(exp => {
    if(this.player.didCollide(exp)){
        this.lives --;
        console.log("colided")
    }
});

