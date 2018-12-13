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


app.controller('artikelCtrl', ['$scope', '$http', 'Info', function ($scope, $http, Info) {
    Info.then(function (params) {
        $scope.berita = {};
        $scope.berita = params;

        console.log($scope.berita);
        
    });
    }]);

app.controller('anggotaCtrl', ['$scope', 'Angkatan', 'Family', function ($scope, Angkatan, Family) {
    $scope.hideElement = false;
        // $scope.getId = ;
        Angkatan.then(function (successResponse) {
            $scope.angkatan = successResponse;
        });

        $scope.getAnggota = function (year) {
			// $scope.x = false;
            var y = year.toString().slice(2);
            // console.log(y);

            Family.then(function (res) {
                var dataAnggota = res;
                var id;
                var getId;
                var angg = {};

                //console.log(dataAnggota);
                // no_induk
                for(i=0; i < dataAnggota.length; i++){
                    id = dataAnggota[i].no_induk;
                    getId = id.split('.');
                    if(getId[1] == y) {
                        angg[i] = res[i];
                    } // end if
                } // end for

                var obj = Object.keys(angg);
                $scope.obj = obj;
				$scope.anggota = [];
				
				for(j=0; j<obj.length; j++){
					
                $scope.anggota[j] = angg[obj[j]];
                // console.log($scope.anggota[j].no_induk);
				} // end for j
                
            });

            // Items.then(function (successResponse) {
            //     var ang = successResponse;
            //     var id;
            //     var getId;

            //     var angg = {};
            //     // console.log(ang.length);
            //     for (i = 0; i < ang.length; i++) {
            //         id = successResponse[i].id;
            //         getId = id.split('.');
            //         if (getId[1] == y) {

            //             angg[i] = successResponse[i];
            //             // console.log(angg[i]);
            //         }
            //     }
            //     var obj = Object.keys(angg);
			// 	$scope.obj = obj;
			// 	$scope.anggota = [];
				
			// 	for(j=0; j<obj.length; j++){
					
			// 	$scope.anggota[j] = angg[obj[j]];
			// 	}
				

            // });
			// $scope.x = true;
            return y;
        };

    }]);
app.controller('appCtrl', ['$scope', '$http', 'Home',  function ($scope, $http, Home) {
	Home.then(function (response) {
		$scope.artikel = response;
        
        // console.log($scope.artikel);

        var v = [];
        
		for(i=0; i< response.length; i++) {
            var txt = "src/artikel/" + response[i].desk;
            
			// v[i] = $http.get(txt).success(function (r) {
            //     console.log(r.data);
			//  return r.data;
			// });
		}
		
		
			// console.log(v);
			// console.log(Object.keys(v));
			// console.log(Object.keys(v[0]));
			// console.log(Object.keys(v[0].$$state));
			
			// https://stackoverflow.com/questions/41973109/http-in-a-service-returns-state-object
			
		});
	
	// $scope.doc = function	(params) {
		// var txt = "src/artikel/" + params;
		
		// $http.get(txt).then(function (r) {
			
		// return r.data;
		// });
		
		// 				
				// return res.data;
		// console.log(res.data);
		// });
		
		// return txt;
		
	// };
		
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
app.controller('pengurusCtrl', ["$scope", "$http", "Items", "Family", function ($scope, $http, Items, Family) {
	
    

    var v = "src/structure.json";
	$http.get(v).then(function (response) {
		// console.log(response.data);
		var sum = response.data.length;
		
		for(i=0; i<sum; i++){
			// console.log(response.data[i].user[0].id);
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
        var responseValue = response.data;
        var ar = [];

        // console.log(responseValue);
        $scope.idPengurus = function(vari){
            
        
        
        Family.then(function(resFamily){
            
            console.log(vari);
                    $scope.varPengurus = resFamily;
                    $scope.metaPengurus = resFamily[vari - 1];
                    console.log($scope.metaPengurus);
            
            for(i=0; i < responseValue.length; i++){
                for(j=0; j < response.data[i].user.length; j++){
                    $scope.id = response.data[i].user[j].id;
                    ar = $scope.id;
                    // if()
                    
                    // console.log(ar);
                    // $scope.metaPengurus = resFamily[ar - 1];
                    //console.log(resFamily[ar - 1]);
                    

                    
                    
                    
                    
                } // end for j
                
            } // end for i
            // var noInduk = resFamily[ar].no_induk;
            //var splitNoInduk = noInduk.split('.');
            // if(splitNoInduk[2] == response.data[i].user[j].id){
                //  console.log($scope.pengurus);
            // }
            
                    
        }); // end Family function
    } // end $scope.ar

        

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


app.controller('agendaCtrl', ['$scope', '$http', 'Agenda', function($scope, $http, Agenda) {
    Agenda.then(function (successResponse) {
        $scope.metaAgenda = successResponse;

        var url = "src/agenda.json";
        $http.get(url).then(function(response) {
            $scope.agenda = response.data;

                for(j = 0; j < $scope.agenda.length; j++){
                    $scope.agenda[j].metaAgenda = {};
                    for(i=0; i < $scope.metaAgenda.length; i++){
                        
                        if($scope.metaAgenda[i].id == $scope.agenda[j].id){

                            $scope.agenda[j].metaAgenda[$scope.metaAgenda[i].number] = $scope.metaAgenda[i];
                            
                        } // end if
                } // end for i
            } // end for j
            console.log($scope.agenda);
            // console.log($scope.metaAgenda[0].id); 
        }); 
    });
}]);

app.controller('artikelDetailCtrl', ['$scope', '$routeParams', '$http', 'Home', function($scope, $routeParams, $http, Home) {
    
    var id = $routeParams.postId;

    Home.then(function (res){
        for(i=0; i < res.length; i++){
            if(res[i].id == id){
                $scope.artikelDetail = res[i];
                var doc = "src/artikel/"+res[i].desk;

                $http.get(doc).then(function (txt){
                    
                    var arr = txt.data;
                    var a = arr.split('\n');
                    $scope.desk = txt.data;
                    console.log(a);
                });

                // var txtFile = new XMLHttpRequest();
                // var m = txtFile.open("GET", doc, true);

                // console.log(m);
                // txtFile.onreadystatechange = function(){
                //     if(txtFile.readyState ===4 && txtFile.status == 200){
                //         allText = txtFile.responseText;
                        
                //     }
                //     document.getElementById('txt').innerHTML = allText;
                // }

                
            }   
        } 
    });
    var url = "src/artikel.json";
}]);

app.controller('anggotaDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
    var id = $routeParams.postId;
    
}])