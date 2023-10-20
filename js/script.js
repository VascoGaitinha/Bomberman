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
    restartGame();
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
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -50;
        
          break;
        case "ArrowUp":
          game.player.directionY = -50;
          break;
        case "ArrowRight":
          game.player.directionX = 50;
          break;
        case "ArrowDown":
          game.player.directionY = 50;
          break;
      }
    }
  }

  function handleKeyup(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = 0;
          break;
        case "ArrowUp":
          game.player.directionY = 0;
          break;
        case "ArrowRight":
          game.player.directionX = 0;
          break;
        case "ArrowDown":
          game.player.directionY = 0;
          break;
      }
    }
    console.log("player position ", game.player.top, game.player.left)

  }

  // Add the handleKeydown function as an event listener for the keydown event

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);

  
  
};