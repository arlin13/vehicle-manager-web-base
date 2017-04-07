(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SaleDetailController', SaleDetailController);

    SaleDetailController.$inject = ['salesFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function SaleDetailController(salesFactory, SweetAlert, $stateParams) {
        var vm = this;
        vm.title = "New sale";
        vm.save = save;

        activate();

        function activate() {
            var saleId = $stateParams.id;
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
