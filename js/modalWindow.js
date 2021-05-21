const moreElem = document.querySelectorAll('.more');
const modalElem = document.querySelectorAll('.modal');

const openModal = () => {
	modalElem.classList.remove('hidden');
}
;
const closeModal = () => {

};

moreElem.addEventListener('click', openModal())