var notebooks = angular.module('notebooks', []);

notebooks.controller('NotebookListCtrl', function($scope, $http) {

    $http.get('data/data.json')
    .then(function(res){
          var vocaList = res.data.vocal,
                vocals = [],
                count = 0;

         for (var i = 0; i < vocaList.length; i++) {
             chapterVocalList = vocaList[i].words;
             for (var ii = 0; ii < chapterVocalList.length; ii++) {
                var word = chapterVocalList[ii];
                word.id = ++count;
                word.chapterNo = i + 1;
                word.wordNo = ii + 1;
                vocals.push(word);
             }
         }

         $scope.vocals = vocals;

         $scope.orderList = "chapterNo";

// console.log(vocals);

      });
});