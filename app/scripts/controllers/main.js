'use strict';

/**
 * @ngdoc function
 * @name yoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoFrontApp
 */
angular.module('yoFrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        window.location.href = requrl;
    }

    if((getCookie("iid") == "") || (getCookie("session_token") == "") || (getCookie("username") == "") || (getCookie("udid") == "")){
        $scope.go("/#/welcome");
    } else {
        $scope.user.iid = getCookie('iid');
        $scope.user.session_token = getCookie('session_token');
        $scope.user.username = getCookie('username');
        $scope.user.udid = getCookie('udid');
    }

  });

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
