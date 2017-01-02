var app = angular.module('afloat', ['ionic', 'ngCordova', 'ngCookies', 'zingchart-angularjs'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    console.log('device is ready');
    window.plugin.notification.local.registerPermission(function(granted) {
      console.log('Permission has been granted: ' + granted);
    });
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('landing', {
    url: '/landing',
    controller: 'RegisterCtrl',
    templateUrl: 'templates/landing.html'
  })

  .state('signup', {
    url: '/signup',
    controller: 'RegisterCtrl',
    templateUrl: 'templates/signup.html'
  })

  .state('login', {
    url: '/login',
    controller: 'RegisterCtrl',
    templateUrl: 'templates/login.html'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashController'
      }
    }
  })

  $urlRouterProvider.otherwise('/landing');

});
