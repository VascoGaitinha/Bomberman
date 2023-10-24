function randomDirection(event) {
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

    // Update player's directionX and directionY based on the key pressed
    switch (key) {
      case "1":
        game.objectives[0].directionX = -50;

      case "ArrowUp":
        game.objectives[0]directionY = -50;

      case "ArrowRight":
        game.objectives[0]directionX = 50;

      case "ArrowDown":
        game.objectives[0]directionY = 50;

    }