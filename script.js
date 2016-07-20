/**
 * Created by PETER on 6/1/2016.
 */
var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: 'home.html'
        })
        .when('/gift_parties2',{
            templateUrl: 'gift_parties2.html'
        })
        .when('/contact',{
        templateUrl: 'contact.html'
        })
        .when('/macroons',{
            templateUrl: 'macroons.html'
        })
        .otherwise('/home',{
            templateUrl: 'home.html'
        })
        
});


