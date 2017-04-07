(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = ['customersFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function CustomerDetailController(customersFactory, SweetAlert, $stateParams) {
        var vm = this;
        vm.title = "New Customer";
        vm.save = save;

        activate();

        function activate() {
            var customerId = $stateParams.id;
            if (customerId) {
                vm.title = "Edit costumer";
                customersFactory
                    .getById($stateParams.id)
                    .then(function(customer) {
                        vm.customer = customer;
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        }

        function save() {
            var customerId = $stateParams.id;
            if (customerId) {
                customersFactory
                    .update(vm.customer.customerId, vm.customer)
                    .then(function() {
                        SweetAlert.swal("Customer saved!", `$vm.customer.firstName`, "success");
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            } else {
                customersFactory
                    .create(vm.customer)
                    .then(function() {
                        SweetAlert.swal("Customer saved!", "Awesome!", "success");
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        }
    }
})();
