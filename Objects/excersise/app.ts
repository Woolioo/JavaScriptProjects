const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const p = document.querySelector('p')

function Food(foodName, foodPrice) {
	this.foodName = foodName
	this.foodPrice = foodPrice
}

const food = new Food('kebab', 23)
const food2 = new Food('pizza', 44)
const food3 = new Food('burger', 31)

Food.prototype.foodInfo = function () {
	console.log(`${this.foodName} kosztuje ${this.foodPrice}zł.`)
}

btn1.addEventListener('click', () => food.foodInfo())
btn2.addEventListener('click', () => food2.foodInfo())
btn3.addEventListener('click', () => food3.foodInfo())
