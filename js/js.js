const nav = document.getElementById('nav')

function hamburguerToggle(){
	nav.classList.toggle('active')
}

function resizeBtn(){
	if(window.outerWidth > 566){
		nav.classList.remove('active')
	}
}

window.addEventListener('scroll',reveal)

let reveals = document.querySelectorAll('.revelar')

function reveal(){
	for(let i = 0;i < reveals.length; i++){
		let windowHeight = window.innerHeight
		let revealTop = reveals[i].getBoundingClientRect().top
		let revealpoint = 150;

		if(revealTop < windowHeight - revealpoint){
			reveals[i].classList.add('active')
		}else{
			reveals[i].classList.remove('active')
		}
	}
}