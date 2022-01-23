window.onload = function(){
	body.style.opacity = 1
}

window.addEventListener('scroll',reveal)

function reveal(){
	let reveals = document.querySelectorAll('.revelar')

	for(let i = 0;i< reveals.length; i++){
		let windowHeight = window.innerHeight
		let revealTop = reveals[i].getBoundingClientRect().top
		let revealPoint = 100;

		if(revealTop < windowHeight - revealPoint){
			reveals[i].classList.add('active')
		}
	}
}