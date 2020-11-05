class Game {
    constructor(ctx){
        this.sequenceKeys = [
            "w","a","s","d",
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9"
        ];

        this.DIM_X = 1000;
        this.DIM_Y = 1000;
        this.BG_COLOR = "red";
        this.ctx = ctx;
    }
    
    generateRandomSequence(array, numberOfItems){
        let randomIndices = [];
        for(let i = 0; i<numberOfItems; i++){
            randomIndices.push(Math.floor(Math.random() * array.length));
        }
        return randomIndices;
    }

    draw(){
        // ctx.fillRect(x, y, width, height);
        this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.ctx.fillStyle = this.BG_COLOR;
        this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

        
        // arc(x, y, radius, startAngle, endAngle)
        this.ctx.beginPath();
        this.ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(250, 50, 40, 0, 2 * Math.PI);
        this.ctx.stroke();

    }

    run(){
        let gameOver = false;
        // while(!gameOver){
            
        // }
        this.draw();
    }

}


module.exports = Game;