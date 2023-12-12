let complexityValue = 0
let uncertaintyValue = 0
let securityValue = 0
let controlsValue = 0
let unfamiliarityValue = 0
let dependenciesValue = 0
let performanceValue = 0
let infrastructureValue = 0
let manualValue = 0
let accessValue = 0
let perfValue = 0
let automationValue = 0

const tshirts = document.getElementById('tshirts');

const blueShirt = document.getElementById('img-blue');
const greenShirt = document.getElementById('img-green');
const yellowShirt = document.getElementById('img-yellow');
const orangeShirt = document.getElementById('img-orange');
const redShirt = document.getElementById('img-red');
const xs = document.getElementById('xs');
const s = document.getElementById('s');
const m = document.getElementById('m');
const l = document.getElementById('l');
const xl = document.getElementById('xl');
const responsiveBox = document.getElementById('responsiveBox');

// Event Listeners

document.getElementById('complexity-slider').addEventListener("change", function() {
    sliderFunction.call(this, "complexity-output", 'req-com')
});

document.getElementById('uncertainty-slider').addEventListener("change", function() {
    sliderFunction.call(this, "uncertainty-output", 'req-unc')
});

document.getElementById('security-slider').addEventListener("change", function() {
    sliderFunction.call(this, "security-output", 'req-sec')
});

document.getElementById('controls-slider').addEventListener("change", function() {
    sliderFunction.call(this, "controls-output", 'req-con')
});

document.getElementById('unfamiliarity-slider').addEventListener("change", function() {
    sliderFunction.call(this, "unfamiliarity-output", 'dev-unf')
});

document.getElementById('dependencies-slider').addEventListener("change", function() {
    sliderFunction.call(this, "dependencies-output", 'dev-dep')
});

document.getElementById('performance-slider').addEventListener("change", function() {
    sliderFunction.call(this, "performance-output", 'dev-per')
});

document.getElementById('infrastructure-slider').addEventListener("change", function() {
    sliderFunction.call(this, "infrastructure-output", 'dev-inf')
});

document.getElementById('manual-slider').addEventListener("change", function() {
    sliderFunction.call(this, "manual-output", 'tes-man')
});

document.getElementById('access-slider').addEventListener("change", function() {
    sliderFunction.call(this, "access-output", 'tes-acc')
});

document.getElementById('perf-slider').addEventListener("change", function() {
    sliderFunction.call(this, "perf-output", 'tes-per')
});

document.getElementById('automation-slider').addEventListener("change", function() {
    sliderFunction.call(this, "automation-output", 'tes-aut')
});

// Functions

function sliderFunction(a, b) {
    let x = document.getElementById(a).value;
    if (x < 1) {
        this.className = "slider";
    } else if (x == 1) {
        this.className = "slider green";
    } else if (x == 2) {
        this.className = "slider blue";
    } else if (x == 3) {
        this.className = "slider amber"
    } else if (x == 4) {
        this.className = "slider orange";
    } else {
        this.className = "slider red";
    }
    if (b == 'req-com') {
        complexityValue = x * 1;
    } else if (b == 'req-unc') {
        uncertaintyValue = x * 1;
    } else if (b == 'req-sec') {
        securityValue = x * 1;
    } else if (b == 'req-con') {
        controlsValue = x * 1;
    } else if (b == 'dev-unf') {
        unfamiliarityValue = x * 1;
    } else if (b == 'dev-dep') {
        dependenciesValue = x * 1;
    } else if (b == 'dev-per') {
        performanceValue = x * 1;
    } else if (b == 'dev-inf') {
        infrastructureValue = x * 1;
    } else if (b == 'tes-man') {
        manualValue = x * 1;
    } else if (b == 'tes-acc') {
        accessValue = x * 1;
    } else if (b == 'tes-per') {
        perfValue = x * 1;
    } else if (b == 'tes-aut') {
        automationValue = x * 1;
    }
}

function clear() {
    greenShirt.src = './images/Shirts/empty-green.svg';
    blueShirt.src = './images/Shirts/empty-blue.svg';
    yellowShirt.src = './images/Shirts/empty-yellow.svg';
    orangeShirt.src = './images/Shirts/empty-orange.svg';
    redShirt.src = './images/Shirts/empty-red.svg';
    xs.style.opacity = '0';
    s.style.opacity = '0';
    m.style.opacity = '0';
    l.style.opacity = '0';
    xl.style.opacity = '0';
    responsiveBox.innerHTML = "";
}

function calculateSize() {
    clear();
    let result = complexityValue + uncertaintyValue + securityValue + controlsValue + unfamiliarityValue + dependenciesValue + performanceValue + infrastructureValue + manualValue + accessValue + perfValue + automationValue;
    if (result == 0) {
        clear();
    } else if (result > 0 && result < 8) {
        greenShirt.src = './images/Shirts/green.svg';
        xs.style.opacity = '1';
        responsiveBox.innerHTML = 'XS';
    } else if (result <= 16) {
        blueShirt.src = './images/Shirts/blue.svg';
        s.style.opacity = '1';
        responsiveBox.innerHTML = 'S';
    } else if (result <= 24) {
        yellowShirt.src = './images/Shirts/yellow.svg';
        m.style.opacity = '1';
        responsiveBox.innerHTML = 'M';
    } else if (result <= 32) {
        orangeShirt.src = './images/Shirts/orange.svg';
        l.style.opacity = '1';
        responsiveBox.innerHTML = 'L';
    } else {
        redShirt.src = './images/Shirts/red.svg';
        xl.style.opacity = '1';
        responsiveBox.innerHTML = 'XL';
    }
    console.log(result)
}
