const btn = document.querySelector('button')
const img = document.querySelector('img')
const url = 'https://dog.ceo/api/breeds/image/random'

btn.addEventListener('click', () => {
	fetch(url)
		.then(res => res.json())
		.then(data => img.setAttribute('src', data.message))
		.catch(err => console.error(err))
})

//  	PROMISES

const checkAge = age => {
	return new Promise<void>((resolve, reject) => {
		if (age >= 18) {
			resolve()
		} else {
			reject(`You're not old enough`)
		}
	})
}

const doubleCheck = () => {
	return new Promise(resolve => {
		console.log(`Checking one more time...`)
		setTimeout(() => {
			resolve('Okay, everything is fine')
		}, 1000)
	})
}
// checkAge(52)
// 	.then(() => {
// 		console.log('You can come in')
// 		return doubleCheck()
// 	})
// 	.then(res => console.log(res))
// 	.then(() => {
// 		console.log(`You've passed the test`)
// 	})
// 	.catch(error => console.error(error))

//  ASYNC & AWAIT

async function newTest() {
	try {
		await checkAge(22)
		console.log('You can come in')
		await doubleCheck()
		console.log('Okay, everything is fine')
		console.log("You've passed the test")
	} catch {
		console.error(`You're not old enoug`)
	}
}
newTest()
