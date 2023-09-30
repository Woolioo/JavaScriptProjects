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

function test() {
	console.log(this)
	console.log(this.name)
}

const car1 = {
	name: 'Dodge',
}

test.bind(car1)()

const movie = {
	title: `Star Wars`,
}

function showMovie(price, cinema) {
	console.log(`Film ${this.title}, cena ${price}, kino ${cinema}.`)
}

// funkcja.call (obiekt, argumenty)
showMovie.call(movie, 50, 'Multikino')

//funkcja.apply(obiekt, tablica)
const movieInfo = [40, 'Helios']
showMovie.apply(movie, movieInfo)

//class

class People {
	surname: any
	adress: any
	constructor(surname, adress) {
		this.surname = surname
		this.adress = adress
	}

	sayHi() {
		console.log(`Witaj ${this.surname}`)
	}
	showAdress() {
		console.log(`Twoj adres to ${this.adress}`)
	}
}

const people2 = new People('Mickey', 'Ogrodowa')
console.log(people2)
people2.sayHi()

class Animal {
	petName: any
	constructor(petName) {
		this.petName = petName
	}

	sound() {
		console.log(`Zwierzak robi hau hau`)
	}
}

class Dog extends Animal {
	petAge: any
	constructor(petName, petAge) {
		super(petName) //wywołanie konstruktora klasy nadrzędnej i przekazanie parametru
		this.petAge = petAge
	}
}

class Cat extends Animal {
	sound() {
		console.log(`Zwierzak robi miau miau`)
	}
}

const dog = new Dog('Tofik', 7)
const kot = new Cat('Luna')
console.log(dog)
console.log(kot)
kot.sound()
dog.sound()

// destrukturyzacji obiektów

const personInfo = {
	name: 'Jan',
	surname: 'Kowalski',
	age: 30,
	car: {
		brand: 'BMW',
		model: 'X5',
	},
}

const showPersonInfo = ({ name: firstName, surname, age }) => {
	console.log(`${firstName} ${surname} ma ${age} lat.`)
}

const showPersonInfo2 = ({car: {brand, model}}) => {
	console.log(`Jego furka to ${brand} ${model}`);
}

showPersonInfo(personInfo)
showPersonInfo2(personInfo)
