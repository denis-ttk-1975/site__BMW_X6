const disableScroll = () => {
	// document.body.style.overflow = 'hidden';
	document.body.style.cssText = 'overflow: hidden; position: relative; height: 100vh;';
}

const enableScroll = () => {
	// document.body.style.overflow = '';
	document.body.style.cssText = '';
}