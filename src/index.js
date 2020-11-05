import Game from "./game"


document.addEventListener("DOMContentLoaded", () => {
    const mainCanvas = document.getElementById("game-canvas");
    // mainCanvas.width = 500;
    // mainCanvas.height = 500;

    const ctx = mainCanvas.getContext("2d");



    // let sequence = document.getElementById("seq");
    // document.addEventListener('keypress', (e)=>{
    //     sequence.textContent += `${e.key}`
    // });

    const game = new Game(ctx,10);
    game.run();



    // ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, 500, 500);
})