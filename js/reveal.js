

window.addEventListener('scroll',reveal)
let reveals = document.querySelectorAll('.revelar')

function reveal(){
	for(let i = 0;i< reveals.length; i++){
		let windowHeight = window.innerHeight
		let revealTop = reveals[i].getBoundingClientRect().top
		let revealPoint = 100;

		if(revealTop < windowHeight - revealPoint){
			reveals[i].classList.add('active')
			reveals[i].style.opacity = 1
		}
	}
}