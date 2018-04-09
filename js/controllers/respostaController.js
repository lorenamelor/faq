app.controller("respostaController", function ($scope, $routeParams) {
    $scope.loadResposta=function(){
        console.log($routeParams.id);  
    }

})