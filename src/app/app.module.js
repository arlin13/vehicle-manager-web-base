(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'app.dashboard',
            'app.customers',
            'app.vehicles',
            'app.sales'
        ])
        .value('apiUrl', 'http://localhost:21566/api/')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');

            // Configure each one of our states
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    controller: 'DashboardController as dashboardCtrl',
                    templateUrl: 'app/dashboard/dashboard.html'
                })
                .state('customers', {
                    url: '/customers',
                    abstract: true,
                    template: '<div ui-view></div>'
                })
                .state('customers.grid', {
                    url: '/grid',
                    controller: 'CustomerGridController as customerGridCtrl',
                    templateUrl: 'app/customers/customers.grid.html'
                })
                .state('customers.detail', {
                    url: '/detail/:id',
                    controller: 'CustomerDetailController as customerDetailCtrl',
                    templateUrl: 'app/customers/customers.detail.html'
                });
        });


})();
