angular.module('todoApp', [])
  .controller('BasicController', function($scope) {
    
    $scope.studentData = [
      { name: "Nathan Glass", graduated: true, university: "University of Arizona", degree: "finance", location: "Los Angeles" },
      { name: "Anastasiya", graduated: true, university: "Occidental College", degree: "geology", location: "Los Angeles" },
      { name: "Julian", graduated: true, university: "Oxford University", degree: "computer science", location: "Oxford" },
      { name: "Alisa", graduated: false, university: "none", degree: "none",location: "Santa Monica"},
      { name: "Mikey", graduated: true, university: "UCLA", degree: "law", location: "Tucson" },
      { name: "Kat", graduated: false, university: "University of Arizona", degree: "biology", location: "Tucson" },
      { name: "Hayk", graduated: true, university: "Art Center", degree: "illustrator", location: "Los Angeles" },
      { name: "Ellen", graduated: true, university: "USC", degree: "business", location: "San Francisco" },
      { name: "Joey", graduated: false, university: "University of Arizona", degree: "accounting",location: "Tucson"},
      { name: "Konstantin", graduated: true, university: "Ural State Academy of Architecture and Arts", degree: "industrial design", location: "Ekaterinburg" },
      { name: "Ellen", graduated: true, university: "USC", degree: "business", location: "San Francisco" },
      { name: "Jack", graduated: true, university: "Harvard", degree: "accounting",location: "Tucson"},
      { name: "Seth", graduated: true, university: "Yale", degree: "medicine", location: "Boston" }
    ]
  });