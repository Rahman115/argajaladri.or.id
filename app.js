//(function () {
//    "use strict";

var app = angular.module('myApp', ["app.controllers", "ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
            .when('/anggota', {
                templateUrl: 'view/anggota.html',
                controller: 'anggotaCtrl'
            })
            .when('/artikel', {
                templateUrl: 'view/artikel.html',
                controller: 'artikelCtrl'
            })
            .when('/home', {
                templateUrl: 'view/home.html',
                controller: 'appCtrl'
            })
            .when('/pengurus', {
                templateUrl: 'view/pengurus.html'
//                controller: 'appCtrl'
            })
            .when('/bursa', {
                templateUrl: 'view/bursa.html'
//                controller: 'appCtrl'
            })
            .when('/tentang', {
                templateUrl: 'view/about.html'
//                controller: 'appCtrl'
            })
            .otherwise({redirectTo: '/home'});
});
//}());
