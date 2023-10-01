import {cards} from '../objects.js'

const emojis = cards.emojis
let openCards = cards.openCards;
const container = cards.container
const audio = new Audio();
audio.src = '../assets/audios/card.mp3'
audio.type = 'audio/mpeg'

const btn = cards.btn
btn.onclick = resetGame

const intervalo = 500

function shuffleArray(emojis) {
    return emojis.slice().sort(() => Math.random() - 0.5)
}

let shuffleEmojis = shuffleArray(emojis)

function createGame() {
    container.innerHTML = '';
    for (let i = 0; i < shuffleEmojis.length; i++) {
        const box = document.createElement('div')
        box.className = 'cardMemoria'
        box.innerHTML = shuffleEmojis[i]
        box.onclick = validateClick
        container.appendChild(box);
    } 
}

function validateClick() {
    if (openCards.length < 2) {
        this.classList.add('boxOpen')
        openCards.push(this)
        audio.play()
    }
    if (openCards.length === 2) {
        setTimeout(() => {
            if (openCards[0].innerHTML === openCards[1].innerHTML) {
                openCards[0].classList.add('boxMatch')
                openCards[1].classList.add('boxMatch')
            } else {
                openCards[0].classList.remove('boxOpen')
                openCards[1].classList.remove('boxOpen')
            }
            openCards = []
            let boxMatch = document.querySelectorAll('.boxMatch')
            if (boxMatch.length === emojis.length) {
                alert('Você ganhou, parabéns!')
            }
        }, intervalo)
    }
}

function resetGame() {
    const allCards = document.querySelectorAll('.cardMemoria')
    allCards.forEach(card => {
        card.classList.remove('boxOpen', 'boxMatch')
    });

    openCards = [];
    shuffleEmojis = shuffleArray(emojis)
    createGame()
}

createGame()