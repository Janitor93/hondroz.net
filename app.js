var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "pages/home.html",
            //controller: "mainController"
        })
        .when('/1', {
            templateUrl: "pages/1.html",
            controller: "mainController"
        })
        .when('/2', {
            templateUrl: "pages/2.html",
            controller: "mainController"
        })
        .when('/3', {
            templateUrl: "pages/3.html",
            controller: "mainController"
        })
        .when('/4', {
            templateUrl: "pages/4.html",
            controller: "mainController"
        })
        .when('/5', {
            templateUrl: "pages/5.html",
            controller: "mainController"
        })
        .when('/6', {
            templateUrl: "pages/6.html",
            controller: "mainController"
        }).otherwise({
            template: "This doesn't exist!"
        })
});

app.controller("mainController", function($scope, $timeout) {
    $scope.counter = 10;
    $scope.numer = true;
    $scope.mytimeout = null;
    $scope.cpod = 1;
    $scope.total = 0;
    $scope.sek = function() {
        if ($scope.counter != 0) {
            $scope.numer = true;
            $scope.message = null;
            $scope.counter--;
            $scope.total = Math.floor(($scope.cpod++)/10);
            $timeout($scope.sek, 1000);
            document.getElementById("myBtn").disabled = true;
        }
        else {
            $scope.numer = false;
            $scope.message = "Отдохни";
            $scope.counter = 10;
            document.getElementById("myBtn").disabled = false;
        }
    };
});