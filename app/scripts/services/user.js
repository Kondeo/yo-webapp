'use strict';

angular.module('yoFrontApp')
  .factory('DoYo', ['$resource', function($resource) {

    return $resource( 'http://webyo.co/api/doyo.php', 
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

    return $resource('http://webyo.co/api/login.php', 
        { }, { 
            submit: { 
                method: 'GET', 
                params: {}, 
                isArray: false 
            }
            
        } );

}]);

angular.module('yoFrontApp')
  .factory('Signup', ['$resource', function($resource) {

    return $resource('http://webyo.co/api/signup.php', 
        { }, { 
            submit: { 
                method: 'GET', 
                params: {}, 
                isArray: false 
            }
            
        } );

}]);
