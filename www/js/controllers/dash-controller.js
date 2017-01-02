app.controller('DashController', function($scope, $cordovaLocalNotification, $ionicPopup, $ionicPlatform, $cookies, CorrelationService, $ionicModal) {

  $ionicPlatform.ready(function() {

    var cookie = $cookies.getObject('mobileLogIn')
    console.log('cookie.id:', cookie.id);
    $scope.user = cookie

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

    CorrelationService.getMoods(cookie.id).success(function(data) {
      getDate(data)
    })

    function getDate(moodsArray) {
      let todayDate = moment()
      let today = []
      let week = []
      let year = []
      for (var i = 0; i < moodsArray.length; i++) {
        if (moment(moodsArray[i].updated_at).isSame(todayDate, 'day')) {
          today.push(moodsArray[i].rating)
        } else if (moment(moodsArray[i].updated_at).isSame(todayDate, 'week')) {
          week.push(moodsArray[i].rating)
        } else if (moment(moodsArray[i].updated_at).isSame(todayDate, 'year')) {
          year.push(moodsArray[i].rating)
        }
      }
      setScope(today, week, year)
    }

    function setScope(today, week, year) {
      $scope.day = {
        type: 'line',
        series: [{
          values: today
        }]
      }

      $scope.week = {
        type: 'line',
        series: [{
          values: week
        }]
      }

      $scope.year = {
        type: 'line',
        series: [{
          values: year
        }]
      }
    }

    $scope.setChartScope = function(input) {
      if (input == "day") {
        $scope.myJson = $scope.day
      } else if (input == "week") {
        $scope.myJson = $scope.week
      } else {
        $scope.myJson = $scope.year
      }
    }

    $ionicModal.fromTemplateUrl('templates/genPop/moods.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal1 = modal;
    });

    $scope.openModal = function() {
      $scope.modal1.show();
    };

    $scope.closeModal = function() {
      $scope.modal1.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal1.remove();
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });

    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

    $scope.submitMood = function(mood) {
      var moodObj = {
        user_id: cookie.id
        mood: mood,
      }
      console.log('moodObj:', moodObj);
      CorrelationService.postMood(mood).success(function(data) {
        console.log('data:', data);
      })
    }

  })
})
