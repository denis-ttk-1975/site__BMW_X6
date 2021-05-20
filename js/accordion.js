document.addEventListener("DOMContentLoaded", () => {
	
	const featureLinkElems = document.querySelectorAll('.feature__link');
	// console.log (featureLinkElems);
	const featureSubElems = document.querySelectorAll('.feature-sub');
	// console.log (featureSubElems);

	for (let i = 0; i < featureSubElems.length; i++) {
		featureLinkElems[i].addEventListener('click', () => {
			console.log(i)
			// featureSubElems[i].classList.remove('')
		})
		// console.log (featureLinkElems[i])
	}
	

})

