var app = angular.module('app.services', []);

app.service('Model', ['$http', function ($http) {
        this.getAngkatanatan = function () {
            var url = "src/pengurus.json";
            $http.get(url).then(function (response) {
                return response.data;
//                console.log(response.data);
            });
        };
    }]);
	
app.factory('Home', ['$http', function($http) {
    var url = "src/artikel.json";
	var Home = $http.get(url).then(function (response) {
        return response.data;
	})
	return Home;
}]);

app.factory('Info', ['$http', function($http) {
    var url = "src/berita.csv";
    var Info = $http.get(url).then(function(res) {
        var arrayData = res.data;
        var array = arrayData.split('\n');

        // console.log(arrayData);

        var v = [];
        for(i=0; i < array.length - 1; i++){
            var value = array[i].split(';');
            v[i] = {
                'id': value[0],
                'Waktu': value[1],
                'Judul': value[2],
                'Writing':value[3],
                'Tag': value[4],
                'Deskripsi': value[5],
                'Image': value[6]
            };
        }
        return JSON.parse(angular.toJson(v));
    })
    return Info;
}])

app.factory('Family', ['$http', function ($http) {
    var Url = "src/anggota.json";
    var Family = $http.get(Url).then(function (response) {
        return response.data;
    });
    return Family;
}])

app.factory('Items', ['$http', function ($http) {
        var Url = "src/anggota.csv";
        var Items = $http.get(Url).then(function (response) {
            var array = response.data;
            var arr = array.split('\n');
//            var value = [];
            var v = [];
            for (i = 0; i < arr.length - 1; i++) {
                var value = arr[i].split(';');
                v[i] = {
                    'no': value[0],
                    'id': value[1],
                    'angkatan': value[2],
                    'nama': value[3],
                    'lahir': value[4],
                    'sex': value[5],
                    'darah': value[6],
                    'agama': value[7],
                    'kerja': value[8],
                    'alamat': value[9],
                    'hp': value[10],
                    'email': value[11],
                    'foto': value[12],
                    'lapangan': value[13]
                };
            }
            return JSON.parse(angular.toJson(v));
        });
        return Items;
    }]);


app.factory('Angkatan', ['$http', function ($http) {
        var Url = "src/angkatan.json";
        var Angkatan = $http.get(Url).then(function (response) {
            return response.data;
        });
        return Angkatan;
    }]);

app.factory('Agenda', ['$http', function ($http) {
    var url = "src/agenda.csv";
    var Agenda = $http.get(url).then(function (response) {
        var array = response.data;
        var arr = array.split('\n');
        
        var v = [];
        for (i=0; i<arr.length-1; i++){
            var value = arr[i].split(';');
            
            v[i] = {
                'id': value[0],
                'number': value[1],
                'kegiatan': value[2],
                'tujuan': value[3],
                'waktu': value[4]
            };
        }
        return JSON.parse(angular.toJson(v));
    });
    return Agenda;
}])


	
// app.factory('DivisiDetail', ['$http', function($http) {
// var url = "src/divisi.json";
	// var DivisiDetail = $http.get(url).then(function (response) {
		// return response.data;
	// }	
	
	// return DivisiDetail;
// }])

/**


 
 var mainApp = angular.module("mainApp", []);
 
 mainApp.factory('MathService', function() {
 var factory = {};
 
 factory.multiply = function(a, b) {
 return a * b
 }
 return factory;
 });
 
 mainApp.service('CalcService', function(MathService){
 this.square = function(a) {
 return MathService.multiply(a,a);
 }
 });
 
 mainApp.controller('CalcController', function($scope, CalcService) {
 $scope.square = function() {
 $scope.result = CalcService.square($scope.number);
 }
 });
 * 
 */
