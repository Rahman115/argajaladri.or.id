//(function () {
//    "use strict";
var app = angular.module("app.controllers", []);
app.factory('Artikel', ['$http', function ($http) {
        var Ar = "src/artikel.csv";
        var Artikel = $http.get(Ar).then(function (response) {
            // console.log(response.data);
            return response.data;
        });
        return Artikel;
    }]);

app.controller('artikelCtrl', ['$scope', 'Artikel', function ($scope, Artikel) {
        Artikel.then(function (sResponse) {
            $scope.arr = sResponse.split('\n');
            $scope.artikel = [];
            for (i = 1; i < $scope.arr.length - 1; i++) {
                $scope.val = $scope.arr[i].split(';');
                $scope.artikel[i] = {
                    tanggal: $scope.val[0],
                    judul: $scope.val[1],
                    penulis: $scope.val[2],
                    tag: $scope.val[3],
                    isi: $scope.val[4]
                };
            }
            console.log($scope.artikel);
        });
    }]);

app.factory('Items', ['$http', function ($http) {
        var Url = "src/anggota.csv";
        var Items = $http.get(Url).then(function (response) {
            return response.data;
        });
        return Items;
    }]);
app.controller('anggotaCtrl', ['$scope', 'Items', function ($scope, Items) {
        Items.then(function (successResponse) {
            $scope.arr = successResponse.split('\n');
            $scope.anggota = [];
            for (i = 0; i < $scope.arr.length - 1; i++) {
                $scope.val = $scope.arr[i].split(';');
                $scope.anggota[i] = {
                    no: $scope.val[0],
                    id: $scope.val[1],
                    angkatan: $scope.val[2],
                    nama: $scope.val[3],
                    lahir: $scope.val[4],
                    sex: $scope.val[5],
                    darah: $scope.val[6],
                    agama: $scope.val[7],
                    kerja: $scope.val[8],
                    alamat: $scope.val[9],
                    hp: $scope.val[10],
                    email: $scope.val[11],
                    foto: $scope.val[12],
                    lapangan: $scope.val[13]

                };
            }
            console.log($scope.anggota);
        }
        );
    }]);

app.controller('appCtrl', [function ($scope) {}]);
//}());