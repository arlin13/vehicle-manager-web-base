(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesDetailController', VehiclesDetailController);

    VehiclesDetailController.$inject = ['vehiclesFactory'];

    /* @ngInject */
    function VehiclesDetailController(vehiclesFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
