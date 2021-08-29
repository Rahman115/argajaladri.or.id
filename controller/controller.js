// data controller
// Create @AbuduChoy
// 
var app = angular.module("app.controllers", []);

app.factory('Artikel', ['$http', function ($http) {
        var Ar = "src/artikel.csv";
        var Artikel = $http.get(Ar).then(function (response) {
            // console.log(response.data);
            return response.data;
        });
        return Artikel;
    }]);

// Controller Artikel ----
app.controller('artikelCtrl', ['$scope', '$http', 'Home', function ($scope, $http, Home) {

    Home.then(function(res) {
        
        $scope.berita = res;

        $scope.allArtikel = {};
        
        for(i=0; i<res.length; i++){
            var doc = "src/artikel/"+res[i].desk;

                $http.get(doc).then(function (txt){
                    
                    var arr = txt.data;
                    
                    $scope.docum = arr;

                }); // end $http
        } // end for

        console.log($scope.allArtikel);    
        
    });
    
    $scope.onLoadDesk = function(myData){
        var doc = "src/artikel/"+myData;

                $http.get(doc).then(function (txt){
                    
                    var arr = txt.data;
                    
                    $scope.text = arr;
                    console.log($scope.text);
                    
    });
}; // end function
    
}]);

// Controller Anggota ------
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
            return y;
        };

    }]);
// Controller Detail Anggota
app.controller('detailAnggotaCtrl', ['$scope', '$routeParams', '$http', 'Family', function ($scope, $routeParams, $http, Family) {
	var id = $routeParams.postId;
    	//var x = id.toString().slice(2);
	Family.then(function (res) {
    		console.log(res);
		var dataAnggota = res;
		
		console.log(dataAnggota.length);
	}

}]);
// Controller Dashboard ------
app.controller('appCtrl', ['$scope', '$http', 'Home',  function ($scope, $http, Home) {
	Home.then(function (response) {
		$scope.artikel = response;
        
        console.log($scope.artikel[0].date);

        var wkt = new Date();
        var jso = JSON.stringify(wkt);
        
        // var dt = JSON.parse(jso, JSON.parse);
        
        console.log(jso);

        var v = [];
        
		for(i=0; i< response.length; i++) {
            var txt = "src/artikel/" + response[i].desk;

		}
		});
		
	$scope.divisi = [
            {'id': 1, 'divisi': 'Divisi Mountenering'},
            {'id': 2, 'divisi': 'Divisi Caving'},
            {'id': 3, 'divisi': 'Divisi Rafting'},
            {'id': 4, 'divisi': 'Divisi Diving'},
            {'id': 5, 'divisi': 'Divisi Climbing'}
        ];
	
}]);

// Controller divisi ------
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

// Controller Pengurus ------
app.controller('pengurusCtrl', ["$scope", "$http", "Items", "Family", function ($scope, $http, Items, Family) {
	
    

    var v = "src/structure.json";
	$http.get(v).then(function (response) {
		// console.log(response.data);
		var sum = response.data.length;
		
		for(i=0; i<sum; i++){
			// console.log(response.data[i].user[0].id);
		}		
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

                } // end for j
                
            } // end for i
   
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
                    var a = arr.split('\n\r');
                    console.log(a);
                    $scope.desk = a;
                    
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

app.controller('anggotaDetailCtrl', ['$scope', '$routeParams', '$http', 'Angkatan', 'Family', function ($scope, $routeParams, $http, Angkatan, Family) {

    var id = $routeParams.postId;
    var x = id.toString().slice(2);
    console.log(x);
    

    Angkatan.then(function (res) {
   $scope.allAngkatan = res;
   console.log($scope.allAngkatan);
        for(i=0; i < res.length; i++){
   
            if(id == res[i].tahun){
   
                $scope.angkatan = res[i];
                
            } // end if
        } // end for

        Family.then(function (res) {
            var dataAnggota = res;
            var id;
            var getId;
            var angg = {};

            for(i=0; i < dataAnggota.length; i++){
                id = dataAnggota[i].no_induk;
                getId = id.split('.');
                if(getId[1] == x) {
                    angg[i] = res[i];
                } // end if
            } // end for

            var obj = Object.keys(angg);
            $scope.obj = obj;
            $scope.anggota = [];
            
            for(j=0; j<obj.length; j++){
                
            $scope.anggota[j] = angg[obj[j]];
             console.log($scope.anggota[j].no_induk);
            } // end for j
            
        });
    })
}])
