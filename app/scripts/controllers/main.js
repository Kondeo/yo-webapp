'use strict';

/**
 * @ngdoc function
 * @name yoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoFrontApp
 */
angular.module('yoFrontApp')
  .controller('MainCtrl', function ($scope, $cookies) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.createfriend = "";

    $('#addfriend input').keydown(function(e) {
        if (e.keyCode == 13) {
            addFriend($scope.createfriend.username);
        }
    });

    $scope.getRandomSpan = function(){
      return Math.floor((Math.random()*4)+1);
    }

    $scope.go = function(requrl){
        console.log("url switch for " + requrl);
        window.location.href = requrl;
    }

    $scope.formatData=function(objectFromDB){
        if(!angular.isArray(objectFromDB))
           return [objectFromDB];
        else
           return objectFromDB;
    }

    if((getCookie("iid") == "") || (getCookie("session_token") == "") || (getCookie("username") == "") || (getCookie("udid") == "")){
        $scope.go("/#/welcome");
    } else {
        $scope.user = "test";
        $scope.iid = $cookies.iid;
        $scope.session_token = getCookie('session_token');
        $scope.username = getCookie('username');
        $scope.udid = getCookie('udid');
        $scope.friends = JSON.parse(getCookie('friends'));
        
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

function addFriend(username) {
    
    var userObject = {"username": username };

    if(getCookie('friends') == ""){
        var friends = [];
    } else {
        var currfriendsCookie = getCookie('friends');
        var friends = JSON.parse(currfriendsCookie);
    }

    friends.push(userObject);
    var friendsCookie = friends;
    document.cookie = "friends=" + JSON.stringify(friendsCookie) + "; expires=Sun, 18 Jan 2037 12:00:00 GMT";

    location.reload();

}
