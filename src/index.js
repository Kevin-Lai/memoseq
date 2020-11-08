import Game from "./game"


document.addEventListener("DOMContentLoaded", () => {
    
    // const mainCanvas = document.getElementById("game-canvas");
    // // mainCanvas.width = 500;
    // // mainCanvas.height = 500;

    // const ctx = mainCanvas.getContext("2d");
    // const game = new Game(ctx,31);

    const game = new Game(10);
    game.start();
    
    // ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, 500, 500);
})