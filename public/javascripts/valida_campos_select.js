
//varrer toda a página buscando selects para verificação
function validaSelect(){
	if(document.form_elementos.mercado.value == 'controle'){
		alert("Selecione uma opção válida");
	}
	document.form_elementos.mercado.focus();
}