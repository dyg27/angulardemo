/**
 * Created by Jimmy Dave on 4/6/15.
 */

'use strict';

/**
 * Login controller for handle login request.
 */
(function() {

    var loginController = function($scope,$state,$rootScope,$cookies,loginService) {

        $scope.login = function(){

            if($scope.email === 'test@james.com' && $scope.password === "1234"){
                $cookies.isLogin = true;
                $cookies.put('isLogin', true);
                $cookies.put('email',$scope.email);
                $state.go('home');
            }
            else
                $scope.error = "wrong credential";

        };
    };

    loginController.$inject = ['$scope','$state','$rootScope','$cookies','loginService'];

    angular.module('authApp').controller('loginController', loginController);

}());