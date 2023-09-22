const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	`Crocodile can't stick out its tongue.`,
	'Each person spent about half an hour as a single cell.',
	'Sound travels 15 times faster through steel than through air.',
	'Sloths take two weeks to digest food.',
	'Gorillas sleep up to fourteen hours a day.',
	`Chameleon's tongue is twice as long as its body.`,
	'Chinese consume about 80 billion chopsticks in a year.',
	'To climb the Eiffel Tower you have to climb as many as 1,710 steps.'
]

const day = new Date()
currentDay.textContent = day.toLocaleString("eng", {weekday: "long"});

const showRand = () => {
    const number = Math.floor(Math.random() * facts.length)
    funFact.textContent = facts[number]
}

showRand()