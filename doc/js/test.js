reset(initialLeft, initialTop, imgSrc) {
  for (let i = this.segments.length - 1; i > 0; i--) {
    this.segments[i].remove();
  }
  this.segments = [this.segments[0]]; // Keep the head
  // Update the head's position and image source
  const head = this.segments[0];
  head.src = imgSrc;
  head.style.left = `${initialLeft}px`;
  head.style.top = `${initialTop}px`;
 }

 restartButton.addEventListener("click", function() {
  console.log("Restarting the game");
  if(game){
    game.gameScreen.innerHTML = '';
    game.player.reset(200, 500, "./images/snake-head4.png")
  }

  startGame();
});
