angular.module('popups').factory('videoPlayerPopup',['popupService',function(popupService) {
    var params = {};
    var videoPlayerPopup = {
        'show':function(obj) {
            params.url = obj.url;
            params.id = obj.vid;
            params.adText = obj.adText;
            params.desc = obj.desc;
            //params = obj;
            return (popupService.show({
                templateUrl: "popups/partial/video-player-popup/video-player-popup.html"
            }, {
                videoUrl: params.url,
                videoId: params.vid
            }));
        },
        'getParams':function(){
            return params;
        }
    };

    return videoPlayerPopup;
}]);
