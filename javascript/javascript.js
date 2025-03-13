/* Tops */
const topImage = document.getElementById("topImage");
const changeTop = document.getElementById("changeTop");
const topjes = ["#", "top1", "top2", "top3"];

// Broeken
const bottomImage = document.getElementById("bottomImage");
const changeBottom = document.getElementById("changeBottom");
const bottoms = ["#","bottom1", "bottom2", "bottom3"];

// Schoenen
const shoesImage = document.getElementById("shoesImage");
const changeShoes = document.getElementById("changeShoes");
const shoes = ["#","shoes1", "shoes2", "shoes3"];

// Sounds
const audio = document.getElementById("sounds");
const klaarKnop = document.getElementById("klaarknop");

// Index
let topIndex = 0;
let bottomIndex = 0;
let shoesIndex = 0;

// Function tops
function veranderTop() {
    topIndex++;
    if (topIndex >= topjes.length) {
        topIndex = 0;
    }
    topImage.src = "doll/" + topjes[topIndex] + ".png";
}
// Function bottoms
function veranderbottom() {
    bottomIndex++;
    if (bottomIndex >= bottoms.length) {
        bottomIndex = 0;
    }
    bottomImage.src = "doll/" + bottoms[bottomIndex] + ".png";
}

// Function shoes
function verandershoes() {
    shoesIndex++;
    if (shoesIndex >= shoes.length) {
        shoesIndex = 0;
    }
    shoesImage.src = "doll/" + shoes[shoesIndex] + ".png";
}

/* Function sound */
function speelAudio() {
    audio.play(); /* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play */
}


// AddEventListener
changeTop.addEventListener("click", veranderTop);
changeBottom.addEventListener("click", veranderbottom);
changeShoes.addEventListener("click", verandershoes);
klaarKnop.addEventListener("click", speelAudio);










