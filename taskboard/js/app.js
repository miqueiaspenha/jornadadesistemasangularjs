(function() {
  
  var app = angular.module('teste', []);

  app.controller('EstoriaUsuario', function () {
  	
    this.estorias = estorias;

    this.finalizarEstoria = function(estoria) {
    }

  });

  app.controller('TarefaUsuario', function() {
    
    this.status = 0;
    this.tarefa = {};

    this.setStatus = function(){
      if(this.status == 0) {
        this.status = 1;
      }else {
        this.status = 0;
      }
    };

    this.isSet = function(status) {
      return this.status == status;
    };

    this.addTarefa = function (estoria) {
      estoria.tarefas.push(this.tarefa);
      this.tarefa = {};
    }

  });

  var estorias = [{
    titulo : "Nome da Estoria 1",
    descricao : "Como o usuario gostaria desse para aquele",
    pontuacao : 0,
    tarefas : [{
      nome: "Tarefa 1",
      descricao: "Essa é a tarefa 1",
      valor : 0
    }]
  }];

})();
