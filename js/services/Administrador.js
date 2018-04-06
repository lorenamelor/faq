app.service("Admin", function ($http, $routeParams) {

    this.addPergunta = function (pergunta) {
        return $http.post('http://172.16.10.111:4000/conteudo/insertConteudo/', pergunta)
    }

    this.addCategoria = function (categoria) {
        return $http.post('http://172.16.10.111:4000/conteudo/insertCategoria/', categoria)
    }

    this.buscaPerguntas = function () {
        return $http.get('http://172.16.10.111:4000/conteudo/')
    }

    this.buscaCategorias = function () {
        return $http.get('http://172.16.10.111:4000/conteudo/searchAllCategoria')
    }

    this.deletePergunta = function(pergunta){
        return $http.delete('http://172.16.10.111:4000/conteudo/deleteConteudo/' + pergunta.id)
    }

    this.deleteCategoria = function(categoria){
        return $http.delete('http://172.16.10.111:4000/conteudo/deleteCategoria/' + categoria.id)
    }

    this.buscaCategoriaPerguntas = function(){
        return $http.get('http://localhost:4000/conteudo/categoriaPergunta')
    }

})