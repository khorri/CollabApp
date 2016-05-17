angular.module('starter.controllers', ['starter.services'])

  .controller('AppCtrl', function($scope,$state) {

  })
.controller('LoginCtrl', function($scope,$state) {
    $scope.doLogIn = function(){
      $state.go('app.projects');
    };
  })
  // Project control
  .controller('ProjectCtrl', function($scope,$state,$ionicFilterBar,$ionicPopover) {
    $scope.projects = [{id:'1',name:'project1'},{id:'2',name:"prjects2"}];
    var filterBarInstance;
    $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.projects,
        update: function (filteredItems, filterText) {
          $scope.projects = filteredItems;
          if (filterText) {
            console.log(filterText);
          }
        }
      });
    };

    /*$ionicPopover.fromTemplateUrl('my-popover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };*/
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
})
.controller('DocumentCtrl', function($scope, Document) {
    $scope.documents = [];
    $scope.document = null;
    // Get all the documents
    Document.all().then(function(documents){
        $scope.documents = documents;
    });
    // Get one document, example with id = 2
    Document.getById(2).then(function(document) {
        $scope.document = document;
    });
});
