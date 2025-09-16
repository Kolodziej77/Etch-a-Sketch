const container = document.querySelector('#container');
const sizeBtn = document.querySelector('#sizeBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const colorPicker = document.querySelector('#colorPicker');
const clearBtn = document.querySelector('#clearBtn');
const rubberBtn = document.querySelector('#rubberBtn');
let size = 0;
let currentMode = 'color';
let currentColor = 'yellow';

function hoverColor(div){
    div.dataset.brightness = '1';
    div.addEventListener('mouseenter', () => {
        if(currentMode === 'color'){
            div.style.background = currentColor;
        }else if(currentMode === 'rainbow'){
            div.style.background = getRandomColor();
        }else if(currentMode === 'white'){
            div.style.background = 'white';
            div.dataset.brightness = '1';
            div.style.filter = 'brightness(1)';
            return;
        }
    let brightness = parseFloat(div.dataset.brightness);
    brightness = Math.max(0, brightness - 0.1);
    div.style.filter = `brightness(${brightness})`;
    div.dataset.brightness = brightness.toString();
    });
}

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function makeGrid(size){

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const containerSize = Math.min(containerWidth, containerHeight);
    const divSize = containerSize / size;

    for(let i = 0; i < (size * size); i++){
        const div = document.createElement('div');
        div.classList.add('divGrid');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.dataset.brightness = '1';
        hoverColor(div);
        container.appendChild(div);
    }
}

function getSize(){
    while(true){
        let input = parseInt(prompt('Enter grid size (1-100)'));
        if(!isNaN(input) && input > 0 && input <= 100){
            size = input;
            makeGrid(size);
            break;
        }
        alert('Please enter a valid number between 1-100');
    }
}

sizeBtn.addEventListener('click', getSize);
rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbow';
})

rubberBtn.addEventListener('click', () => {
    currentMode = 'white';
})

colorPicker.addEventListener('input', (e) => {
    currentMode = 'color';
    currentColor = e.target.value;
})

clearBtn.addEventListener('click', () => {
    const divs = document.querySelectorAll('.divGrid');
    divs.forEach(div => {
        div.style.background = 'white';
        div.dataset.brightness = '1';
        div.style.filter = 'brightness(1)';
    });
});

makeGrid(30);