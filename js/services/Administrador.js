app.service("Admin", function ($http) {

    this.addPergunta = function (pergunta) {
        return $http.post('http://172.16.10.111:4000/conteudo/insertConteudo/', pergunta)
    }

    this.buscaQuestoes = function () {
        return $http.get('http://172.16.10.111:4000/conteudo/')
    }

    this.buscaCategorias = function () {
        return $http.get('http://172.16.10.111:4000/conteudo/searchAllCategoria')
    }


})