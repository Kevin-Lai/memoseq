class Game {
    constructor(ctx, timeLimit){
        this.sequenceKeys = [
            "w","a","d",
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9"
        ];

        this.DIM_X = 800;
        this.DIM_Y = 800;
        this.BG_COLOR = "red";
        this.ctx = ctx;

        this.gameSequence = this.generateRandomItem();

        this.timeLimit = timeLimit;
        this.countdown = 0;

        // this.decrementTimer = this.decrementTimer.bind(this);

        this.enteredSequence = "";
        this.gameOver = false;


        this.gameSeq = document.getElementById("game-seq");
        this.enterSeq = document.getElementById("enter-seq");

        this.playRound = this.playRound.bind(this);

    }
    
    generateRandomItem(){
        let randomIndex = Math.floor(Math.random() * this.sequenceKeys.length)
        return this.sequenceKeys[randomIndex];
    }

    draw(){
        // // ctx.fillRect(x, y, width, height);
        // this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        // this.ctx.fillStyle = this.BG_COLOR;
        // this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

        let drawSeq = document.getElementById("draw-seq");

        // if(drawSeq.children){
        //     Array.from(drawSeq.children).forEach((child) => drawSeq.removeChild(child));
        // }

        this.gameSequence.forEach(
            (element) => {
                let newEle = document.createElement("div");
                
                if (element === "w"){
                    newEle.className = "triangle";
                }
                else if (element === "a"){
                    newEle.className = "square";
                }
                else if (element === "d"){
                    newEle.className = "circle";
                }
                else {
                    newEle.className = "number";
                }
                
                drawSeq.appendChild(newEle);
            }
        )
        
        // // arc(x, y, radius, startAngle, endAngle)
        // this.ctx.beginPath();
        // this.ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        // this.ctx.stroke();

        // this.ctx.beginPath();
        // this.ctx.arc(250, 50, 40, 0, 2 * Math.PI);
        // this.ctx.stroke();

    }

    // drawCircle(){

    // }

    // drawSquare(){

    // }



    playRound(){

        let randomItem = this.generateRandomItem();

        this.gameSeq.textContent += randomItem;
        this.gameSequence += randomItem;
        
        // while(this.countdown >= 0 ){
            
        //     // draw needs to occur before the interval
        //     // this.draw();

        //     setTimeout(this.decrementTimer(), 1000);

        //     //console.log(this.timeLimit);
        // }
    }

    run(){

        this.playRound();

        document.addEventListener('keypress', (e)=>{
            if(this.enteredSequence !== this.gameSequence && this.enteredSequence){
                this.gameOver = true;
                console.log("Game Over!");
            }

            this.enteredSequence += e.key;
            this.enterSeq.textContent += `${e.key}`;
        });

        // while(!this.gameOver){
        //     //setTimeout(this.playRound(), 30000);
        //     this.playRound();
        //     // if(this.enteredSequence !== this.gameSequence && this.enteredSequence){
        //     //     this.gameOver = true;
        //     // }
        // }


    }

}


export default Game;