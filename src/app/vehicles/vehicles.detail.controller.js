(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailController', VehiclesDetailController);

    CustomersDetailController.$inject = ['vehiclesFactory'];

    /* @ngInject */
    function CustomersDetailController(vehiclesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
