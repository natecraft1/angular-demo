angular.module('todoApp', [])
  .controller('BasicController', function($scope) {
    
    $scope.studentData = [
      { name: "Nathan Glass", graduated: true, university: "University of Arizona", degree: "Finance", location: "Los Angeles" },
      { name: "Anastasiya", graduated: true, university: "Oxidental College", degree: "Geology", location: "Los Angeles" }
    ]


  });