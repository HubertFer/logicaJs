function pegarNumero(texto){
	return parseFloat(prompt(texto).replace(",","."))
}

function exibirTexto(texto){
	document.write(texto)
}

function formataMoeda(valor){
	document.write("R$"+(valor).toFixed(2).replace(".",",")+"<br>")
}

function nome(nome){
	var nome = prompt(nome)
	return nome
}

function peso(peso){
	var peso = prompt(peso)
	return peso
}

function altura(altura){
	var altura = prompt(altura)
	return altura
}

function mostra(mensagem){
    var tag = document.createElement("p")
    tag.innerHTML = mensagem
    document.body.appendChild(tag)
}