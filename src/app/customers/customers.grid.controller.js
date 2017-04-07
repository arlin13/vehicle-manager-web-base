(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomerGridController', CustomerGridController);

    CustomerGridController.$inject = ['SweetAlert', 'customersFactory'];

    /* @ngInject */
    function CustomerGridController(SweetAlert, customersFactory) {
        var vm = this;
        vm.addElementDiv = false;

        vm.addElement = addElement;
        vm.remove = remove;

        activate();

        function activate() {
            customersFactory
                .getAll().then(function(customers) {
                    vm.customers = customers;
                });
        }

        function addElement() {
          vm.addElementDiv = !vm.addElementDiv;
        }

        function remove(customer) {
            SweetAlert.swal({
                    title: "Want to delete this customer?",
                    text: `Your will not be able to recover ${customer.firstName}'s data!`,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes",
                    cancelButtonText: "Cancel",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        customersFactory
                            .remove(customer.customerId)
                            .then(function() {
                                SweetAlert.swal("Deleted!", `Customer ${customer.firstName} has been deletered`, "success");
                                vm.customers.splice(vm.customers.indexOf(customer), 1);
                            });
                    } else {
                        SweetAlert.swal("Cancelled", `${customer.firstName} NOT deleted`, "error");
                    }
                });
        }
    }
})();
