
//vetor utilizado para printar a linha na tabela
var vetor_linha = new Array();


/*function f(conteudo, tag){
	tag.setAttribute("href", "data:application/octet-stream;charset=utf-8;base64," + btoa(conteudo));
}*/


function saveAs(){
  	preencheVetor(vetor_linha);
  	toExcel(vetor_linha);
	var filename = "teste.xls";
	download (filename, vetor_linha);

}

function download(filename, text) {
  var element = document.createElement('a');
  //element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.join(" ")));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}