angular.module("faq").controller("administradorController", function ($scope) {

    $scope.duvidas = [{
            categoria: "Compra e Venda",
            perguntas: [{
                pergunta: " Como comprar bitcoin?",
                resposta: "bla bla bla"
            }, {
                pergunta: " Como Vender bitcoin?",
                resposta: "bla bla bla"
            }, {
                pergunta: "Quanto tempo leva para concluir uma venda??",
                resposta: "bla bla bla"
            }]
        },
        {
            categoria: "Limites e prazos",
            perguntas: [{
                pergunta: "Quanto tempo leva para um depósito em reais ser concluído?",
                resposta: "bla bla bla"
            }, {
                pergunta: "Existe um mínimo de moedas digitais que eu posso comprar?",
                resposta: "bla bla bla"
            }, {
                pergunta: "Quanto tempo leva para concluir um saque em reais?",
                resposta: "bla bla bla"
            }]
        },
    ];

    $scope.adicionarDuvida = function (pergunta, categorias) {
        console.log($scope.duvidas);

        for (i = 0; i < $scope.duvidas.length; i++) {
            if ($scope.duvidas[i].categoria == categorias.categoria) {
                if ($scope.duvidas[i].perguntas) {
                    $scope.duvidas[i].perguntas.push(angular.copy(pergunta))
                } else {
                    $scope.duvidas[i].perguntas = [];
                    $scope.duvidas[i].perguntas.push(angular.copy(pergunta))
                }
            }
        }
        $scope.limparForm();
        $('#modalArtigo').modal('hide');
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