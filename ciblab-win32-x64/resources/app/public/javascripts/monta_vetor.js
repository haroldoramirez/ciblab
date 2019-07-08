
function preencheVetor(vetor){
	var no_mercado = document.getElementById("mercado");
	var opt_mercado = no_mercado.options[no_mercado.selectedIndex].text;

	var no_origem = document.getElementById("origem_mp");
	var opt_origem = no_origem.options[no_origem.selectedIndex].text;

	var no_setor = document.getElementById("setor");
	var opt_setor = no_setor.options[no_setor.selectedIndex].text;

	var no_amostra = document.getElementById("amostra");
	var opt_amostra = no_amostra.options[no_amostra.selectedIndex].text;
	
	vetor.push(opt_mercado, opt_origem, opt_setor, opt_amostra);

	//document.getElementById("demo").innerHTML = vetor.toString();
}

function toExcel(vetor){
	for(var i = 0; i < vetor.length; i++){
		vetor[i] += "\t";
	}
}