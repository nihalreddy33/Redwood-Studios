angular.module('y', ['ui.bootstrap','ui.utils', 'ui.router', 'ngAnimate', 'popups']);

/*angular.module('y').config(["$locationProvider", function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);*/

angular.module('y').config(function($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/home');
    //$locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '',
            views:{
                'header': {
                    templateUrl: 'partial/header/header.html',
                    controller: 'HeaderCtrl'
                }
                ,
                '@':{
                    templateUrl: 'partial/pages/pages.html',
                    controller: 'PagesCtrl',
                    controllerAs: 'pg'
                },
                'footer': {
                    templateUrl: 'partial/footer/footer.html',
                    controller: 'FooterCtrl'
                }
            }
        })
        .state('request-info', {
            url: '',
            views:{
                'header': {
                    templateUrl: 'partial/header/header.html',
                    controller: 'HeaderCtrl'
                },
                '@':{
                    templateUrl: 'partial/request-info/request-info.html',
                    controller: 'RequestInfoCtrl',
                    controllerAs: 'info'
                },
                'footer': {
                    templateUrl: 'partial/footer/footer.html',
                    controller: 'FooterCtrl'
                }
            }
        });

})

.run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

})

.controller('SessionCtrl', ['$rootScope', 'APP_CONFIG',
    function($rootScope, APP_CONFIG) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeStart event triggered!');
        });
        window.user_service = APP_CONFIG.user_service_apiEndPoint;
    }
]);













