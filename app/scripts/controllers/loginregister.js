'use strict';

/**
 * @ngdoc function
 * @name yoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoFrontApp
 */
angular.module('yoFrontApp')
  .controller('LoginRegisterCtrl', function ($scope, Login, DoYo) {
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

        var loginjson = { 
            "username": $scope.userform.username,
            "user_password": $scope.userform.password,
            "iid": iid
        }

        $scope.loginfinish = Login.submit(loginjson, function(){

            document.cookie = "iid=" + iid + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
            document.cookie = "session_token=" + $scope.loginfinish.result.session_token + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
            document.cookie = "username=" + $scope.loginfinish.result.data.username + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";
            document.cookie = "udid=" + $scope.loginfinish.result.data.udid + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";

            $scope.go("/#/");

        });
    }
  });


