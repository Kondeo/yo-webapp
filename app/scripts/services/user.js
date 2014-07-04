'use strict';

angular.module('yoFrontApp')
  .factory('DoYo', ['$resource', function($resource) {

    return $resource( 'http://localhost:3000/doyo.php', 
        { }, { 
            submit: { 
                method: 'GET', 
                params: {}, 
                isArray: false 
            }
            
        } );

}]);

angular.module('yoFrontApp')
  .factory('Login', ['$resource', function($resource) {

    return $resource('http://localhost:3000/login.php', 
        { }, { 
            submit: { 
                method: 'GET', 
                params: {}, 
                isArray: false 
            }
            
        } );

}]);
