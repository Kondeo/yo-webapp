'use strict';

/**
 * @ngdoc function
 * @name yoFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoFrontApp
 */
angular.module('yoFrontApp')
  .controller('LoginRegisterCtrl', function ($scope, UserLogin, Update) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.login = function(){

        var uuid = Math.floor(Math.random() * 100000000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 1000000000000);
        var iid = Math.floor(Math.random() * 100000000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 1000000000000);


        var loginjson = { 
            "v": "a1.4.1",
            "username": $scope.userform.username,
            "user_password": $scope.userform.password,
            "uuid": uuid,
            "iid": iid
        }

        var response = UserLogin.submit(loginjson, function(){

            var uuid = Math.floor(Math.random() * 100000000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 10000) + "-" + Math.floor(Math.random() * 1000000000000);

            var updatejson = { 
                "data": {
                    "objectId": response.objectId,
                    "didEnterPassword": true
                },
                "v": "a1.4.1",
                "uuid": uuid,
                "iid": iid,
                "session_token": response.result.session_token,
                "classname": "_User"
            }

            Update.get(updatejson);

        });

    }


  });


