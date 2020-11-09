import Game from "./game"

document.addEventListener("DOMContentLoaded", () => {
    
    const game = new Game(10);
    game.setup();
    game.ctrls();
    game.start();
    
});