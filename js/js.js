const body = document.getElementsByTagName('body')[0]

function hamburguerToggle(){
	body.classList.toggle('active')
}

function resizeBtn(){
	if(window.outerWidth > 566){
		body.classList.remove('active')
	}
}