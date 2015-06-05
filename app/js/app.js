/**
 * Created by Jimmy Dave on 4/6/15.
 */

var authApp = angular.module('authApp',['ui.router','ngCookies']);

authApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'app/html/login.html',
            controller: 'loginController'
        }).state('home', {
            url: '/home',
            templateUrl: 'app/html/welcome.html',
            controller:'homeController',
            secure:true
        });

});

authApp.run(['$location', '$rootScope','$cookies', '$state', '$stateParams',
    function($location, $rootScope, $cookies, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        //fired when transition begins
        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            if (toState && toState.secure) {
                if($cookies.get('isLogin')){
                    //do nothing
                }else{
                    $state.go("login");
                    event.preventDefault();
                }
            }

            if(toState.url == '/login' && $cookies.get('isLogin')) {
                $state.go("home");
                event.preventDefault();
            }

        });
    }]);



