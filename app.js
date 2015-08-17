var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "pages/home.html"
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
    $scope.cpod = 1;
    $scope.total = 0;
    $scope.btn = true;
    //$scope.bar = false;
    
    $scope.sek = function () {
        if ($scope.counter != 0) {
            $scope.numer = true;
            $scope.message = null;
            $scope.counter--;
            $timeout($scope.sek, 1000);
            document.getElementById("myBtn").disabled = true;
        } else {
            $scope.total++;
            $scope.numer = false;
            $scope.message = "Отдохни";
            $scope.counter = 10;
            document.getElementById("myBtn").disabled = false;
        }
    };

    $scope.less = function() {
        if($scope.total != 10) {
            $scope.btn = false;
            if ($scope.counter != 0) {
                $scope.numer = true;
                $scope.message = null;
                $timeout($scope.less, 1000);
                $scope.counter--;
            } else {
                $scope.total++;
                $scope.numer = false;
                $scope.message = "Отдохни";
                $scope.counter = 11;
                $timeout($scope.less, 10000);
                if($scope.total != 10)
                    $timeout($scope.prepare, 7000);
            }
        } else {
            $scope.numer = false;
            $scope.message = "Готово! Можете перейти к следующему упражнению.";
        }
    };

    $scope.prepare = function() {
        $scope.message = "Приготовься";
    };

    $scope.progress = function() {
        if($scope.bar == false) {
            $scope.bar = true;
            document.getElementById("yesBtn").disabled = true;
            document.getElementById("noBtn").disabled = false;
            $scope.link = null;
        }
        else {
            $scope.bar = false;
            document.getElementById("yesBtn").disabled = false;
            document.getElementById("noBtn").disabled = true;
            $scope.link = "Можете перейти к следующему упражнению";
        }
    };

    $scope.bar = function() {
        var v = angular.element(document.querySelector(".progress-bar"));
        v.css("width", "80%");


        
    };
});