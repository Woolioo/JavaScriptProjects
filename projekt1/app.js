const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const div = document.querySelector('.item1')

const showImg = () => { 
    div.classList.toggle('hide')

    if(div.classList.contains('hide')) { 
        arrowIcon.style.transform = 'rotate(180deg)'
    } else { 
        arrowIcon.style.transform = 'rotate(0deg)'
    }
} 

arrowBtn.addEventListener('click', showImg)


