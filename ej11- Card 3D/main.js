"use strict"
let cardDark = document.querySelector(".card_dark");
let cardDarkW = cardDark.clientWidth;
let cardDarkH = cardDark.clientHeight;

function main(){
    let clicked = false
    cardDark.addEventListener('mousemove', (e) => {
        if(clicked)
            return;
        let {layerX, layerY} = e;
        let rotationX = ( (layerX - cardDarkW / 2) / cardDarkW) * 20;
        let rotationY = ( (layerY - cardDarkH / 2) / cardDarkH) * 20;
        cardDark.style.transform =`perspective(650px)
                                   rotateX(${rotationX}deg)
                                   rotateY(${rotationY}deg)`;
    });
    cardDark.addEventListener('mouseout', (e) => {
        if (clicked)
            return
        cardDark.style.transform = `perspective(650px)
                                    rotateX(0deg)
                                    rotateY(0deg)`;
    });
}