app.service("Admin", function ($http, $routeParams) {

    this.addPergunta = function (pergunta) {
        return $http.post('http://172.16.10.111:4000/conteudo/insertConteudo/', pergunta)
    }

    this.addCategoria = function (categoria) {
        return $http.post('http://172.16.10.111:4000/conteudo/insertCategoria/', categoria)
    }

    this.deletePergunta = function (pergunta) {
        return $http.delete('http://172.16.10.111:4000/conteudo/deleteConteudo/' + pergunta.id)
    }

    this.deleteCategoria = function (categoria) {
        return $http.delete('http://172.16.10.111:4000/conteudo/deleteCategoria/' + categoria.idCategoria)
    }

    this.buscaCategoriaPerguntas = function () {
        return $http.get('http://172.16.10.111:4000/conteudo/categoriaPergunta')
    }

    this.buscaPergunta = function (pergunta) {
        return $http.get('http://172.16.10.111:4000/conteudo/searchConteudoById/' + $routeParams.id)
    }

    this.editarPergunta = function(pergunta){
        return $http.post('http://172.16.10.111:4000/conteudo/updateConteudo')
    }

})