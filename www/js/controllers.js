angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicPlatform, DashboardService) {

  var newUser = {
    firstName: 222,
    lastName: 222,
    email:'222@222',
    password: 'test1234',
    activity1: 'sailing',
    activity2: 'wine drinking',
    activity3: 'sleeping'
  }

  $ionicPlatform.ready(function () {
    console.log('I was born ready');
    $scope.getTheDamnThing = function () {
      console.log('You clicked the damn thing');
      DashboardService.post(newUser).success(function (response) {
        console.log('response:', response);
        $scope.stuff = response
      }).error(function (errorMessage) {
        console.log('errorMessage:', errorMessage);
        $scope.err = errorMessage
      })
    }
  })
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
