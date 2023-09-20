const sizeUP = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const increaseText = () => {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}

const decreaseText = () => {
	if (fontSize <= 21) return

	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}

const colorChange = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	p.style.color = `rgb(${r},${g},${b})`
}

sizeUP.addEventListener('click', increaseText)
sizeDown.addEventListener('click', decreaseText)
btnColor.addEventListener('click', colorChange)