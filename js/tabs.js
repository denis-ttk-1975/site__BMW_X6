const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const titleElems = document.querySelectorAll('.design__title'); 

console.log (tabsHandlerElems)
console.log (tabsFieldElems)


for (const tab of tabsHandlerElems) {
	
	tab.addEventListener('click', () => {
		titleElems.forEach(title => {
			title.classList.toggle('hidden')
		})
		tabsHandlerElems.forEach(item => {
			if (item == tab) {
				item.classList.add('design-list__item_active')
			} 
			else { 
				item.classList.remove('design-list__item_active') 
			}

		})
		tabsFieldElems.forEach(item => {
			if (item.dataset.tabsField == tab.dataset.tabsHandler) {
				item.classList.remove('hidden')
			}
			else {
				item.classList.add('hidden')
			}
		})

	})
}