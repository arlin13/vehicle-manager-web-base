(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SaleDetailController', SaleDetailController);

    SaleDetailController.$inject = ['salesFactory', 'customersFactory', 'vehiclesFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function SaleDetailController(salesFactory, customersFactory, vehiclesFactory, SweetAlert, $stateParams) {
        var vm = this;
        vm.title = "New sale";
        vm.save = save;

        activate();

        function activate() {
            var saleId = $stateParams.id;

            customersFactory.getAll().then(function(customers) {
                vm.customers = customers;
            });
            vehiclesFactory.getAll().then(function(vehicles) {
                vm.vehicles = vehicles;
            });

            if (saleId) {
                vm.title = "Edit sale";
                salesFactory
                    .getById(saleId)
                    .then(function(sale) {
                        vm.sale = sale;
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        }

        function save() {
            var saleId = $stateParams.id;

            vm.sale.customerId = vm.selectedCustomer.customerId;
            vm.sale.vehicleId = vm.selectedVehicle.vehicleId;

            if (saleId) {
                salesFactory
                    .update(vm.sale.saleId, vm.sale)
                    .then(function() {
                        SweetAlert.swal("Sale saved!", "Great!", "success");
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            } else {
                salesFactory
                    .create(vm.sale)
                    .then(function() {
                        SweetAlert.swal("Sale saved!", "Awesome!", "success");
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        }
    }
})();
