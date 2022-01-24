const especificacoes = document.getElementById('especificacoes-conteudo')

const conteudos = ['Desempenho','Personalização','Conforto']
const icons = ['imagens/tempo-rapido.svg','imagens/configuracoes.svg','imagens/grin-alt.svg']
let i = 0
conteudos.forEach(e => {
	especificacoes.innerHTML += `<div class="especificacoes-div revelar">
									<h1>${e} <i class="fi fi-rs-time-fast"><img src="${icons[i]}" ></i></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit facilisis aliquet.Mauris ac tellus turpis. Vivamus sed tempor est. Mauris in tellus non nisl mollis pharetra.</p>
								</div>`
								i++
})