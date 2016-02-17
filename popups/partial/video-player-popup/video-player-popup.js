angular.module('popups').controller('VideoPlayerPopupCtrl',['$scope','$timeout','$sce','$modal','popupService','videoPlayerPopup',function($scope,$timeout,$sce,$modal,popupService,videoPlayerPopup){

    $scope.videoUrl = '';
    $scope.videoId = '';
    $scope.params = {};
    $scope.showLoader = true;

    $scope.setProps = function(){
        $scope.params = videoPlayerPopup.getParams();
        $scope.videoUrl = videoPlayerPopup.getParams().url;
        $scope.videoId = videoPlayerPopup.getParams().id;
        var url = getClientUrl();
        $('.ad-logo').css({"background-image": "url("+url+")"});
    };

    var getClientUrl = function(){
        var adText = videoPlayerPopup.getParams().adText;
        var client = angular.lowercase(adText);
        var carr = client.split(' ');
        client = carr.join('_');
        return 'assets/clients/'+client+'.png';
    };

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $scope.closePopup = function(){
        //$(".video-popup").modal("hide");
        //$modal.close();
        //$('.modal-dialog').modal('toggle');
        //$modalInstance.dismiss('cancel');
    };

    $timeout(function(){
        var id = '#popup'+videoPlayerPopup.getParams().id;
        $(id).mediaelementplayer();
        //$timeout(function(){
            $('.video-popup').addClass('open-popup');
        //},100);
    },100);

    $timeout(function(){
        $scope.showLoader = false;
    },4000);


}]);
