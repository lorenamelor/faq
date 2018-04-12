app.controller("administradorController", function ($scope, Admin, $routeParams) {


    $scope.listCategoriasPerguntas = function () {
        Admin.buscaCategoriaPerguntas().success(function (data) {
            $scope.categoriasPerguntas = data.result;
        })
    }

    /**Duvidas */
    $scope.adicionarDuvida = function (pergunta) {
        pergunta.idCategoria = pergunta.categoria.idCategoria

        Admin.addPergunta(pergunta).success(function (data) {
            for (var i = 0; i < $scope.categoriasPerguntas.length; i++) {
                if ($scope.categoriasPerguntas[i].idCategoria == pergunta.categoria.idCategoria) {
                    pergunta.id = data.rows.insertId
                    $scope.categoriasPerguntas[i].conteudo.push(angular.copy(pergunta));
                }
            }
            $scope.limparForm();
            $('#modalArtigo').modal('hide');
        })
    }

    $scope.apagarDuvida = function (pergunta, cat) {

        $('#modalExcluirPergunta').modal('show');

        document.getElementById('excluirPerg').onclick = function () {

            Admin.deletePergunta(pergunta).success(function () {
                var indexCat = $scope.categoriasPerguntas.indexOf(cat);
                var indexPerg = $scope.categoriasPerguntas[indexCat].conteudo.indexOf(pergunta)
                $scope.categoriasPerguntas[indexCat].conteudo.splice(indexPerg, 1);
                $('#modalExcluirPergunta').modal('hide');
            })
        }
    }




    $scope.modalEditaDuvida = function (pergunta, cat) {

        $scope.editaPergunta = angular.copy(pergunta);
        $('#modalEditarArtigo').modal('show');

        var indexCat = $scope.categoriasPerguntas.indexOf(cat);
        var indexPerg = $scope.categoriasPerguntas[indexCat].conteudo.indexOf(pergunta);
        

        $scope.salvaEditaDuvida = function (novaPergunta) {

            novaPergunta.idCategoria = novaPergunta.categoria.idCategoria

            if (pergunta.idCategoria == novaPergunta.idCategoria) {
                $scope.categoriasPerguntas[indexCat].conteudo[indexPerg] = novaPergunta;
            } else {
                for (var i = 0; i < $scope.categoriasPerguntas.length; i++) {
                    if ($scope.categoriasPerguntas[i].idCategoria == novaPergunta.idCategoria) {
                        $scope.categoriasPerguntas[indexCat].conteudo.splice(indexPerg, 1);
                        $scope.categoriasPerguntas[i].conteudo.push(novaPergunta);
                    }
                }
            }

            Admin.editarPergunta(novaPergunta).success(function () {
                $('#modalEditarArtigo').modal('hide');
            })
        }

    }



    /*Categorias*/
    $scope.adicionarCategoria = function (categoria) {
        Admin.addCategoria(categoria).success(function (data) {
            $scope.categoriasPerguntas.push(angular.copy({
                "nome": categoria.nome,
                "idCategoria": data.insertId,
                "conteudo": []
            }))
            $scope.limparForm();
            $('#modalCategoria').modal('hide');
        })
    }


    $scope.apagarCategoria = function (categoria) {

        $('#modalExcluirCategoria').modal('show');

        document.getElementById('excluirCat').onclick = function () {
            if (categoria.conteudo == "") {
                Admin.deleteCategoria(categoria).success(function () {

                    var index = $scope.categoriasPerguntas.indexOf(categoria);

                    $scope.categoriasPerguntas.splice(index, 1);

                    $('#modalExcluirCategoria').modal('hide');
                })
            }
        }
    }

    /*Outros*/
    $scope.limparForm = function () {
        delete $scope.pergunta;
        delete $scope.categoria;
    }


})