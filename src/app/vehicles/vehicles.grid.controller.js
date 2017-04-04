(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehicleGridController', VehicleGridController);

    VehicleGridController.$inject = ['vehiclesFactory'];

    /* @ngInject */
    function VehicleGridController(vehiclesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
