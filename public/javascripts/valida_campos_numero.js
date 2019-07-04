console.log('valida_campos_numeros.js loaded');

function validaNumero(campo){
	if(isNaN(campo.value)){
		alert("O campo deve ser preenchido apenas com valores NUMÉRICOS.");
		campo.value = "";
		campo.focus();
	}
}