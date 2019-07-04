angular
    .module
        ('ciblab',
            ['ui.router',
             'ngResource',
             'angular-loading-bar',
             'toastr',
             'ngAnimate',
             'ncy-angular-breadcrumb'
            ]
        )
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({enabled: false, requireBase: false, rewriteLinks: false});

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('cadastro', {
                url: "/",
                templateUrl: 'public/app/views/cadastro.html',
                controller: 'cadastro.controller',
                  ncyBreadcrumb: {
                    label: 'Cadastro',
                  },
                activetab: 'cadastro'
            })
    }).config(function($httpProvider, cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }).config(function(toastrConfig) {
        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-right',
            allowHtml: false,
            closeButton: true,
            closeHtml: '<button>&times;</button>',
            extendedTimeOut: 2000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 7000,
            titleClass: 'toast-title',
            toastClass: 'toast'
       });
    }).config(function($breadcrumbProvider) {
         $breadcrumbProvider.setOptions({
            template: '<div><span ng-repeat="step in steps">{{step.ncyBreadcrumbLabel}}</span></div>'
         });
    }).run(function($rootScope, $state) {
          $rootScope.$state = $state;
    })
    /*Configuracao de loading dos graficos*/
    .config(function($provide) {
        $provide.decorator('$q', ['$delegate', '$rootScope', function($delegate, $rootScope) {
            var pendingPromisses = 0;
            $rootScope.$watch(
                function() { return pendingPromisses > 0; },
                function(loading) { $rootScope.loading = loading; }
            );
            var $q = $delegate;
            var origDefer = $q.defer;
            $q.defer = function() {
                var defer = origDefer();
                pendingPromisses++;
                defer.promise.finally(function() {
                    pendingPromisses--;
                });
                return defer;
            };
            return $q;
        }])
    })
      /*Configuracao necessaria para remover o erro Possibly unhandled rejection: canceled*/
      .config(function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
    });