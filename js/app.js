(function() {
  var app = angular.module('livraria', []);
  app.controller('LojaControle', function () {
  	this.acervo = livros;
  });

  app.controller('AbasControle', function() {
  	this.aba = 1;
  	this.setAba = function (aba) {
  		this.aba = aba;
  	};
  	this.isSet = function(aba) {
  		return this.aba == aba;
  	};
  });

  var livros =  [
  {
  	titulo: 'O Senhor dos Anéis',
  	preco: 40.0,
  	descricao: 'Descrição 1',
  	quantidade:10
  }, {
  	titulo: 'A saga Star Wars',
  	preco: 160.0,
  	descricao: 'Descrição 2',
  	quantidade: 5
  }
 ];
})();
