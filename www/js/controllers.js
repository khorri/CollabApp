angular.module('starter.controllers', ['starter.services'])

  .controller('AppCtrl', function($scope,$state) {

  })
.controller('LoginCtrl', function($scope,$state) {
    $scope.doLogIn = function(){
      $state.go('app.projects');
    };
  })
  // Project control
  .controller('ProjectCtrl', function($scope,$state,$ionicFilterBar,$ionicPopover,$ionicHistory) {
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

    $scope.goBack = function(){
      console.log('go Back')
      $state.go('app.projects');

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
.controller('VisitCtrl', function($scope,$state) {
    $scope.goBack = function(){
      console.log('go Back')
      $state.go('app.projects');

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
