'use strict';

/**
 * @ngdoc function
 * @name yoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoFrontApp
 */
angular.module('yoFrontApp')
  .controller('LoginRegisterCtrl', function ($scope, Login, Signup, DoYo) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        window.location.href = requrl;
    }

    $scope.login = function(){

        var iid = Math.floor(Math.random() * 100000000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 1000000000000);
        
        var username = $scope.userform.username.toUpperCase();

        var loginjson = { 
            "username": username,
            "user_password": $scope.userform.password,
            "iid": iid
        }

        $scope.loginfinish = Login.submit(loginjson, function(){

            if (!$scope.loginfinish.result) {
                alert("Sorry, that isn't the correct username and password.");
            } else {

                document.cookie = "iid=" + iid + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                document.cookie = "session_token=" + $scope.loginfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                document.cookie = "username=" + $scope.loginfinish.result.data.username + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                document.cookie = "udid=" + $scope.loginfinish.result.data.udid + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";

                $scope.go("/#/");

            }

        });
    }

    $scope.signup = function(){

        var iid = Math.floor(Math.random() * 100000000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 1000000000000);
        var udid = Math.floor(Math.random() * 10000000000000000);
        
        var username = $scope.userform.username.toUpperCase();

        var signupjson = { 
            "username": username,
            "user_password": $scope.userform.password,
            "iid": iid,
            "udid": udid
        }

        $scope.signupfinish = Signup.submit(signupjson, function(){

            if (!$scope.signupfinish.result) {
                alert("Sorry, that username has already been taken.");
            } else {

                document.cookie = "iid=" + iid + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                document.cookie = "session_token=" + $scope.signupfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                document.cookie = "username=" + username + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
                document.cookie = "udid=" + udid + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";

                $scope.go("/#/");

            }

        });
    }

  });


