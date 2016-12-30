angular.module('afloat.controllers', [])

.controller('DashCtrl', function($scope, $cordovaLocalNotification, $ionicPopup, $ionicPlatform, $cookies) {

  $ionicPlatform.ready(function() {

    var cookie = $cookies.getObject('mobileLogIn')
    console.log('cookie:', cookie);
    $scope.user = cookie[0]

    console.log('im super ready');

    $scope.add = function() {
      console.log('I was clicked');
      $cordovaLocalNotification.schedule({
        id: 1,
        title: 'I will be so excited',
        text: 'If I see this on the phone',
        data: {
          customProperty: 'custom value'
        },
        at: new Date(new Date().getTime() + 10 * 1000)
      }).then(function(result) {
        console.log('result:', result);
        $ionicPopup.alert({
          title: 'blach',
          content: 'boodeah'
        })
      });
    };

  })
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('RegisterCtrl', function($scope, $ionicPlatform, UserService, $location, $cookies) {
  $ionicPlatform.ready(function() {
    $scope.submitSignUp = function(newUser) {
      UserService.postNewUser(newUser).success(function(response) {
        $cookies.putObject('mobileLogIn', response)
        $scope.newUser = {}
        $location.url('/tab/dash')
      }).error(function(error) {
        $scope.error = error
      })
    }
  })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
