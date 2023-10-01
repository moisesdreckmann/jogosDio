import { cards2 } from "../objects.js"

const ppt = cards2.ppt
const player = cards2.values.slotPlayer
const pc = cards2.values.slotPc
const middle = cards2.values.middlePlayer
const middle2 = cards2.values.middlePc
const win = cards2.values.win
const loose = cards2.values.loose

const audio = new Audio()
audio.src = '../assets/audios/card.mp3'
audio.type = 'audio/mpeg'

let computadorCards
let i = []
let contadorJogador = 0
let contadorPc = 0

function embaralhar() {
    return ppt.slice().sort(() => Math.random() - 0.5)
}

function createGame() {
    const array = embaralhar()
    const jogadorCards = array.slice(0, 6)
    computadorCards = array.slice(0, 6)

    for (let i = 0; i < jogadorCards.length; i++) {
        if (jogadorCards[i] === 'T') {
            player[i].innerHTML = '✌'
        } else if (jogadorCards[i] === 'PE') {
            player[i].innerHTML = '👊'
        } else {
            player[i].innerHTML = '✋'
        }
    }

    analisarVitoria();

    player.forEach((card, index) => {
        let cardClicked = false
        card.addEventListener('click', () => {
            if (cardClicked) {
                return
            }
            cardClicked = true
            audio.play()
            if (middle.innerHTML.trim() === '') {
                middle.classList.add('slotPlayerBack')
                middle.innerHTML = card.innerHTML
                middle.classList.remove('backCardPadrao')
                card.classList.remove('slotPlayerBack')
                card.innerHTML = ''
                card.classList.add('backCardPadrao')

                if (middle2.innerHTML.trim() === '') {
                    setTimeout(() => {
                        let cartaEscolhidaPeloComputador
                        do {
                            cartaEscolhidaPeloComputador = Math.floor(Math.random() * 6)
                        } while (i.includes(cartaEscolhidaPeloComputador))

                        i.push(cartaEscolhidaPeloComputador)
                        let indice = cartaEscolhidaPeloComputador

                        if (computadorCards[indice] === 'T') { 
                            middle2.innerHTML = '✌'
                        } else if (computadorCards[indice] === 'PE') { 
                            middle2.innerHTML = '👊'
                        } else {
                            middle2.innerHTML = '✋'
                        }

                        middle2.classList.add('slotPlayerBack')
                        middle2.classList.remove('backCardPadrao')
                        pc[indice].classList.remove('slotPcCardBack')
                        pc[indice].classList.add('backCardPadrao')

                        setTimeout(analisarVitoria, 2000)
                    }, 700)
                }
            }
        });
    });
}

function analisarVitoria() {
    if (middle.innerHTML === '✌' && middle2.innerHTML === '✋') {
        contadorJogador++
        win.innerHTML = `VITÓRIA: ${contadorJogador}`
    } else if (middle.innerHTML === '👊' && middle2.innerHTML === '✌') {
        contadorJogador++
        win.innerHTML = `VITÓRIA: ${contadorJogador}`
    } else if (middle.innerHTML === '✋' && middle2.innerHTML === '👊') {
        contadorJogador++
        win.innerHTML = `VITÓRIA: ${contadorJogador}`
    } else if (middle.innerHTML === middle2.innerHTML) {
        // Empate
    } else {
        contadorPc++
        loose.innerHTML = `DERROTA: ${contadorPc}`
    }
    middle.classList.remove('slotPlayerBack')
    middle.innerHTML = ''
    middle.classList.add('backCardPadrao')
    middle2.classList.remove('slotPlayerBack')
    middle2.innerHTML = ''
    middle2.classList.add('backCardPadrao')
}

createGame()
