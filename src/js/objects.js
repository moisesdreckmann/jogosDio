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

export default state