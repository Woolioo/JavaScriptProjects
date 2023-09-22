const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let fahrenheit;
let celcius;
const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F';
        two.textContent = '°C';
        result.textContent = '';
    }
    else {
        one.textContent = '°C';
        two.textContent = '°F';
        result.textContent = '';
    }
};
const celToFahr = () => {
    fahrenheit = converter.valueAsNumber * 1.8 + 32;
    result.textContent = `${converter.value}°C to ${fahrenheit}°F`;
    converter.value = '';
};
const fahrToCel = () => {
    celcius = (converter.valueAsNumber - 32) / 1.8;
    result.textContent = `${converter.value}°F to ${celcius}°C`;
    converter.value = '';
};
const convertion = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            celToFahr();
        }
        else {
            fahrToCel();
        }
    }
    else {
        result.textContent = 'You have to input value!';
    }
};
const reset = () => {
    result.textContent = '';
    converter.value = '';
};
changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', convertion);
resetBtn.addEventListener('click', reset);
