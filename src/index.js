import sequence from "./sequence";

document.addEventListener("DOMContentLoaded", () => {
    const mainCanvas = document.getElementById("game-canvas");
    mainCanvas.width = 500;
    mainCanvas.height = 500;


    const ctx = mainCanvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 500, 500);
})