(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehicleGridController', VehicleGridController);

    VehicleGridController.$inject = ['SweetAlert', 'vehiclesFactory'];

    /* @ngInject */
    function VehicleGridController(SweetAlert, vehiclesFactory) {
        var vm = this;

        vm.remove = remove;

        activate();

        function activate() {
            vehiclesFactory
                .getAll().then(function(vehicles) {
                    vm.vehicles = vehicles;
                });
        }

        function remove() {
          SweetAlert.swal({
                  title: "Want to delete this vehicle?",
                  text: `Your will not be able to recover ${vehicle.make} ${vehicle.model}'s data!`,
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
                      vehiclesFactory
                          .remove(vehicle.vehicleId)
                          .then(function() {
                              SweetAlert.swal("Deleted!", `Customer ${vehicle.firstName} has been deletered`, "success");
                              vm.customers.splice(vm.customers.indexOf(vehicle), 1);
                          });
                  } else {
                      SweetAlert.swal("Cancelled", `${customer.firstName} NOT deleted`, "error");
                  }
              });
        }
    }
})();
