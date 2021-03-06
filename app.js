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

app.controller("mainController", function($scope, $timeout, $http) {
    $scope.counter = 10;
    $scope.numer = true;
    $scope.cpod = 1;
    $scope.total = 0;
    $scope.btn = true;
    $scope.bar = false;
    $scope.done = false;

    $http.get('lessons.json').success(function(data) {
        $scope.lessons = data;
    });
    
    $scope.stopwatch = function() {
        if ($scope.counter != 0) {
            $scope.numer = true;
            $scope.message = null;
            $scope.counter--;
            $scope.myTimeout = $timeout($scope.stopwatch, 1000);
            document.getElementById("myBtn").disabled = true;
        } else {
            $scope.total++;
            $scope.numer = false;
            $scope.message = "Отдохни";
            $scope.counter = 10;
            document.getElementById("myBtn").disabled = false;
        }
    };

    $scope.exerciseFour = function() {
        if($scope.total != 10) {
            $scope.btn = false;
            if ($scope.counter != 0) {
                $scope.numer = true;
                $scope.message = null;
                $scope.myTimeout = $timeout($scope.exerciseFour, 1000);
                $scope.counter--;
            } else {
                $scope.total++;
                $scope.numer = false;
                $scope.message = "Отдохни";
                $scope.counter = 11;
                $scope.myTimeout = $timeout($scope.exerciseFour, 10000);
                if($scope.total != 10)
                    $scope.myTimeout = $timeout($scope.prepare, 7000);
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
        } else {
            $scope.bar = false;
            document.getElementById("yesBtn").disabled = false;
            document.getElementById("noBtn").disabled = true;
            $scope.link = "Можете перейти к следующему упражнению";
        }
    };

    var v = angular.element(document.querySelector(".progress-bar"));
    var k = angular.element(document.querySelector(".progress"));
    var b = parseInt(k.prop('offsetWidth'));
    //console.log(b);

    $scope.moveBar = function() {
        $scope.wid = parseInt(v.prop('offsetWidth'));
        if($scope.wid < b) {
            $scope.bar = true;
            $scope.myTimeout = $timeout($scope.moveBar, 2000);
            $scope.wid = parseInt(v.prop('offsetWidth')) + b/20;
            v.css("width", $scope.wid+"px");
            document.getElementById("yesBtn").disabled = true;
        } else {
            $scope.bar = false;
            $scope.link = "Можете перейти к следующему упражнению";
            document.getElementById("yesBtn").disabled = false;
        }
    };

    var speed = b/180;

    $scope.final = function() {
        $scope.widBar = parseInt(v.prop('offsetWidth'));
        if ($scope.widBar < b) {
            $scope.bar = true;
            $scope.myTimeout = $timeout($scope.final, 1000);
            $scope.widBar = parseInt(v.prop('offsetWidth')) + speed;
            v.css("width", $scope.widBar + "px");
            document.getElementById("yesBtn").disabled = true;
            document.getElementById("noBtn").disabled = false;
            $scope.done = false;
        } else {
            $scope.bar = false;
            document.getElementById("yesBtn").disabled = false;
            document.getElementById("noBtn").disabled = true;
            $scope.done = true;
        }
    };
    
    $scope.finalNo = function() {
        document.getElementById("yesBtn").disabled = false;
        document.getElementById("noBtn").disabled = true;
        $scope.done = true;
        $scope.bar = false;
        $timeout.cancel($scope.myTimeout);
    };

    $scope.$on('$locationChangeStart', function() {
        $timeout.cancel($scope.myTimeout);
    });
});