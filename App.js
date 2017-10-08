var app = angular.module('myApp', []);

app.factory('Items', ['$http', function ($http) {
        var Url = "src/anggota.csv";
        var Items = $http.get(Url).then(function (response) {

//            console.log(response.data);
            return response.data;
//     return csvParser(response.data);
        });

        return Items;
    }]);

app.controller('appCtrl', ['$scope', 'Items', function ($scope, Items) {
//    console.log(Items);
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
//    Object.keys(successResponse);
//angular.forEach(successResponse, function (value, key){
            //value.push(successResponse.split(';'));
            console.log($scope.anggota);
//});



        });
        var vm = $scope;
        vm.phones = [
            {
                name: 'Nexus s',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'Motorola XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];

        vm.title = "Read CSV file with angularJS";

        vm.file_changed = function (element) {
            var dataFile = element.files[0];
            console.log(dataFile);
            var reader = new FileReader();
            reader.onload = function (e) {
                vm.$apply(function () {
                    vm.dataFile = reader.result;
                });
            };
            reader.readAsText(dataFile);
        };

    }]);



//app.directive('fileReader', function() {
//  return {
//    scope: {
//      fileReader:"="
//    },
//    link: function(scope, element) {
//      $(element).on('change', function(changeEvent) {
//        var files = changeEvent.target.files;
//        if (files.length) {
//          var r = new FileReader();
//          r.onload = function(e) {
//              var contents = e.target.result;
//              scope.$apply(function () {
//                scope.fileReader = contents;
//                scope.testing = contents;
//              });
//          };
//          
//          r.readAsText(files[0]);
//        }
//      });
//    }
//  };
//});