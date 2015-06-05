/**
 * Created by Jimmy Dave on 4/6/15.
 */

(function(){

    var loginService = function($http) {
        var factory = {};

        factory.authenticate = function(email, password) {

               if(email === 'test@james.com' && password === "1234")
                    return true;
                else
                    return false;
            /*var response = $http({
                method: 'POST',
                url: "http://localhost:8080/authenticate",
                data: $.param({'email':email,'password':password})
            }).success(function(data, status, headers, config) {
                return data;

            }).error(function(err, status, headers, config) {
                return err;
            });
            return response; */
        }

        return factory;

    };

    loginService.$inject = ['$http'];

    angular.module('authApp').factory('loginService', loginService);

}());