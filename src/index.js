import Game from "./game"


document.addEventListener("DOMContentLoaded", () => {
    
    const mainCanvas = document.getElementById("game-canvas");
    // mainCanvas.width = 500;
    // mainCanvas.height = 500;

    const ctx = mainCanvas.getContext("2d");


    const game = new Game(ctx,31);
    game.run()

    // let countdown = 31;

    // let intervalID = setInterval(decrementTimer, 1000);

    // function decrementTimer(){
    //     countdown--;
    //     // console.log(countdown);
    //     if(countdown < 0){
    //         document.getElementById("timer").innerHTML = "expired";
    //         clearInterval(intervalID);
    //         game.playRound();
    //     }
    //     else{
    //         document.getElementById("timer").innerHTML = countdown;
    //     }
    // }

    // let sequence = document.getElementById("seq");
    // document.addEventListener('keypress', (e)=>{
    //     sequence.textContent += `${e.key}`
    // });





    // ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, 500, 500);
})