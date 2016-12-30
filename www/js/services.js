angular.module('afloat.services', [])

.factory('UserService', function($http) {
  var service = {}

  service.postNewUser = function(data) {
    console.log('made it to the service');
    return $http.post('https://alisuehobbs-afloat.herokuapp.com/signup', data)
  }

  service.get = function() {
    return $http.get('https://alisuehobbs-afloat.herokuapp.com/signup')
  }

  return service
});
