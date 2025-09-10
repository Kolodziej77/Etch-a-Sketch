const container = document.querySelector('#container');
let size = 0;

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
        container.appendChild(div);
    }
}

function getSize(){
    while(true){
        let input = parseInt(prompt('Enter grid size (1-100'));
        if(!isNaN(input) && input > 0 && input <= 100){
            size = input;
            makeGrid(size);
            break;
        }
        alert('Please enter a valid number between 1-100');
    }
}

getSize();