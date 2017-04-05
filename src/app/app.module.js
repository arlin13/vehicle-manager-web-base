(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'oitozero.ngSweetAlert',
            // 'ng-sweet-alert',
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
                });
            $stateProvider
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
            $stateProvider
                .state('vehicles', {
                    url: '/vehicles',
                    abstract: true,
                    template: '<div ui-view></div>'
                })
                .state('vehicles.grid', {
                    url: '/grid',
                    controller: 'VehicleGridController as vehicleGridCtrl',
                    templateUrl: 'app/vehicles/vehicles.grid.html'
                })
                .state('vehicles.detail', {
                    url: '/detail/:id',
                    controller: 'VehicleDetailController as vehicleDetailCtrl',
                    templateUrl: 'app/vehicles/vehicles.detail.html'
                });
            $stateProvider
                .state('sales', {
                    url: '/sales',
                    abstract: true,
                    template: '<div ui-view></div>'
                })
                .state('sales.grid', {
                    url: '/grid',
                    controller: 'SaleGridController as saleGridCtrl',
                    templateUrl: 'app/sales/sales.grid.html'
                })
                .state('sales.detail', {
                    url: '/detail/:id',
                    controller: 'SaleDetailController as saleDetailCtrl',
                    templateUrl: 'app/sales/sales.detail.html'
                });
        });
})();
