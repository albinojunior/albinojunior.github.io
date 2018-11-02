var app = angular.module("presentations-app", []);

app.controller("PresentationsListCtrl", function($scope, $timeout) {
  $scope.loading = true;
  $scope.presentations = [
    {
      title: "Gerenciamento de versão: Introdução ao Git",
      description: "a escrever",
      author: "José Albino Jr.",
      link: "git-introduction/index.html",
      date: "06/11/2018",
      thumbnail_url: "assets/img/git.jpg"
    }
  ];

  $scope.loader = Rocket.loader({
    append: true,
    target: "#loading",
    colour: "white",
    type: "dots",
    size: "large"
  });

  $scope.startLoading = function(timeout = 1500) {
    $timeout(function() {
      $scope.loading = false;
    }, timeout);
  };

  $scope.showPresentation = function(url) {
    var href = window.location.href.replace("index.html", "") + url;
    window.open(href, "_blank");
  };

  $scope.startLoading();
});
