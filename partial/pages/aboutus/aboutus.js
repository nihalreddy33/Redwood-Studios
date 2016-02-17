angular.module('y').controller('AboutusCtrl',['$scope',function($scope){
    var au = $scope;
    au.aboutUsContent = "A group that love to create. We are  a small team with creative skill set that can surely help you make your product/ your brand stand-out from the mob. We possess an immense urge to our customer satisfaction. We re-live your thoughts and make them into creative ads that boost-up your business. We have started out our passionate journey in 2015 with a firm understanding of the need for advertising for any product and in any market, with a firm belief in “making you grow,will let us grow ourselves”";

    $('#yourIframe').load(function(){
        $(this).contents().find('body')[0].bgColor="#ffffff";
    });

}]);
