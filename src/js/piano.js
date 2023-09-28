const pianoKeys = document.querySelectorAll('.piano-keys .key')
const teclas = document.querySelector('.column input[type="checkbox"]')
const audio = new Audio()

const mappedKeys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l', 'p', ';']

pianoKeys.forEach((keyElement) => {
    keyElement.addEventListener('click', () => {
        const key = keyElement.dataset.key
        playTune(key)
        activateKey(keyElement)
    })
})

teclas.addEventListener('change', () => {
    const spans = document.querySelectorAll('.piano-keys .key span')
    spans.forEach((span) => {
        span.style.display = teclas.checked ? 'inline-block' : 'none'
    })
})

const controladorDeVol = (e) => {
    audio.volume = e.target.value
}
const volumeController = document.querySelector('.volume-slider')
volumeController.addEventListener('input', controladorDeVol)

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase()
    if (mappedKeys.includes(key)) {
        playTune(key)
        const clickedKey = document.querySelector(`[data-key="${key}"]`)
        if (clickedKey) {
            activateKey(clickedKey);
        }
    }
});

function playTune(key) {
    audio.src = `../assets/audios/${key}.wav`
    audio.play()
}

function activateKey(keyElement) {
    keyElement.classList.add('active')
    setTimeout(() => {
        keyElement.classList.remove('active')
    }, 150)
}

