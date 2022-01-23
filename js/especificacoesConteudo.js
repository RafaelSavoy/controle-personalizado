const especificacoes = document.getElementById('especificacoes-conteudo')

const conteudos = ['Desempenho','Personalização','Conforto']

conteudos.forEach(e => {
	especificacoes.innerHTML += `<div class="especificacoes-div revelar">
									<h1>${e}</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit facilisis aliquet.Mauris ac tellus turpis. Vivamus sed tempor est. Mauris in tellus non nisl mollis pharetra.
								</div>`
})