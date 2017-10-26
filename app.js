//(function () {
//    "use strict";

var app = angular.module('myApp', ["app.controllers", "app.services", "ngRoute"]);



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
                templateUrl: 'view/pengurus.html',
                controller: 'pengurusCtrl'
            })
            .when('/bursa', {
                templateUrl: 'view/bursa.html'
//                controller: 'appCtrl'
            })
            .when('/divisi', {
                templateUrl: 'view/divisi.html',
                controller: 'divisiCtrl'
            })
            .when('/tentang', {
                templateUrl: 'view/about.html'
//              controller: 'appCtrl'
            })
            .when('/divisi/:postId', {
                templateUrl: 'view/divisidetail.html',
                controller: 'divCtrl'
            })
            .otherwise({redirectTo: '/home'});
});
//}());
