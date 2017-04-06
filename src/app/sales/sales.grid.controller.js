(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SaleGridController', SaleGridController);

    SaleGridController.$inject = ['salesFactory'];

    /* @ngInject */
    function SaleGridController(salesFactory) {
        var vm = this;

        activate();

        function activate() {
            salesFactory
                .getAll()
                .then(function(sales) {
                    vm.sales = sales;
                })
                .catch(function(error) {

                });
        }
    }
})();
