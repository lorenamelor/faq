var app = angular.module("faq",['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    $routeProvider

    .when("/administrador",{
        templateUrl: "views/administrador.html",
        controller: "administradorController"
    })

    .when("/respostas/:id",{
        templateUrl: "views/respostas.html",
        controller: "respostaController"
    })

    .otherwise({redirectTo:"/administrador"})

    $locationProvider.html5Mode(true);
})