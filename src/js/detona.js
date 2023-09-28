const state = {
    views: {
        squares: document.querySelectorAll('.squareDetona'),
        spans: document.querySelectorAll('.squareDetona span'),
        spanEnemy: document.querySelector('.squareDetona span.enemy')
    },
    controladores: {
        hit: document.querySelector('.span1Detona'),
        miss: document.querySelector('.span2Detona')
    },
    values: {
        hitPosition: 0
    }
}
const intervalo = 800

function createCircle(elements) {
    let aleatorio = Math.floor(Math.random() * 9)
    state.values.hitPosition = aleatorio
    elements.forEach(element => {
        element.classList.remove('enemy')
    });
    elements[aleatorio].classList.add('enemy')
}

function moveAndValidateCircle() {
    setInterval(() => { createCircle(state.views.spans)}, intervalo)
    let contador1 = 0
    let contador2 = 0

    state.views.squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            const clickedIndex = parseInt(square.getAttribute('data-index'))
            if (state.values.hitPosition === clickedIndex) {
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
