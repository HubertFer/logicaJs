function pegarNumero(texto){
	return parseFloat(prompt(texto).replace(",","."))
}

function exibirTexto(texto){
	document.write(texto)
}

function formataMoeda(valor){
	document.write("R$"+(valor).toFixed(2).replace(".",",")+"<br>")
}

function nome(){
	var nome = prompt("Nome do Aluno: ")
	document.write("Nome: " + nome + "<br>")
}

function peso(){
	var peso = prompt("Digite o Peso do Aluno:")
	document.write("Peso: " + peso + "kg" + "<br>")
}

function altura(){
	var altura = prompt("Digite a Altura do Aluno:").replace(".",",")
	document.write("Altura: " + altura + "<br>")
}

function dob(){
	var dia = prompt("Digite o dia de nascimento:")
	var mes = prompt("Digite o mês de nascimento:")
	var ano = prompt("Digite o ano de nascimento:")
	document.write("Data de Nascimento: " + dia + "/" + mes + "/" + ano)
}