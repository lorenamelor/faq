var app = angular.module("faq",['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    $routeProvider

    .when("/administrador",{
        templateUrl: "views/administrador.html",
        controller: "administradorController"
    })

    .when("/respostas/:question",{
        templateUrl: "views/respostas.html",
        controller: "administradorController"
    })

    .otherwise({redirectTo:"/administrador"})

    $locationProvider.html5Mode(true);
})