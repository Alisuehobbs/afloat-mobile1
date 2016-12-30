angular.module('starter.services', [])

.factory('DashboardService', function($http) {
  var service = {}

  service.post = function(newUserInfo) {
    return $http.post('https://alisuehobbs-afloat.herokuapp.com/signup', newUserInfo)
 }

  return service
});
