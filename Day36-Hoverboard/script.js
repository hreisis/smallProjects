const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500
const btn = document.querySelector('.btn')

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    btn.addEventListener('click', ()=> clear(square))

    container.appendChild(square)
}


function setColor(e) {
    const color = getRandomColor()
    e.style.background = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
    e.style.background = '#1d1d1d'
}

function clear(e) {
    e.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

btn.addEventListener('click', (square)=> {
    square.style.boxShadow = '0 0 2px #000'
})