angular.module('y').controller('ContactusCtrl',['$scope',function($scope){
    var cu = $scope;
    cu.contactDetails = {};

    cu.sendDetails = function(){
        var json = angular.toJson(cu.contactDetails);
        console.log(json);
    };

}]);
