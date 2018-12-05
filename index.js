var cor = document.getElementById("btnCor");
var texto = document.getElementById("inputTexto");
var form = document.querySelector("#form-notas");
var btnSalvar = criarBotaoSalvar("fa-check");

function criarNota(){

	//// Criação dos elementos da nota.////

	/* Div Principal */
	var nota = document.createElement("div");

	/* Div de Texto*/
	var divTexto = document.createElement("div");
	var paragrafo = document.createElement("p");
	paragrafo.textContent = texto.value;
	//var exTexto = document.createTextNode(texto.value);

	/* Div de Botões */
	var divBotoes = document.createElement("div");
	var btn1 = document.createElement("button");	
	var btn2 = document.createElement("button");
	var icone1 = document.createElement("i");
	var icone2 = document.createElement("i");

	//// Hierarquia dos Elementos ////

	/* Div Principal */
	notas.appendChild(nota);
	nota.appendChild(divTexto);
	nota.appendChild(divBotoes);

	/* Div de Texto*/
	divTexto.appendChild(paragrafo);
	//paragrafo.appendChild(exTexto);

	/* Div de Botões */
	divBotoes.appendChild(btn1); 	
	divBotoes.appendChild(btn2); 
	btn1.appendChild(icone1);
	btn2.appendChild(icone2);

	//// Colocando Classes nos Elementos ////

	/* Div Principal */
	nota.classList.add("nota");
	nota.style.backgroundColor = cor.value;

	/* Div de Texto*/
	divTexto.classList.add("divTexto");
	paragrafo.classList.add("texto");

	/* Div de Botões */
	divBotoes.classList.add("divBotoes");
	btn1.classList.add("btn", "btn-apagar");
	btn2.classList.add("btn");	
	icone1.classList.add("fa-trash-alt", "fas");
	icone2.classList.add("fa-edit", "fas");

	// Escutadores de Eventos //
	btn1.addEventListener("click", apagarNota);
	btn2.addEventListener("click", editarNota);	
}

btnAdd.addEventListener("click", function(event) {
	event.preventDefault();

	criarNota();

});

function apagarNota (event) {
		var nota;
		if(event.target.hasChildNodes()) {
			nota = event.target.parentNode.parentNode;
		} else {
			nota = event.target.parentNode.parentNode.parentNode;
		}
		nota.classList.add("fade-out");

		setTimeout(function(){
			nota.remove();
		}, 1000);
		return btnApagar;
}

var btnApagar = document.querySelectorAll(".btn-apagar");
btnApagar.forEach(function(botao){
	botao.addEventListener("click", apagarNota);
});

function criarBotaoSalvar (icone) {
	var iconeSalvar = document.createElement("i");
	var btnSalvar = document.createElement("button");
	btnSalvar.appendChild(iconeSalvar);
	btnSalvar.classList.add("btnSalvar");
	iconeSalvar.classList.add("fas", icone);
	return btnSalvar;
}

var btnEditar = document.querySelectorAll(".btn-editar");
btnEditar.forEach(function(botao){
	botao.addEventListener("click", editarNota);
});

function editarNota (event) {
	//console.log("PEEEEI");
	if(event.target.hasChildNodes()) {
		nota = event.target.parentNode.parentNode;
	} else {
		nota = event.target.parentNode.parentNode.parentNode;
	}
	var texto = nota.querySelector(".texto").textContent;

	console.log(texto);
	inputTexto.value = texto;

	btnAdd.classList.add('invisivel');
	form.appendChild(btnSalvar);
};

btnSalvar.addEventListener("click", function(event){
	event.preventDefault();

	nota.querySelector(".texto").textContent = inputTexto.value;
	
	btnSalvar.remove();
	btnAdd.classList.remove("invisivel");
	form.reset();
});

