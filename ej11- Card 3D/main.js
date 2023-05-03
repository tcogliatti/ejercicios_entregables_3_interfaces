"use strict"
let cardDark = document.querySelector(".card_dark");
let cardDarkW = cardDark.clientWidth;
let cardDarkH = cardDark.clientHeight;
// este valor se utiliza como multiplicador para calcular los grados rotación
let maxDeformation = 50;
function main(){
    // escucha evento de movimiento de mouse sobre elemento carta
    cardDark.addEventListener('mousemove', (e) => {
        // obtenemos la coordenada X,Y del mouse
        let {offsetY, offsetX} = e; 

        /*
            Calculo de ángulo de rotaciones para transofrmación:
            El calculo de la rotación en x e y es identico
            El resultado del calculo es un valor que representa unidades de grados
            Tomo como ejemplo para explicar el calculo el del eje X
            1) el calculo es el resultado de: (A) * (B)
            2) el término (A) es resultado de: (Dist_Al_Centro) / (tamaño_de_carta)
               Dist_al_centro: (coordX_mouse) - (coordX_centro_carta) 
                  da un valor positivo si el cursor se encuentra del centro hacia la derecha de la carta
                  da un valor negativo si se encuentra desde el centro hacia la izquierda
                  de l resultado del signo depende el sentido de la transformación
                  el resultado de este calculo dará un valore entre 0 y la mitad del ancho en x de la carta
               (Dist_Al_Centro) / (tamaño_de_carta)    
                  este calculo representa un porcentaje respecto del ancho de la carta
                  el resultado de este calculo dará un valor entre 0 y 50% del ancho total de la carta
            3) el término (B) es un multiplicador que representaría los grados totales de la transformación
            4) teniendo en cuenta que le resultado de (A) varía ente 0 y 50%
               el máximo valor que puede adoptar (A) * (B) = +/- 50%(B)
            5) al calculo de Y se le agrega un /2 al final ya que el angulo es muy abierto
               y como la rotación se da sobre el eje mas largo, el efecto es muy disimil respecto
               a la rotación del eje X. Por eso se reduce a la mitad
        */      
        let rotationX = ( (offsetX - (cardDarkW / 2)) / cardDarkW) * maxDeformation;
        let rotationY = ( (offsetY - (cardDarkH / 2)) / cardDarkH) * maxDeformation / 2;

        /* 
            Aplico transformación a tarjeta añadiendo estilo
            notese que invierto los terminos de los valores de X e Y
            ya que el efecto visual es mas natural al hacer
            la rotación sobre el eje inverso
        */
        cardDark.style.transform =`perspective(650px)
                                   rotateX(${rotationY}deg)
                                   rotateY(${rotationX}deg)`;
    });

    // este evento define qué hacer cuando no escucho mas el mouse sobre la tarjeta
    cardDark.addEventListener('mouseout', (e) => {
        // elimina la rotación
        cardDark.style.transform = `perspective(650px)
                                    rotateX(0deg)
                                    rotateY(0deg)`;
    });
}