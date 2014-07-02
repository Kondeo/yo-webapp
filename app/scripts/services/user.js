'use strict';

angular.module('yoFrontApp')
  .factory('UserLogin', ['$resource', function($resource) {

    return $resource( 'https://api.parse.com/2/user_login', 
        { }, { 
            get: { 
                method: 'POST', 
                params: {}, 
                isArray: false 
            },
            
        } );

}]);

angular.module('yoFrontApp')
  .factory('Update', ['$resource', function($resource) {

    return $resource( 'https://api.parse.com/2/update', 
        { }, { 
            get: { 
                method: 'GET', 
                params: {}, 
                isArray: false 
            },
            
        } );

}]);
