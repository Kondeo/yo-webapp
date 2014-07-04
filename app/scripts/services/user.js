'use strict';

angular.module('yoFrontApp')
  .factory('DoYo', ['$resource', function($resource) {

    return $resource( 'http://192.168.0.8:3000/doyo.php', 
        { }, { 
            submit: { 
                method: 'POST', 
                params: {}, 
                isArray: false 
            }
            
        } );

}]);

angular.module('yoFrontApp')
  .factory('Login', ['$resource', function($resource) {

    return $resource('http://192.168.0.8:3000/login.php', 
        { }, { 
            submit: { 
                method: 'GET', 
                params: {}, 
                isArray: false 
            }
            
        } );

}]);
