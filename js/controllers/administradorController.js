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


    $scope.editP = function (novaPergunta) {

        // var indexCat = $scope.categoriasPerguntas.indexOf();
        // var indexPerg = $scope.categoriasPerguntas.conteudo[indexCat].indexOf(novaPergunta);
        // console.log(indexPerg);

        // Admin.editarPergunta(novaPergunta).success(function () {
        //     console.log('ok');
        //     $('#modalEditarArtigo').modal('hide');  
        // })
    }

    $scope.editarDuvida = function (pergunta, cat) {

        console.log(cat);
        // var indexCat = $scope.categoriasPerguntas.indexOf(cat);
        // var indexPerg = $scope.categoriasPerguntas.conteudo[indexCat].indexOf(pergunta);
        // console.log(indexPerg);

        $scope.editaPergunta = angular.copy(pergunta);
        $('#modalEditarArtigo').modal('show');

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