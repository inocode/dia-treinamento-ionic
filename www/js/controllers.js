angular.module('starter.controllers', [])

.controller('PeopleCtrl', function($scope, People) {
  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.people = People.list();
  });
})

.controller('PersonCtrl', function($scope, $state, People, $stateParams) {
  $scope.$on('$ionicView.beforeEnter', function() {
    if ($stateParams.personId) {
      $scope.person = People.find($stateParams.personId);
    } else {
      $scope.person = {};
    }
  });

  $scope.save = function() {
    console.log("Gravando pessoa " + $scope.person);
    if ($scope.person.id) {
      People.update($scope.person.id, $scope.person);
    } else {
      People.create($scope.person);
    }
    alert("Pessoa gravada com sucesso!");
    $state.go("app.people");
  }

  $scope.back = function() {
    $state.go("app.people");
  }

  $scope.takePicture = function() {
    var cameraSuccess = function(photoBase64) {
      $scope.person.photo_data = photoBase64;
      $scope.$apply();
    }

    var cameraError = function(error) {
      alert("Ocorreu um erro - " + error);
    }

    var cameraOptions = {
      quality : 50,
      destinationType : Camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false
    }

    navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
  }
})