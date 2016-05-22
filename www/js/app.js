// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ngCordova','starter.directives','angular.circular-slider','jett.ionic.filter.bar','ng-mfb'])

.run(function($ionicPlatform,DB) {
  $ionicPlatform.ready(function() {
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
	DB.init();
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
	.state('home', {
      url: "/home",
      templateUrl: "views/auth/login.html",
      controller: 'LoginCtrl'
    })
    /*.state('projects', {
      url: "/projects",
      templateUrl: "views/project/projects.html",
      controller: 'ProjectCtrl'
    })*/
    .state('project', {
      url: "/project",
      abstract: true,
      templateUrl: "views/project/project.html"
    })
    .state('project.detail', {
      url: "/detail",
      views: {
        'detail-tab': {
          templateUrl: "views/project/detail.html",
          controller: 'ProjectCtrl'
        }
      }
    }).state('project.visits', {
      url: "/visits",
      views: {
        'visit-tab': {
          templateUrl: "views/project/visits.html",
          controller: 'VisitCtrl'
        }
      }
    }).state('project.visit', {
      url: "/visit",
      views: {
        'visit-tab': {
          templateUrl: "views/project/visit.html",
          controller: 'VisitCtrl'
        }
      }
    })
      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "views/menu.html",
        controller: 'AppCtrl'
      })
      .state('app.projects', {
        url: "/projects",
        views: {
          'menuContent' :{
            templateUrl: "views/project/projects.html",
            controller: 'ProjectCtrl'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

}).config(function($ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
  });
