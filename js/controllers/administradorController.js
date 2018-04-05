app.controller("administradorController", function ($scope, Admin) {


    $scope.listDuvida = function () {
        Admin.buscaQuestoes().success(function (data) {
            $scope.duvidas = data;
        })
    }

    $scope.listCategoria = function () {
        Admin.buscaCategorias().success(function (data) {
            $scope.categorias = data;
        })
    }


    $scope.adicionarDuvida = function (pergunta) {

        $scope.duvidas.push(angular.copy(pergunta))
        console.log(pergunta)
        Admin.addPergunta(pergunta).success(function (data) {
            console.log(data);
            $scope.limparForm();
            $('#modalArtigo').modal('hide');
            console.log(pergunta);
        })
    }

    $scope.adicionarCategoria = function (categoria) {
        $scope.duvidas.push(angular.copy(categoria))
        $scope.limparForm();
        $('#modalCategoria').modal('hide');
    }

    $scope.limparForm = function () {
        delete $scope.perguntas;
        delete $scope.categorias;
    }

    $scope.apagarDuvida = function (categoria, question) {

        for (i = 0; i < $scope.duvidas.length; i++) {
            if ($scope.duvidas[i].categoria == categoria) {
                for (j = 0; j < $scope.duvidas[i].perguntas.length; j++) {
                    if ($scope.duvidas[i].perguntas[j] == question) {
                        $scope.duvidas[i].perguntas.splice(j, 1);
                    }
                }
            }
        }
    }
})