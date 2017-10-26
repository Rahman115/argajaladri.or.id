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
//            console.log($scope.artikel);
        });
    }]);




app.controller('anggotaCtrl', ['$scope', 'Items', 'Angkatan', function ($scope, Items, Angkatan) {
        $scope.hideElement = false;

        Angkatan.then(function (successResponse) {
//            console.log(successResponse);
            $scope.angkatan = successResponse;
        });

        Items.then(function (successResponse) {
            $scope.anggota = successResponse;
        });
		
		
		$scope.getAnggota = function(year){
			return year;
		};
		
    }]);
app.controller('appCtrl', [function ($scope) {}]);
app.controller('divisiCtrl', function ($scope, $http) {
//    $scope.idDivisi = "Hello world";
    var url = "src/divisi.json";
    // var url = "src/divisi.json";
    $http.get(url).then(function (response) {
        $scope.divisi = response.data;
        for(i = 0; i < $scope.divisi.length; i++ ){
            console.log(i);
        }
        var doc = "src/divisi/"+$scope.divisi[0].deskripsi;
        var docx = $http.get(doc).then(function (response) {
            var obj = response.data;
//            return response.data;
            return obj;
        }); 
        
//        $scope.desk = ;
        console.log(docx);
    });

});
app.controller('pengurusCtrl', function ($scope, $http) {
    var url = "src/pengurus.json";
    $http.get(url).then(function (response) {
        $scope.pengurus = response.data;
    });
});

app.controller('divCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    console.log($routeParams.postId);
    $scope.access = $routeParams.postId;
}]);

app.controller('myDivisiCtrl', ['$scope', function ($scope) {
        $scope.divisi = [
            {'id': 1, 'divisi': 'Divisi Mountenering'},
            {'id': 2, 'divisi': 'Divisi Caving'},
            {'id': 3, 'divisi': 'Divisi Rafting'},
            {'id': 4, 'divisi': 'Divisi Diving'},
            {'id': 5, 'divisi': 'Divisi Climbing'}
        ];


    }]);
//}());