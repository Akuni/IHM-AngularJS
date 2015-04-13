/**
 * Created by webdev on 4/3/15.
 */
angular.module('showcaseApp')
  .controller('NicoCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("/data/project.json")
      .success(function (data) {
        $scope.user = data.user;
      })
  });
