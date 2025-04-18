const body = document.querySelector('body')


const containerDiv = document.createElement('div')
const bottomDiv = document.createElement('div')
const header = document.createElement('h1')
const smallButton = document.createElement('button')
const mediumButton = document.createElement('button')
const largeButton = document.createElement('button')
const xLargeButton = document.createElement('button')
const bottomHeader = document.createElement('h3')
const resetButton = document.createElement('button')

body.appendChild(header)
body.appendChild(containerDiv)
body.appendChild(bottomDiv)

bottomDiv.append(bottomHeader, smallButton, mediumButton, largeButton, xLargeButton, resetButton)

containerDiv.classList.add('containerDiv')
header.classList.add('header')
bottomDiv.classList.add('bottomDiv')
resetButton.classList.add('resetButton')

header.textContent = 'Etch-A-Sketch'
bottomHeader.textContent = 'Change the size of your Etch-A-Sketch layout!'
smallButton.textContent = 'Small'
mediumButton.textContent = 'Medium'
largeButton.textContent = 'Large'
xLargeButton.textContent = 'Extra Large'
resetButton.textContent = 'Wipe it Clean'

let layoutSize = 256

function createGrid(size) {
    containerDiv.innerHTML = ''
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        containerDiv.appendChild(square)
    }
    setUpColors()
}
createGrid(layoutSize)



smallButton.addEventListener('click', () => {
    layoutSize = 64
    createGrid(layoutSize)
})

mediumButton.addEventListener('click', () => {
    layoutSize = 128
    createGrid(layoutSize)
})

largeButton.addEventListener('click', () => {
    layoutSize = 256
    createGrid(layoutSize)
})

xLargeButton.addEventListener('click', () => {
    layoutSize = 336
    createGrid(layoutSize)
})

resetButton.addEventListener('click', () => {
    createGrid(layoutSize)
})

const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
}

function setUpColors() {
    const eachSquare = document.querySelectorAll('.square')
    eachSquare.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor()
        })
    })
}