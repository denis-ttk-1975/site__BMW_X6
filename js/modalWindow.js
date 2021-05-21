
const modalElem = document.querySelector('.modal');
const moreElems = document.querySelectorAll('.more');

console.log(moreElems)
console.log(modalElem)

const openModal = () => {
	modalElem.classList.remove('hidden');
}

const closeModal = () => {
	modalElem.classList.add('hidden');
}
	
moreElems.forEach (item => {
	item.addEventListener('click', openModal)
})

modalElem.addEventListener('click', (event) => {
	const target = event.target
	if (target.classList.contains('overlay') || 
	target.classList.contains('modal__close')) {
		closeModal()
	}

	// ПОКРАСИМ В КРАСНЫЙ ЦВЕТ ЗАГОЛОВОК МОДАЛЬНОГО ОКНА

	if (target.classList.contains('modal__title')) {
		target.style.color = 'red'
	}
})





// const moreElem = document.querySelectorAll('.more');
// const modalElem = document.querySelectorAll('.modal');



// modalElem.classList.remove('hidden')
