console.log('Controller Carregado');

let form = document.getElementById('form_elementos');

let data = '';


form.onsubmit = function() {
  
    data = form.inputData;
    console.log(data);
};


//function salvarDados() {
    //console.log('Salvar Dados');
//}
