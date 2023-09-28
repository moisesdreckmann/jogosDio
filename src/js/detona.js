import {state} from './objects.js';

const spans = state.views.spans
const squares = state.views.squares
let hitPosition = state.values.hitPosition
const intervalo = 800

function createCircle(elements) {
    let aleatorio = Math.floor(Math.random() * 9)
    hitPosition = aleatorio

    elements.forEach(element => {
        element.classList.remove('enemy')
    });
    elements[aleatorio].classList.add('enemy')
}

function moveAndValidateCircle() {
    setInterval(() => { createCircle(spans)}, intervalo)
    let contador1 = 0
    let contador2 = 0

    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            const clickedIndex = parseInt(square.getAttribute('data-index'))
            if (hitPosition === clickedIndex) {
                contador1++
                state.controladores.hit.innerHTML = contador1
            } else {
                contador2++
                state.controladores.miss.innerHTML = contador2
            }
        });
    });
}

moveAndValidateCircle()
