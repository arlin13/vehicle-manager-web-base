(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehicleDetailController', VehicleDetailController);

    VehicleDetailController.$inject = ['vehiclesFactory', 'SweetAlert', '$stateParams'];

    /* @ngInject */
    function VehicleDetailController(vehiclesFactory, SweetAlert, $stateParams) {
        var vm = this;
        vm.title = "New vehicle";
        vm.save = save;

        activate();

        function activate() {
            var vehicleId = $stateParams.id;
            if (vehicleId) {
                vm.title = "Edit vehicle";
                vehiclesFactory
                    .getById(vehicleId)
                    .then(function(vehicle) {
                      console.log(vehicle);
                        vm.vehicle = vehicle;
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        }

        function save() {
            var vehicleId = $stateParams.id;
            if (vehicleId) {
                vehiclesFactory
                    .update(vm.vehicle.vehicleId, vm.vehicle)
                    .then(function() {
                        SweetAlert.swal("Vehicle saved!", `${vm.vehicle.make}` + " " + `${vm.vehicle.model}`, "success");
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            } else {
                vehiclesFactory
                    .create(vm.vehicle)
                    .then(function() {
                        SweetAlert.swal("Vehicle saved!", "Awesome!", "success");
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        }
    }
})();
