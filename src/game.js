class Game {
    // constructor(ctx, timeLimit){
    constructor(inputTimeLimit){
        this.sequenceKeys = [
            "w","a","d",
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9"
        ];

        this.colors = [
            "red",
            "blue",
            "brown",
            "green",
            "orange",
            "purple"
        ];

        // this.DIM_X = 800;
        // this.DIM_Y = 800;
        // this.BG_COLOR = "red";
        // this.ctx = ctx;

        this.gameSequence = "";

        this.timeLimit = inputTimeLimit+1;
        this.countdown = inputTimeLimit+1;
        this.timer = document.getElementById("timer");
        this.timer.innerHTML = inputTimeLimit;

        this.enteredSequence = "";

        this.highscore = 1;
        this.level = document.getElementById("level");
        this.level.innerHTML = this.highscore;

        // gameSeq and enterSeq are only used for testing purposes
        // this.gameSeq = document.getElementById("game-seq");
        // this.enterSeq = document.getElementById("enter-seq");

        // This is the display of the sequence
        this.drawSeq = document.getElementById("draw-seq");

        this.playRound = this.playRound.bind(this);

        this.gameOverDisplay = document.getElementById("game-over");
        this.finalScoreDisplay = document.getElementById("final-score");

        this.startInterval = "";
        this.checkIndex = 0;

        this.startButton = document.getElementById("start-button");
        this.startBlock = document.getElementById("start-block");

        this.ctrlsBlock = document.getElementById("ctrls-block");
        this.ctrlsButton = document.getElementById("ctrls-button");
        this.ctrlsModal = document.getElementById("ctrls-modal");
        this.ctrlsClose = document.getElementById("ctrls-close");
    }
    
    generateRandomItem(){
        let randomIndex = Math.floor(Math.random() * this.sequenceKeys.length)
        return this.sequenceKeys[randomIndex];
    }

    generateRandomColor(){
        let randomIndex = Math.floor(Math.random() * this.colors.length)
        return this.colors[randomIndex];
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
                let newEle = document.createElement("li");
                
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

    playRound(){

        let randomItem = this.generateRandomItem();
        let randomColor = this.generateRandomColor();

        // this.gameSeq.textContent += randomItem;
        this.gameSequence += randomItem;
        
        let newEle = document.createElement("div");
                
        if (randomItem === "w"){
            newEle.className = "triangle";
            newEle.style.borderBottomColor = randomColor;
        }
        else if (randomItem === "a"){
            newEle.className = "square";
            newEle.style.backgroundColor = randomColor;
        }
        else if (randomItem === "d"){
            newEle.className = "circle";
            newEle.style.backgroundColor = randomColor;
        }
        else {
            newEle.className = "number";
            newEle.innerHTML = randomItem;
            newEle.style.color = randomColor;
        }
        
        this.drawSeq.appendChild(newEle);

        //console.log(this.gameSequence);
    }

    countdownTimer(){
        this.startInterval = setInterval(decrementTimer, 1000);

        let that = this;

        function decrementTimer(){
            that.countdown--;
            // console.log(countdown);
            if(that.countdown < 0){
                that.timer.innerHTML = "0";
                clearInterval(that.startInterval);
                that.gameOverDisplay.innerHTML = "Game Over";
                that.finalScoreDisplay.innerHTML = "Highscore: " + that.highscore;
                that.reapplyButtonStyling();
                // console.log("Time Over!");
                // console.log(that.highscore);
            }
            else{
                that.timer.innerHTML = that.countdown;
            }
        }
    }

    setup(){
        // This needed to be in its own function to prevent
        // attaching additional keydown listeners after restart.
        // NOTE: There should only be 1 keydown event listener!
        document.addEventListener('keydown', (e)=>{
            this.enteredSequence += e.key;
            // this.enterSeq.textContent += `${e.key}`;

            //console.log("Entered key: " + e.key);
            //console.log("Check: " + this.gameSequence + " Index: " + this.checkIndex);

            if(e.key !== this.gameSequence[this.checkIndex]){
                //console.log("Entered " + this.checkIndex);
                
                this.gameOverDisplay.innerHTML = "Game Over";
                this.finalScoreDisplay.innerHTML = "Highscore: " + this.highscore;
                clearInterval(this.startInterval);
                this.timer.innerHTML = "0";
                this.reapplyButtonStyling();
                
                //console.log("Game Over!");
                //console.log(this.highscore);
            }

            this.checkIndex++;

            // This needs to be put after the increment of the index
            // to handle the case when the entered sequence matches
            // and things need to be reset for the next round.
            if(this.enteredSequence === this.gameSequence && this.enteredSequence){
                // if the user entered the correct sequence, then the level increases
                // and another item is added to the sequence
                // and the countdown is reset.
                // console.log("Matched");
                this.resetRound();
                this.highscore++;
                this.level.innerHTML = this.highscore;
                this.playRound();
            }
        });
    }

    ctrls(){
        this.ctrlsButton.addEventListener("click", ()=>{
            this.ctrlsModal.style.display = "block";
        });
        this.ctrlsClose.addEventListener("click", ()=>{
            this.ctrlsModal.style.display = "none";
        });
    }

    start(){
        this.startButton.addEventListener("click", ()=>{
            this.ctrlsBlock.style.display = "none";
            this.startBlock.style.display = "none";
            this.restartGame();
            this.run();
        });
    }

    resetRound(){
        this.enteredSequence = "";
        // this.enterSeq.textContent = "User entered: ";
        this.countdown = this.timeLimit;
        this.checkIndex = 0;
    }

    restartGame(){
        this.resetRound();
        this.highscore = 1;
        this.gameSequence = "";
        this.timer.innerHTML = this.timeLimit-1;
        this.level.innerHTML = this.highscore;
        this.startInterval = "";
        this.clearRestartDisplay();
    }
    
    clearRestartDisplay(){
        this.gameOverDisplay.innerHTML = "";
        this.finalScoreDisplay.innerHTML = "";
        this.drawSeq.innerHTML = "";
    }

    reapplyButtonStyling(){
        this.startBlock.style.display = "flex";
        this.startButton.textContent = "Restart";
    }

    run(){
        this.playRound();
        this.countdownTimer();
    }
}

export default Game;