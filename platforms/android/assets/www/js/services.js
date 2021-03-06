angular.module('starter.services', [])

.factory('UserService', function($http) {
  var service = {}

  service.postNewUser = function(data) {
    return $http.post('https://alisuehobbs-afloat.herokuapp.com/signup', data)
  }

  service.loginUser = function(data) {
    return $http.post('https://alisuehobbs-afloat.herokuapp.com/login', data)
  }

  service.getMoods = function(id) {
    return $http.get(`https://alisuehobbs-afloat.herokuapp.com/moods/${id}`)
  }

  return service
});
