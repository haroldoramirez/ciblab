
function habilitaCampo(){
    var div = document.getElementById("biogas");
    var amostras = div.getElementsByTagName("input");
    var vetor_amostras = new Array();

    vetor_amostras.push(amostras[0].value, amostras[1].value, amostras[2].value);
    
    document.getElementById("demo").innerHTML = vetor_amostras.join(" ");
}