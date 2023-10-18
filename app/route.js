angular.module("teste-angularjs").config(function($routeProvider) 
{
    $routeProvider.when("/",
    {
        templateUrl : "app/view/principal.html",
        controller : "PrincipalController"
    })
    .otherwise({
        templateUrl: 'app/view/404.html',
        controller : "ErrorController"
    })
})

