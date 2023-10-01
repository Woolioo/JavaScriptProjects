const btn = document.querySelector('button')
const img = document.querySelector('img')
const url = 'https://dog.ceo/api/breeds/image/random'

btn.addEventListener('click', () => {
	fetch(url)
		.then(res => res.json())
		.then(data => img.setAttribute('src', data.message))
		.catch(err => console.error(err))
})
