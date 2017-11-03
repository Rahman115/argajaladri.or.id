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
        // $scope.getId = ;
        Angkatan.then(function (successResponse) {
            $scope.angkatan = successResponse;
        });

        $scope.getAnggota = function (year) {
			// $scope.x = false;
            var y = year.toString().slice(2);
            // console.log(y);

            Items.then(function (successResponse) {
                var ang = successResponse;
                var id;
                var getId;

                // console.log(ang);
                var angg = {};
                // console.log(ang.length);
                for (i = 0; i < ang.length; i++) {
                    id = successResponse[i].id;
                    getId = id.split('.');
                    if (getId[1] == y) {

                        angg[i] = successResponse[i];
                        // console.log(angg[i]);
                    }
                }
                var obj = Object.keys(angg);
				$scope.obj = obj;
				$scope.anggota = [];
				
				for(j=0; j<obj.length; j++){
					
				$scope.anggota[j] = angg[obj[j]];
				}
				

            });
			// $scope.x = true;
            return y;
        };

    }]);
app.controller('appCtrl', ['$scope', 'Home',  function ($scope, Home) {
	
	
	Home.then(function (response) {
			console.log(response[0].desk);
			
			
		});
		
		
	$scope.divisi = [
            {'id': 1, 'divisi': 'Divisi Mountenering'},
            {'id': 2, 'divisi': 'Divisi Caving'},
            {'id': 3, 'divisi': 'Divisi Rafting'},
            {'id': 4, 'divisi': 'Divisi Diving'},
            {'id': 5, 'divisi': 'Divisi Climbing'}
        ];
	
}]);
app.controller('divisiCtrl', function ($scope, $http) {
    var url = "src/divisi.json";
    $http.get(url).then(function (response) {
        $scope.divisi = response.data;
        for (i = 0; i < $scope.divisi.length; i++) {
            // console.log(i);
        }
        var doc = "src/divisi/" + $scope.divisi[0].deskripsi;
        var docx = $http.get(doc).then(function (response) {
            var obj = response.data;
//            return response.data;
            return obj;
        });

//        $scope.desk = ;
        // console.log(docx);
    });

});
app.controller('pengurusCtrl', ["$scope", "$http", "Items", function ($scope, $http, Items) {
	
	var v = "src/structure.json";
	$http.get(v).then(function (response) {
		
		var sum = response.data.length;
		
		for(i=0; i<sum; i++){
			console.log(response.data[i].user[0].id);
		}
		
		// console.log(response.data[1].user[0].id);
		// console.log(sum);
		
	});
	$scope.getIdUser = function(params) {
			// console.log(params);		
		Items.then(function (res) {
			// console.log(res[params]);
			
		});
	};
	
    var url = "src/pengurus.json";
    $http.get(url).then(function (response) {
        $scope.pengurus = response.data;
		
		Items.then(function (successResponse) {
		var setId;
		var setObjStructur = {};
		
		for(i = 0; i < $scope.pengurus.length; i++) {
			// console.log($scope.pengurus[i].user[0].id);
			
			setId = $scope.pengurus[i].user[0].id;
			setObjStructur[i] = successResponse[setId];
			
		}
		
		var objId = Object.keys(setObjStructur);
		$scope.pengurus.obj = [];
		for(j = 0; j < objId.length; j++) {
			$scope.pengurus.obj[j] = setObjStructur[j];
		}
	});
		
		// console.log($scope.pengurus[0].user[0].id);
    });
}]);

app.controller('divCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
        // console.log($routeParams.postId);
        $scope.access = false;
        var id = $routeParams.postId;

        var url = "src/divisi.json";
        $http.get(url).then(function (response) {
            for (i = 0; i < response.data.length; i++) {
                if (response.data[i].id == id) {
                    $scope.access = true;
                }
            }

            if ($scope.access == true) {
                var doc = "src/divisi/" + response.data[id - 1].deskripsi;
                $http.get(doc).then(function (res) {
                    $scope.desk = res.data;


                    // return JSON.parse(angular.toJson(v));
                    // console.log($scope.desk);
                });
                // Docx.then(te);
                $scope.judul = response.data[id - 1].judul;
                // $scope.desk = $scope.docx[id - 1];
            }
        });


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