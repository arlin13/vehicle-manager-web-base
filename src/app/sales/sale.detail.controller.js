(function() {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController);

    SalesDetailController.$inject = ['salesFactory'];

    /* @ngInject */
    function SalesDetailController(salesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
