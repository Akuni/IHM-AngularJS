/**
 * Created by webdev on 4/10/15.
 */
angular.module('showcaseApp')
  .controller('KnowledgesCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("/data/knowledges.json")
      .success(function (data) {
        $scope.knowledges = data;
      });

    $scope.bolding = function(str){
      return str == "JAVA";
    };
  });
