

class Aguja {
    constructor(posX, posY, length, ang, ctx){
        this.posX = posX;
        this.posY = posY;
        this.length = length;
        this.ctx = ctx;
        this.ang = ang;
    }

    /*
        DRAW
        Este método calcula la posición de la aguja en función de un ángulo.
        La metodología es la misma que la utilizada para dibujar los numeros
        del reloj en la clase Reloj
    */

    draw(){
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.posX+this.length*Math.sin(this.ang), // posición de X
                        this.posY-this.length*Math.cos(this.ang));// posición de Y
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
    }

    update(ang){
        this.ang = ang;
    }
 
}