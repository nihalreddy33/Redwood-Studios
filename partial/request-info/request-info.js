angular.module('y').controller('RequestInfoCtrl',['$scope','$state',function($scope, $state){
    var info = $scope;
    info.contactDetails = {};
    info.serviceName = 'Select a Service';
    info.services = ['Photography','Corporate Video','Portfolios','Ad Films'];

    info.sendDetails = function(){
        var json = angular.toJson(info.contactDetails);
        reset();
        console.log(json);
    };

    info.decimalCheck = function(){
      return (info.contactDetails.contact.indexOf('.')!==-1);
    };

    info.numberCheck = function(){
        return isNaN(info.contactDetails.contact);
    };

    info.validNumber = function(){
        return isNaN(info.contactDetails.contact) || (info.contactDetails.contact.length > 10) || (info.contactDetails.contact.indexOf('.')!==-1);
    };

    var reset = function(){
        info.contactDetails = {};
        info.contactDetails.email = '';
        info.serviceName = 'Select a Service';
    };

    info.isNoService = function(){
        return (info.serviceName === 'Select a Service');
    };

    info.formStatus = function(){
        return (info.serviceName === 'Select a Service' || info.numberCheck());
    };

    info.selectService = function(service){
        info.serviceName = service;
    };

    info.goBack = function(){
        $state.go('home');
    };

}]);
