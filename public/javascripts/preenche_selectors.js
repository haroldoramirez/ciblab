

function apagaElementos(id){
	for (var i = 0; i < 200; i++){
		id.remove(0);
	}
	setaControle(id);
}

function setaControle(id){
	var op = document.createElement("option");
	op.value = "controle";
	op.text = "--Selecione--";
	id.add(op,id[0]);
}

function createOption(i, id, numLista){
	var op = document.createElement("option");
	op.value = numLista;
	op.text = listaSelector[numLista];
	id.add(op, id[i]);
}

function reset(id){
	if(id.value == "controle"){
		apagaElementos(id);
	}
}

function loadMatPrima(){
	var matPrima = document.getElementById("origem_mp");
	if(mercado.value == "controle"){
		reset(matPrima);
	}
	//Agroindústria
	if(mercado.value == "m1"){
		var i = 1;
		apagaElementos(matPrima);
		while(i < 9){
			createOption(i, matPrima, i+4);
			i++;
		}
	}
	//Cultivo Energético
	if(mercado.value == "m2"){
		apagaElementos(matPrima);
		createOption(1, matPrima, 1);
	}
	//Garantia da qualidade
	if(mercado.value == "m3"){
		apagaElementos(matPrima);
		createOption(1, matPrima, 2);
	}
	//Indústria
	if(mercado.value == "m4"){
		apagaElementos(matPrima);
		//5
		createOption(1, matPrima, 5);
		createOption(2, matPrima, 11);
		createOption(3, matPrima, 12);
	}
	//Resíduoes urbanos
	if(mercado.value == "m5"){
		apagaElementos(matPrima);
		createOption(1, matPrima, 0);
		createOption(2, matPrima, 3);
		createOption(3, matPrima, 4);
		createOption(4, matPrima, 12);

	}
	
}

function loadSetor(){
	var set = document.getElementById("setor");
	if(origem_mp.value == "controle"){
		reset(set);
	}
	//Codigestão
	if(origem_mp.value == 0){
		apagaElementos(set);
		createOption(1, set, 0);
	}
	if(origem_mp.value == 3){
		apagaElementos(set);
		createOption(1, set, 24);
	}
	if(origem_mp.value == 4){
		apagaElementos(set);
		createOption(9, set, 44);
		createOption(8, set, 28);
		createOption(7, set, 25);
		createOption(3, set, 20);
		createOption(4, set, 21);
		createOption(1, set, 0);
		createOption(2, set, 15);
		createOption(5, set, 22);
		createOption(6, set, 24);
	}
	//Agroindústria
	if(origem_mp.value == 5){
		apagaElementos(set);
		createOption(1, set, 39);
		createOption(2, set, 16);
		createOption(3, set, 30);
	}
	if(origem_mp.value==6){
		apagaElementos(set);
		createOption(1, set, 36);
	}
	if(origem_mp.value==7){
		apagaElementos(set);
		createOption(1, set, 31);
	}
	if(origem_mp.value==8){
		apagaElementos(set);
		createOption(1, set, 36);
	}
	if(origem_mp.value==9){
		apagaElementos(set);
		createOption(1, set, 13);
		createOption(2, set, 43);
	}
	if(origem_mp.value==10){
		apagaElementos(set);
		createOption(1, set, 10);
		createOption(2, set, 17);
		createOption(3, set, 19);
		createOption(4, set, 46);
		createOption(5, set, 75);
		createOption(6, set, 0);
	}
	if(origem_mp.value==11){
		apagaElementos(set);
		createOption(1, set, 32);
		createOption(2, set, 47);
	}
	if(origem_mp.value==12){
		apagaElementos(set);
		createOption(1, set, 41);
		/*for(var i = 1; i<=47; i++){
			createOption(i, set, i+12);
		}*/
	}
}

function loadAmostra(){
	var sample = document.getElementById("amostra");
	if(setor.value == "controle"){
			reset(sample);
	}
	else{
		apagaElementos(sample);
		for(var i = 48; i<138; i++){
			createOption((i-47), sample, i);
		}
	}
	/*if(setor.value == 41){
		apagaElementos(sample);
		createOption(1, sample, 41);
	}
	if(setor.value == 39){
		apagaElementos(sample);
		createOption(1, sample, 98);
	}
	if(setor.value == 16){
		apagaElementos(sample);
		createOption(1, sample, 52);
		createOption(2, sample, 130);
		createOption(3, sample, 91);
	}
	if(setor.value == 30){
		apagaElementos(sample);
		createOption(1, sample, 131);
	}
	if(setor.value == 36){
		apagaElementos(sample);
		createOption(1, sample, 27);
	}
	if(setor.value == 31){
		apagaElementos(sample);
		createOption(1, sample, 126);
		createOption(2, sample, 122);
		createOption(3, sample, 57);
		createOption(4, sample, 95);
		createOption(5, sample, 132);
	}
	if(setor.value == 13){
		apagaElementos(sample);
		createOption(1, sample, 133);
	}
	if(setor.value == 43){
		apagaElementos(sample);
		createOption(1, sample, 96);
		createOption(2, sample, 43);
	}
	if(setor.value == 10){
		createOption(1, sample, 35);
	}
	if(setor.value == 17){
		apagaElementos(sample);
		createOption(1, sample, 56);
		createOption(2, sample, 64);
		createOption(3, sample, 105);
	}
	if(setor.value == 19){
		apagaElementos(sample);
		createOption(1, sample, 63);
		createOption(2, sample, 74);
	}
	if(setor.value == 46){
		apagaElementos(sample);
		createOption(1, sample, 121);
		createOption(2, sample, 124);
		createOption(3, sample, 134);
		createOption(4, sample, 135);
		createOption(6, sample, 136);
	}
	if(setor.value == 75){
		apagaElementos(sample);
		createOption(1, sample, 75);
	}
	if(setor.value == 0){
		apagaElementos(sample);
		createOption(1, sample, 137);
	}
	if(setor.value == 32){
		apagaElementos(sample);
		createOption(1, sample, 23);
		createOption(2, sample, 119);
	}
	if(setor.value == 47){
		apagaElementos(sample);
		createOption(1, sample, 23);
	}*/

}