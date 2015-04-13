/**
 * Created by webdev on 4/3/15.
 */
angular.module('showcaseApp')
  .controller('RelCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get("/data/project.json")
      .success(function (data) {
        $scope.realisations = data.realisations;
      })
  });/**
 * Created by webdev on 4/10/15.
 */
