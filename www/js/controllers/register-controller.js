app.controller('RegisterCtrl', function($scope, $ionicPlatform, UserService, $location, $cookies) {
  $ionicPlatform.ready(function() {

    $scope.submitSignUp = function(newUser) {
      UserService.postNewUser(newUser).success(function(response) {
        if (!response.message) {
          $cookies.putObject('mobileLogIn', response[0])
          $scope.newUser = {}
          $location.url('/tab/dash')
        } else {
          $scope.error = response.message
        }
      })
    }

    $scope.submitLogIn = function(returningUser) {
      UserService.loginUser(returningUser).success(function(response) {
        if (!response.message) {
          $cookies.putObject('mobileLogIn', response)
          $scope.returningUser = {}
          $location.url('/tab/dash')
        } else {
          $scope.error = response.message
        }
      })
    }
  })
})
