const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach (link => {
	link.addEventListener('click', () => {
		console.log(link)
	})
})