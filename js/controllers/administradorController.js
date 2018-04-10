app.controller("administradorController", function ($scope, Admin, $routeParams) {


    /**Duvidas */
    $scope.listCategoriasPerguntas = function () {
        Admin.buscaCategoriaPerguntas().success(function (data) {
            $scope.categoriasPerguntas = data.result;
        })
    }


    $scope.adicionarDuvida = function (pergunta) {
        console.log(pergunta);
        console.log($scope.categoriasPerguntas);
        Admin.addPergunta(pergunta).success(function (data) {
            for (var i = 0; i < $scope.categoriasPerguntas.length; i++) {
                if ($scope.categoriasPerguntas[i].idCategoria == pergunta.idCategoria) {
                    $scope.categoriasPerguntas[i].conteudo.push(angular.copy(pergunta));
                }
            }
            $scope.limparForm();
            $('#modalArtigo').modal('hide');
            console.log($scope.categoriasPerguntas);
        })
    }


    $scope.apagarDuvida = function (pergunta) {
        Admin.deletePergunta(pergunta).success(function () {
            for (var i = 0; i < $scope.categoriasPerguntas.length; i++) {
                if ($scope.categoriasPerguntas[i].idCategoria == pergunta.idCategoria) {
                    var index = $scope.categoriasPerguntas[i].conteudo.indexOf(pergunta);
                    $scope.categoriasPerguntas[i].conteudo.splice(index, 1);
                }
            }
            $('#modalExcluirPergunta').modal('hide');
        })
    }


    /*Categorias*/
    $scope.adicionarCategoria = function (categoria) {
        Admin.addCategoria(categoria).success(function (data) {
            $scope.listCategorias();
            $scope.categoriasPerguntas.push(angular.copy({
                "nome": categoria.nome,
                "idCategoria": data.insertId,
                "conteudo": []
            }))
            $scope.limparForm();
            $('#modalCategoria').modal('hide');
        }).catch()
    }


    $scope.apagarCategoria = function (categoria) {
        console.log(categoria);
        if (categoria.conteudo == "") {
            Admin.deleteCategoria(categoria).success(function () {
                var index = $scope.categoriasPerguntas.indexOf(categoria);
                $scope.categoriasPerguntas.splice(index, 1);
            })
        }
    }

    $scope.listCategorias = function () {
        Admin.buscaCategorias().success(function (data) {
            $scope.categorias = data;
        })
    }

    /*Outros*/

    $scope.limparForm = function () {
        delete $scope.pergunta;
        delete $scope.categoria;
    }
})