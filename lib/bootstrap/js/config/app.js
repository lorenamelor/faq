var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){

    $routeProvider

    .when("/home",{
        templateUrl: "templates/home.html",
        controller: "home"
    })

    .when("/login",{
        templateUrl: "templates/login.html",
        controller: "login"
    })


    .otherwise({redirectTo:"/home"})

})