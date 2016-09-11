var notebooks = angular.module('notebooks', []);

notebooks.controller('NotebookListCtrl', function($scope, $http) {

    $http.get('data/data.json')
        .then(function(res){
          console.log(res);
      });

    $scope.notebooks = [
    {"name": "Lenovo",
    "procesor": "Intel i5",
    "age": 2011},
    {"name": "Toshiba",
    "procesor": "Intel i7",
    "age": 2010},
    {"name": "Toshiba",
    "procesor": "Intel core 2 duo",
    "age": 2008},
    {"name": "HP",
    "procesor": "Intel core 2 duo",
    "age": 2012},
    {"name": "Acer",
    "procesor": "AMD",
    "age": 2006},
    {"name": "Lenovo",
    "procesor": "Intel i5",
    "age": 2009},
    {"name": "Toshiba",
    "procesor": "Intel i7",
    "age": 2008},
    {"name": "Lenovo",
    "procesor": "Intel i5",
    "age": 2011},
    {"name": "Toshiba",
    "procesor": "Intel i7",
    "age": 2010},
    {"name": "Toshiba",
    "procesor": "Intel core 2 duo",
    "age": 2008},
    {"name": "HP",
    "procesor": "Intel core 2 duo",
    "age": 2012},
    {"name": "Acer",
    "procesor": "AMD",
    "age": 2006},
    {"name": "Lenovo",
    "procesor": "Intel i5",
    "age": 2009},
    {"name": "Toshiba",
    "procesor": "Intel i7",
    "age": 2008},
    {"name": "Lenovo",
    "procesor": "Intel i5",
    "age": 2011},
    {"name": "Toshiba",
    "procesor": "Intel i7",
    "age": 2010},
    {"name": "Toshiba",
    "procesor": "Intel core 2 duo",
    "age": 2008},
    {"name": "HP",
    "procesor": "Intel core 2 duo",
    "age": 2012},
    {"name": "Acer",
    "procesor": "AMD",
    "age": 2006},
    {"name": "Lenovo",
    "procesor": "Intel i5",
    "age": 2009},
    {"name": "Toshiba",
    "procesor": "Intel i7",
    "age": 2008}
    ];
    $scope.orderList = "name";
});