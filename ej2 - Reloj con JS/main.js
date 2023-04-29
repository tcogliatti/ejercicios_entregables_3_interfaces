let canvas = document.querySelector('#canvas');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let ctx = canvas.getContext('2d');

//////////////////////// CLOCK SETUP
let clockRadius = canvasWidth*0.4; // porsentaje del canvas

let posX = canvasWidth/2;
let posY = canvasHeight/2;

//////////////////////// Principal
function main(){

    /*
        (1) Crear reloj
        paso por parametro la posicion en X e Y
        el radio del reloj
        y el contexto de canvas
    */
    let reloj = new Reloj(posX, posY, clockRadius, ctx);
   
    
    /*
        (2) Primera pintada del reloj
        Se hace por fuera del ciclo setInterval para que no tarde un segundo en
        aparecer por primera vez el reloj ya que el procedimiento update clock
        no solo actualiza la hora si no que además renderiza nuevamente el canvas
    */
    updateClock(reloj);
    
    /*
        (3) Ciclo que actualiza el horario del reloj cada 1 segundo
        con la hora actual del sistema
    */
    setInterval(() =>{

        // borrar canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        // actualizar reloj y volver a renderizar
        updateClock(reloj);

    }, 1000);

}

///////////////////////// funciones auxiliares
/*
    Función que obtiene la HH, MM y SS del sistema y los devuelve en formato de objeto
*/
function obtainNow() {
    return {
        hh : new Date().getHours(),
        mm : new Date().getMinutes(),
        ss : new Date().getSeconds()        
    }
}
/*
    Procedimiento que:
        (a) obtiene un el dato de la hora actual
        (b) invoca al método update de la clase reloj y pasa por parametro el nuevo dato de la hora
        (c) redibuja el reloj con la hora actualizada invocando el método draw() de la clase reloj
    el procedimiento debe recibir por parametro un objeto de clase Reloj sobre el que operar
*/
function updateClock(reloj){
    // obtener HH, MM y SS del sistema
    let now = obtainNow();
    // metodo de update de horario del reloj
    reloj.update(now['hh'], now['mm'], now['ss']);
    // dibujar reloj
    reloj.draw();
}

