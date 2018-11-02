var app = angular.module("presentation-app", []);

app.controller("PresentationCtrl", function($scope, $http, $timeout) {
  $scope.loading = true;
  $scope.images = [];
  $scope.presentation = {
    title: "Apresentação 1",
    author: "Author"
  };
  $scope.loaderConfig = {
    append: true,
    target: "#loading",
    colour: "white",
    type: "dots",
    size: "large"
  };

  $scope.data = {};

  $scope.init = function(title) {
    $http.get("../data/" + title + ".json").then(function(res) {
      $scope.data = res.data;
      $scope.setPresentation($scope.data.presentation);
      $scope.setImages($scope.data.images);
      $timeout(function() {
        $(".slider-img:first").fadeIn(3000);
      }, 0);
    });
  };

  $scope.startLoading = function(timeout = 1500) {
    $scope.loader = Rocket.loader($scope.loaderConfig);
    $timeout(function() {
      $scope.loading = false;
    }, timeout);
  };

  $scope.setPresentation = function(presentation) {
    $scope.presentation = presentation ? presentation : $scope.presentation;
  };

  $scope.setLoaderConfig = function(config) {
    $scope.loaderConfig = config ? config : $scope.presentation;
  };

  $scope.setImages = function(images) {
    $scope.images = images ? images : $scope.images;
  };

  $scope.startLoading();
});
