import {state} from '../objects.js'

let hitPosition = state.values.hitPosition

function createCircle(elements) {
    let aleatorio = Math.floor(Math.random() * 9)
    hitPosition = aleatorio

    elements.forEach(element => {
        element.classList.remove('enemy')
    });
    elements[aleatorio].classList.add('enemy')
}

export { hitPosition, createCircle }