class Reloj {
    constructor(posX, posY, rad, ctx){
        this.posX = posX;
        this.posY = posY;
        this.rad = rad;
        this.ctx = ctx
        
        // definición del largo de las agujas en % del radio del reloj
        let lengthHH = rad*0.73;
        let lengthMM = rad*0.63;
        let lengthSS = rad*0.55;

        // instanciación de las 3 agujas HH, MM y SS
        this.agujaHour = new Aguja(posX, posY, lengthHH, 0, ctx);
        this.agujaMin  = new Aguja(posX, posY, lengthMM, 0, ctx);
        this.agujaSeg  = new Aguja(posX, posY, lengthSS, 0, ctx);
    }

    /*
        DRAW
        Dibuja las circunferencias del reloj, los numeros distribuidos correctamente
        e invoca el método draw() de las agujas para que estas también se dibujen
    */
    draw(){
        // aro interno blanco
        
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.rad, 0, 2*Math.PI);
        this.ctx.stroke();
        this.ctx.fillStyle='white';
        this.ctx.fill();

        // linea externa negra
        this.ctx.arc(this.posX, this.posY, this.rad, 0, 2*Math.PI);
        this.ctx.lineWidth = 6;
        this.ctx.stroke();
        

        // aro interno
        this.ctx.beginPath();

        this.ctx.arc(this.posX, this.posY, this.rad-10, 0, 2*Math.PI);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        // números
        this.ctx.font = this.rad/8 + "px arial";
        this.ctx.fillStyle='black';
        this.ctx.textAlign='center';
        this.ctx.textBaseline='middle';
        for(var i = 1; i <= 12; i++){ // itera 12 veces una por cada numero
            this.ctx.fillText( /* texto */ i, 
                                    /* pos en x */ this.posX+(this.rad*0.8*Math.cos(i*2*Math.PI/12)), 
                                    /* pos en y */ this.posY-(this.rad*0.8*Math.sin(i*2*Math.PI/12)),
                                    );}
                                    /*
                                        explicacion del calculo
                                        https://jamboard.google.com/d/1G-FCJQ2gKZXa08S-EFLlZhaxT3THfvIzoqNA9fczXA4/edit?usp=sharing
                                    */
        
        // dibujamos agujas
        this.agujaHour.draw();
        this.agujaMin.draw();
        this.agujaSeg.draw();
    }

    /*
        UPDATE
        Este procedimiento recibe hrs, minutos y seg los convierte al ángulo correspondiente.
        El calculo que deviene de la división del ángulo total por la 
        cantidad de unidades horarias y luego multiplicar por la unidad
        Luego, se envía por parámetro esos nuevos ángulos cada objeto de clase Aguja
        invocando el método update, para actualizar su posición.
    */
    update(hh, mm, ss){ 
        let fullTime = hh%12 + mm/60 + ss/3600;
        let angHH = fullTime*2*Math.PI/12;
        let angMM = mm*2*Math.PI/60;
        let angSS = ss*2*Math.PI/60;
        this.agujaHour.update(angHH);
        this.agujaMin.update(angMM);
        this.agujaSeg.update(angSS);
    }
}