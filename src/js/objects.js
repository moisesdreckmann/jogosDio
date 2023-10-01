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

const cards = {
    emojis: ['🍕','🍕','🍔','🍔','🍗','🍗','🍫','🍫','🍟','🍟','👀','👀', '🥩','🥩','🎂','🎂','🍰','🍰','🥤','🥤','☕','☕', '🌭','🌭'],
    openCards: [],
    container: document.querySelector('.sectionMemoria'),
    btn: document.querySelector('.btnMemoria')
}

const cards2 = {
    ppt: [
        'T', 'T', 'T', 'T', 'PE', 'PE', 'PE', 'PE', 'PA', 'PA', 'PA', 'PA',
        'T','PA','PE'
    ]
}


export { state, cards, cards2 };
