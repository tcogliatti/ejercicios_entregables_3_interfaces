

class Aguja {
    constructor(posX, posY, length, step, canvas){
        this.canvasHeight = canvas.height;
        this.canvasWidth = canvas.width;
        // console.log(canvas);
        this.posX = posX;
        this.posY = posY;
        this.length = length;
        this.step = step;
        this.ctx = canvas.getContext('2d');

        // this.rotate(this.getAngle(0,3));
        this.ctx.translate(this.posX, this.posY);
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0); // punta de la aguja
        this.ctx.lineTo(0, -50); // extremo superior
        // this.ctx.lineTo(5, 0); // base derecha
        // this.ctx.lineTo(-5, 0); // base izquierda
        this.ctx.closePath(); // cierra el camino

//         this.ctx.beginPath();
// this.ctx.moveTo(this.posX, this.posY); // punta de la aguja
// this.ctx.lineTo(this.posX, this.posY - this.length); // extremo superior
// this.ctx.lineTo(this.posX + 5, this.posY); // base derecha
// this.ctx.lineTo(this.posX - 5, this.posY); // base izquierda
        this.ctx.lineWidth = 3;  
        this.ctx.strokeStyle = 'black';
    }
    draw(){
        // limpiamos el lienzo
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        // this.ctx.fill();
        
        this.ctx.stroke();
console.log('dibujando');
        // this.ctx.beginPath();
        // this.ctx.arc(0, 0, 100,0,(Math.PI/180)*360);
        // this.ctx.fill();
    }
    next(){
        this.start = this.start + 1;
        if(this.start == 12)
            this.start = 0;
        console.log('move', this.getAngle(this.start));
        this.rotate(this.getAngle(this.start));
        this.draw();
    }
    rotate(angle){
        this.ctx.rotate(angle);
    }

    getAngle(step){
        return (step * Math.PI / 6) - (Math.PI / 2);
    }
}