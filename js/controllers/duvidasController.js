angular.module("faq").controller("duvidasController", function ($scope) {

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

    $scope.adicionarDuvida = function (pergunta, category) {
        for (i = 0; i < $scope.duvidas.length; i++) {
            if ($scope.duvidas[i].categoria == category.categoria) {
                $scope.duvidas[i].perguntas.push(angular.copy(pergunta))
                delete pergunta;
                $scope.limparForm();
            }
        }
    }

    // $scope.adicionarCategoria = function (categoria) {
    //     console.log('oi');
    //     $scope.duvidas.push(angular.copy(categoria))
    //     for (i = 0; i < $scope.duvidas.length; i++) {
    //         if ($scope.duvidas[i].categoria == categoria.categoria) {
    //             $scope.duvidas[i].push(perguntas[]);
    //         }
    //     }
    //     delete categoria;
    //     $scope.limparForm();
    // }

    $scope.limparForm = function () {

        if ($("#categoria") != "") {
            $("#categoria").val("");
        } else {
            $("#categoria").val("");
            $("#pergunta").val("");
            $("#resposta").val("");
        }
    }



})