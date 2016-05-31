/* global angular, nodered, express, openwhisk */

angular.module('template', [])
.controller('MainCtrl', function($scope, $http){
  $scope.twitch = function(){
    $http.get('https://api.twitch.tv/kraken/games/top')
    .then(function(rsp){
      $scope.games = rsp.data.top;
    });
  };
});
