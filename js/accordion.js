document.addEventListener("DOMContentLoaded", () => {
	
	const featureLinkElems = document.querySelectorAll('.feature__link');
	// console.log (featureLinkElems);
	const featureSubElems = document.querySelectorAll('.feature-sub');
	// console.log (featureSubElems);

	// for (let i = 0; i < featureSubElems.length; i++) {
	// 	featureLinkElems[i].addEventListener('click', () => {
	// 		// console.log(i)
	// 		featureSubElems[i].classList.toggle('hidden');
	// 		featureLinkElems[i].classList.toggle('feature__link_active')
	// 	})
		// console.log (featureLinkElems[i])

		featureLinkElems.forEach((butt, idx) => {
			butt.addEventListener('click', () => {
				activeCheck = butt.classList.contains('feature__link_active')
				console.log(activeCheck)

				featureSubElems.forEach((featureSubElem) => {
					featureSubElem.classList.add('hidden')
				})
				featureLinkElems.forEach((featureLinkElem) => {
					featureLinkElem.classList.remove('feature__link_active')
				} )
				
				if (!activeCheck) {
				featureSubElems[idx].classList.remove('hidden');
				butt.classList.add('feature__link_active')
				}
			})
		})
	
	

})

