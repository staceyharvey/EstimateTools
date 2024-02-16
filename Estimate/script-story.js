const messageBox = document.getElementById('messageBox');

const sp1 = document.getElementById('sp1');

const sp2 = document.getElementById('sp2');

const sp3 = document.getElementById('sp3');

const sp5 = document.getElementById('sp5');

const sp8 = document.getElementById('sp8');

// Variables

let complexityValue = 0
let uncertaintyValue = 0
let repetitionValue = 0
let sp = 0
let message = ""

// Event Listeners

document.getElementById('complexity-slider').addEventListener("change", function() {
    sliderFunction.call(this, "complexity-output", 'com')
});

document.getElementById('uncertainty-slider').addEventListener("change", function() {
    sliderFunction.call(this, "uncertainty-output", 'unc')
});

document.getElementById('repetition-slider').addEventListener("change", function() {
    sliderFunction.call(this, "repetition-output", 'rep')
});

// Functions

function sliderFunction(a, b) {
    let x = document.getElementById(a).value;
    if (x < 1) {
        this.className = "slider";
    } else if (x == 1) {
        this.className = "slider green";
    } else if (x == 2) {
        this.className = "slider amber";
    } else {
        this.className = "slider red";
    }
    if (b == 'com') {
        complexityValue = x * 1.5
    } else if (b == 'unc') {
        uncertaintyValue = x * 2
    } else {
        repetitionValue = x * 1
    }
}

function clear() {
    sp1.className = "";
    sp2.className = "";
    sp3.className = "";
    sp5.className = "";
    sp8.className = "";
    message = "Calculate SP"
    messageBox.classList.remove('bad');
}

function calculateSP() {
    clear();
    let result = complexityValue + uncertaintyValue + repetitionValue;
    if (result == 0) {
        clear();
    } else if (result > 0 && result <= 1.5) {
        sp = 1;
        message = "1 Story Point";
        sp1.className = "highlight";
    } else if (result <= 2.5) {
        sp = 2;
        message = "2 Story Points";
        sp2.className = "highlight";
    } else if (result <= 3.5) {
        sp = 3;
        message = "3 Story Points";
        sp3.className = "highlight";
    } else if (result <= 5.5) {
        sp = 5;
        message = "5 Story Points";
        sp5.className = "highlight";
    } else if (result <= 8) {
        sp = 8;
        message = "8 Story Points";
        sp8.className = "highlight";
    } else {
        sp = 13;
        message = "13 Story Points"
        messageBox.classList.add('bad');
    }
    messageBox.innerHTML = message;
}
