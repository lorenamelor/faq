app.controller("administradorController", function ($scope, Admin, $routeParams) {


    /**Duvidas */
    $scope.listDuvida = function () {
        Admin.buscaPerguntas().success(function (data) {
            $scope.duvidas = data;
        })
    }

    $scope.adicionarDuvida = function (pergunta) {
       

        Admin.addPergunta(pergunta).success(function (data) {
            $scope.limparForm();
            $('#modalArtigo').modal('hide');
        })
        $scope.duvidas.push(angular.copy(pergunta))
    }

    $scope.apagarDuvida = function (pergunta) {
        Admin.deletePergunta(pergunta).success(function () {
            var index = $scope.duvidas.indexOf(pergunta);
            $scope.duvidas.splice(index, 1);
        })
    }


    /*categorias*/
    $scope.listCategoria = function () {
        Admin.buscaCategorias().success(function (data) {
            $scope.categorias = data;
        })
    }

    $scope.adicionarCategoria = function (categoria) {
        $scope.categorias.push(angular.copy(categoria))

        Admin.addCategoria(categoria).success(function (data) {
            $scope.limparForm();
            $('#modalCategoria').modal('hide');
        })
    }

    $scope.apagarCategoria = function (categoria) {
        Admin.deleteCategoria(categoria).success(function () {
            var index = $scope.categorias.indexOf(categoria);
            $scope.categorias.splice(index, 1);
        })
    }



    /*Respostas*/
    $scope.listResposta = function (pergunta) {
        Admin.buscaPerguntas(pergunta).success(function () {
            console.log('ok');
        })
    }

    /*Outros*/

    $scope.listCategoriasPerguntas = function(){
        Admin.buscaCategoriaPerguntas().success(function(data){

            $scope.categoriasPerguntas = data.result;
        })
    }

    $scope.limparForm = function () {
        delete $scope.pergunta;
        delete $scope.categoria;
    }
})