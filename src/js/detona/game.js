import {state} from '../objects.js'
import { hitPosition, createCircle } from './circle.js'

const spans = state.views.spans
const squares = state.views.squares
const intervalo = 800

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
