/* Tops */
const topImage = document.getElementById("topImage");
const changeTop = document.getElementById("changeTop");
const tops = ["#", "top1", "top2", "top3"];

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
const doneButton = document.getElementById("donebutton");

// Index
let topIndex = 0;
let bottomIndex = 0;
let shoesIndex = 0;

// Function tops
function editTop() {
    topIndex++;
    if (topIndex >= tops.length) {
        topIndex = 0;
    }
    topImage.src = "doll/" + tops[topIndex] + ".png";
}

// Function bottoms
function editBottom() {
    bottomIndex++;
    if (bottomIndex >= bottoms.length) {
        bottomIndex = 0;
    }
    bottomImage.src = "doll/" + bottoms[bottomIndex] + ".png";
}

// Function shoes
function editShoes() {
    shoesIndex++;
    if (shoesIndex >= shoes.length) {
        shoesIndex = 0;
    }
    shoesImage.src = "doll/" + shoes[shoesIndex] + ".png";
}

/* Function sound */
function playAudio() {
    audio.play(); /* https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play */
}


// AddEventListener
changeTop.addEventListener("click", editTop);
changeBottom.addEventListener("click", editBottom);
changeShoes.addEventListener("click", editShoes);
doneButton.addEventListener("click", playAudio);


