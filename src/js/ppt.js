import { cards2 } from "./objects"

const ppt = cards2.ppt
const player = document.querySelectorAll('.slotPlayer')
const pc = document.querySelectorAll('.slotPc')
const middle = document.querySelector('.slotMiddle1')
const middle2 = document.querySelector('.slotMiddle2')
const win = document.querySelector('.win')
const loose = document.querySelector('.loose')

let computadorCards
let i = 0

function embaralhar() {
    return ppt.slice().sort(() => Math.random() - 0.5)
}

function createGame() {
    const array = embaralhar();
    const jogadorCards = array.slice(0, 6)
    computadorCards = array.slice(0, 6)

    for (let i = 0; i < jogadorCards.length; i++) {
        if (jogadorCards[i] == 'T') {
            player[i].innerHTML = '✌'
        } else if (jogadorCards[i] == 'PE') {
            player[i].innerHTML = '👊'
        } else {
            player[i].innerHTML = '✋'
        }
    }

    let contadorJogador = 0
    let contadorPc = 0

    function analisarVitoria() {
        if (middle.innerHTML == '✌' && middle2.innerHTML == '✋') {
            contadorJogador++
            win.innerHTML = `VITORIA: ${contadorJogador}`
        } else if (middle.innerHTML == '👊' && middle2.innerHTML == '✌') {
            contadorJogador++
            win.innerHTML = `VITORIA: ${contadorJogador}`
        } else if (middle.innerHTML == '✋' && middle2.innerHTML == '👊') {
            contadorJogador++
            win.innerHTML = `VITORIA: ${contadorJogador}`
        } else if (middle.innerHTML == middle2.innerHTML) {
            // Empate
        } else {
            contadorPc++
            loose.innerHTML = `DERROTA: ${contadorPc}`
        }
        middle.classList.remove('slotPlayerBack')
        middle.innerHTML = ''
        middle.classList.add('backCardPadrao')
        middle2.classList.remove('slotPcCardBack')
        middle2.innerHTML = '';
        middle2.classList.add('backCardPadrao')
    }

    player.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (middle.innerHTML.trim() === '') {
                middle.classList.add('slotPlayerBack')
                middle.innerHTML = card.innerHTML
                middle.classList.remove('backCardPadrao')
                card.classList.remove('slotPlayerBack')
                card.innerHTML = ''
                card.classList.add('backCardPadrao')

                if (middle2.innerHTML.trim() == '') {
                    setTimeout(() => {
                        if (i < computadorCards.length) {
                            const cartaEscolhidaPeloComputador = computadorCards[i]
                            
                            if (cartaEscolhidaPeloComputador == 'T') {
                                middle2.innerHTML = '✌'
                            } else if (cartaEscolhidaPeloComputador == 'PE') {
                                middle2.innerHTML = '👊'
                            } else {
                                middle2.innerHTML = '✋'
                            }

                            middle2.classList.add('slotPlayerBack')
                            middle2.classList.remove('backCardPadrao')
                            pc[i].classList.remove('slotPcCardBack')
                            pc[i].classList.add('backCardPadrao')
                            i++

                            setTimeout(analisarVitoria, 2000)
                        }
                    }, 700)
                }
            }
        })
    })
}


createGame()
