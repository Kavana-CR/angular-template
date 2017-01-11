var app = angular.module('app', ['ui.bootstrap','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/page1.html',
            controller: 'page1Ctrl'
        })
     
        .when('/404', {
            templateUrl: 'views/404.html',
            controller: '404Ctrl'
        })
        .otherwise({
            redirectTo: '/404'
        });
})
