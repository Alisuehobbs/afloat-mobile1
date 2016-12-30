angular.module('afloat.services', [])

.factory('UserService', function($http) {
  var service = {}

  service.postNewUser = function(data) {
    console.log('made it to the service');
    $http.post('https://alisuehobbs-afloat.herokuapp.com/signup', data).then(function successCallback(response) {
      console.log('response:', response)
      return response
    }, function errorCallback(error) {
            console.log('error:', error)
            return error
    })
  }

  service.get = function() {
    return $http.get('https://alisuehobbs-afloat.herokuapp.com/signup')
  }

  return service
});
