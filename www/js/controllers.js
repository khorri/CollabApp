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
.controller('VisitCtrl', function($scope,$state,$ionicModal,ionicDatePicker) {
    $scope.goBack = function(){
      console.log('go Back')
      $state.go('app.projects');

    };

    $scope.openDatePicker = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker modal is : ' + val, new Date(val));
          $scope.selectedDate2 = new Date(val);
        },
        disabledDates: [
          new Date(1437719836326),
          new Date(2016, 1, 25),
          new Date(2015, 7, 10),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-14-2015"),
          new Date(1439676000000),
          new Date(1456511400000)
        ],
        from: new Date(2012, 8, 2),
        to: new Date(2016, 8, 25),
        inputDate: new Date(),
        mondayFirst: true,
        showTodayButton: false,
        closeOnSelect: false,
        templateType: 'modal'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    }
    $ionicModal.fromTemplateUrl('newvisit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function(){
      $scope.modal.show();
    }
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
