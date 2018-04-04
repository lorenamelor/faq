angular.module("faq",[]);

angular.module("faq",["ngRoute"]).config(function($routeProvider, $locationProvider){

    $routeProvider

    .when("/administrador",{
        templateUrl: "views/administrador.html",
        controller: "administradorController"
    })

    .otherwise({redirectTo:"/administrador"})

    $locationProvider.html5Mode(true);
})