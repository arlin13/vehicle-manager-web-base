(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerGridController', CustomerGridController);

    CustomerGridController.$inject = ['customersFactory'];

    /* @ngInject */
    function CustomerGridController(customersFactory) {
        var vm = this;

        activate();

        function activate() {
            customersFactory
                .getAll().then(function(customers) {
                    vm.customers = customers;
                });
        }
    }
})();
