// js/script.js


window.onload = function () {

  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game; // added

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game(); // added
    game.start(); // added
  }
  restartButton.addEventListener("click", function(){
    location.reload();
    startGame();
  })

  function restartGame(){
    location.reload();
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      " ", // space
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -50;
          setTimeout(()=>{
            game.player.directionX = 0;
          },15)
          break;
        case "ArrowUp":
          game.player.directionY = -50;
          
          setTimeout(()=>{
            game.player.directionY = 0;
          },15)
          break;
        case "ArrowRight":
          game.player.directionX = 50;
          
          setTimeout(()=>{
            game.player.directionX = 0;
          },15)
          break;
        case "ArrowDown":
          game.player.directionY = 50;
          
          setTimeout(()=>{
            game.player.directionY = 0;
          },15)
          break;
        case " ":
          if(game.ammunition>0){
          game.myBombs.push(new myBomb(game.gameScreen, game.player.left, game.player.top, game.myBombs))
          game.ammunition --;
          let ammunition = document.getElementById("ammunition")
          ammunition.style.color = "red"
          setInterval(() => {
            ammunition.style.color = "rgb(255,134,49)"
          }, 1000);
          }
        }
    }
  }

  function playerSwitch(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
          game.player.element.src = "./images/charLeft.png"
          break;
        case "ArrowUp":
          game.player.element.src = "./images/charUp.png"
          break;
        case "ArrowRight":
          game.player.element.src = "./images/charRight.png"
          break;
        case "ArrowDown":
          game.player.element.src = "./images/charDown.png"
          break;
        }
    }
  }

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keydown", playerSwitch);
}