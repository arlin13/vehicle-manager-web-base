(function() {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController);

    CustomersDetailController.$inject = ['customersFactory'];

    /* @ngInject */
    function CustomersDetailController(customersFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
