(function() {
    'use strict';

    angular
        .module('app', [
            'app.dashboard'
            'app.customers',
            'app.vehicles',
            'app.sales'
        ])
        .value('apiUrl', 'http://localhost:21566/api/')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');
        });

        // Configure each one of our states
        $stateProvider.state('dashboard', {
          url: 'dashboard',
          controller: 'DashboardController as dashboardCtrl',
          templateUrl: 'app/dashboard/dashboard.html'
        });
})();
