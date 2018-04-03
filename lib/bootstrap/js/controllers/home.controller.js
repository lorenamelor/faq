

app.controller("home", function(){
    
    $scope.soma = {};
    $scope.home = "Aqui é o home";
    $scope.ola = "Olá, mundo!";
    $scope.olaMundo = function(){
        alert("Olá mundo");
    }
    
    $scope.somaDeValores = function(soma){
    
        var total = parseInt(soma.valor1) + parseInt(soma.valor2);
        console.log(total);
    }
    
    
})