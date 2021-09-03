// codigos de teclas - aqui vão todos os que forem necessário 

var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
var ESPACO = 32;

function Teclado(elemento) {
	this.elemento = elemento;

	//array de teclas pressionada
	this.pressionadas = [];

	//array de teclas disparadas
	this.disparadas = [];

	// funções de disparo registradas 
	this.funcoesDisparo = []; 

	var teclado = this;

	elemento.addEventListener('keydown', function(evento){
		var tecla = event.keyCode // tornando mais legivel 
		teclado.pressionadas[tecla] = true;

		// disparar somente se for o primeiro keydown  da tecla 

		if(teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]){

			teclado.disparadas[tecla] = true;
			teclado.funcoesDisparo[tecla] ();
		}
	});

	elemento.addEventListener('keyup', function(evento){
		teclado.pressionadas[evento.keyCode] = false;
		teclado.disparadas[evento.keyCode] = false;
	});
}
Teclado.prototype = {
	pressionada: function(tecla){
		return this.pressionadas[tecla];
	},
	disparou: function(tecla, callback){
		this.funcoesDisparo[tecla] = callback;
	}
}