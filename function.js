function pegarNumero(texto){
	return parseFloat(prompt(texto).replace(",","."))
}

function exibirTexto(texto){
	document.write(texto)
}

function exibirValor(valor){
	document.write((valor).toFixed(2).replace(".",",")+"<br>")
}
