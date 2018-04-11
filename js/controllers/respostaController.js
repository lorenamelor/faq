app.controller("respostaController", function ($scope, $routeParams,Admin) {

    $scope.listPerguntas = function () {
        Admin.buscaPergunta().success(function (data) {
            $scope.perguntas = data[0];
        })
    }
})