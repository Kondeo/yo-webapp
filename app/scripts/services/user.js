'use strict';

angular.module('yoFrontApp')
  .factory('UserLogin', ['$resource', function($resource) {

    return $resource( 'https://api.parse.com/2/user_login', 
        { }, { 
            submit: { 
                method: 'POST', 
                params: {}, 
                headers: { "Authorization": 'OAuth oauth_consumer_key="iPmwrhjFVCYwL4ZZlicpCIeyJIbRUuXvPhLMCxOs", oauth_version="1.0", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1404300639", oauth_nonce="-26758008177814738", oauth_signature="epxGp1%2F8PGGLPf5vBwPw%2FKHPQp0%3D"
' },
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
                headers: { "Authorization": 'OAuth oauth_consumer_key="iPmwrhjFVCYwL4ZZlicpCIeyJIbRUuXvPhLMCxOs", oauth_version="1.0", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1404300639", oauth_nonce="-26758008177814738", oauth_signature="epxGp1%2F8PGGLPf5vBwPw%2FKHPQp0%3D"
' },
                isArray: false 
            },
            
        } );

}]);
