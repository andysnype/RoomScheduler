(function() {
  var app = angular.module('bootstrap',[]); 

  app.controller('BuildingController', function() {
    this.building_picked = 0;
    this.set_building_picked = function(new_building){
    
    };
  });

  app.controller('FloorController', function() {
    this.floor_picked = 0;
    this.set_building_picked = function(new_floor) {
  
    };
  }

  app.controller('ScheduleController', function() {
  
  
  }

  app.controller('IntroductionController', function() {
      this.greeting='RoomScheduler'
    
  
  }



    app.directive('floorLayout', function() {

    return {
      restrict: "A",
      templateUrl : ""
    };
  }

  app.directive('scheduleLayout', function() {

    return {
      restrict: "E",
      templateURL: ""
    };
  }

  app.directive('reserveLayout', function() {

    return {
      restrict: "E",
      templateURL: ""
    };
  }
})();
