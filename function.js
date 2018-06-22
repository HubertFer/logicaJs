function pegarNumero(num){
	return parseFloat(prompt(num).replace(",","."))
}

function exibirTexto(texto){
	document.write(texto)
}

function exibirValor(valor){
	document.write((valor).toFixed(2).replace(".",",")+"<br>")
}
