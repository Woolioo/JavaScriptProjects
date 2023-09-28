const newUser = {
	//basic object
	name: 'Micky',
	age: 20,
	car: {
		brand: 'BMW',
		model: 'M3',
		color: 'black',
		sound() {
			console.log(`wrrrrum`)
		},
	},
}

newUser['country'] = 'Poland'
newUser['fav-food'] = 'kebab'

const catName = 'Luna'
const catAge = '5'

const cat = {
	// using names of variables istead of key and value
	catName,
	catAge,
}

console.log(newUser)
newUser.car.sound()
console.log(cat)

for (const data in newUser) {
	//for in
	console.log(data + ': ' + newUser[data])
}

function User(name, age) {
	//consturctor
	this.name = name
	this.age = age
}

const nextUser = new User('Klaudia', 23) //used of 'new'
const nextUser2 = new User('Kasia', 24)
console.log(nextUser)
console.log(nextUser2)

User.prototype.hello = function () {
	//prototype
	console.log(`Cześć ${this.name}`)
}

nextUser.hello()
nextUser2.hello()

const ob = {
	number: 123,
	showNumber() {
		console.log(this.number)
	},
	showNmber2() {
		const test = () => {
			console.log(this.number)
			console.log(this)
		}
		test()
	},
}

ob.showNumber()
ob.showNmber2()
