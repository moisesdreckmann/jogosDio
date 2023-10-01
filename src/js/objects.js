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
    ],
    values: {
        slotPlayer: document.querySelectorAll('.slotPlayer'),
        slotPc: document.querySelectorAll('.slotPc'),
        middlePlayer: document.querySelector('.slotMiddle1'),
        middlePc: document.querySelector('.slotMiddle2'),
        win: document.querySelector('.win'),
        loose: document.querySelector('.loose')
    }
}


export { state, cards, cards2 };
