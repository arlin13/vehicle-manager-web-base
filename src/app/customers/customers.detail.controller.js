(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = ['customersFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function CustomerDetailController(customersFactory, SweetAlert, $stateParams) {
        var vm = this;

        vm.save = save;

        activate();

        function activate() {
            customersFactory
                .getById($stateParams.id)
                .then(function(customer) {
                    vm.customer = customer;
                })
                .catch(function(error) {
                    alert(error);
                });
        }

        function save() {
            customersFactory
                .update(vm.customer.customerId, vm.customer)
                .then(function() {
                    SweetAlert.swal("Customer saved!", `$customer.firstName`, "success");
                })
                .catch(function(error) {
                    alert(error);
                });
        }
    }
})();
