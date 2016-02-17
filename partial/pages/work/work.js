angular.module('y').controller('WorkCtrl',['$scope','$timeout','$sce','videoPlayerPopup',function($scope,$timeout,$sce,videoPlayerPopup){
    var work = $scope;
    work.nestedArray = [];
    work.totalVideos = [
        {id:1,url:'https://www.youtube.com/watch?v=yF5IyrNprqY',adText:"Silly Squid",desc:'Silly squid is a trending brand for T-shirts, mugs and much more'},
        {id:2,url:'https://www.youtube.com/watch?v=7MMwfjvUb-o',adText:"Crash the Pepsi IPL",desc:'One of our work in Crash the pepsi IPL contest'}
        //{id:3,url:'https://www.youtube.com/watch?v=zmtVo8bnQXg',adText:"CoCo Cola Ad",desc:'Ad description right from crew to technology'},
        //{id:4,url:'https://www.youtube.com/watch?v=3qxftKkOxMo',adText:"CoCo Cola Ad",desc:'Ad description right from crew to technology'},
        //{id:5,url:'https://www.youtube.com/watch?v=3qxftKkOxMo',adText:"Footware Ad",desc:'Ad description right from crew to technology'},
        //{id:6,url:'https://www.youtube.com/watch?v=zmtVo8bnQXg',adText:"CoCo Cola Ad",desc:'Ad description right from crew to technology'},
        //{id:7,url:'https://www.youtube.com/watch?v=3qxftKkOxMo',adText:"CoCo Cola Ad",desc:'Ad description right from crew to technology'},
        //{id:8,url:'https://www.youtube.com/watch?v=zmtVo8bnQXg',adText:"CoCo Cola Ad",desc:'Ad description right from crew to technology'},
        //{id:9,url:'https://www.youtube.com/watch?v=3qxftKkOxMo',adText:"Footware Ad",desc:'Ad description right from crew to technology'},
        //{id:10,url:'https://www.youtube.com/watch?v=zmtVo8bnQXg',adText:"CoCo Cola Ad",desc:'Ad description right from crew to technology'}
    ];

    work.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    work.setProperties = function(){
      work.slidesPerPage = 3;
      work.totalslides = Math.ceil(work.totalVideos.length/work.slidesPerPage);
      work.nestedArray = [];
      var videos = angular.copy(work.totalVideos);
      var count = 0;
      for(var i=0;i<work.totalslides;i++){
          var start = i*work.slidesPerPage;
          var end = (i*work.slidesPerPage)+work.slidesPerPage;
          var arr = videos.slice(start,end);
          work.nestedArray.push(arr);
      }
      console.log(work.nestedArray);
    };

    work.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    work.slideCarousel = function(type){
        $('.carousel').carousel(type);
    };

    work.videoClick = function(obj){
        //Opens Video Popup
        obj.vid = 'youtube'+obj.id;
        var url = obj.url;
        videoPlayerPopup.show(obj).then(function(data) {
            //do nothing
        });
    };

    work.loadImages = function(){
        for(var i=0;i<work.totalVideos.length;i++){
            var desktopid = '#'+work.totalVideos[i].id;
            var imgurl = getScreenShots( work.totalVideos[i], "big" );
            setBackgroundImage(desktopid,imgurl);
        }
    };

    var setBackgroundImage = function(id,imgurl){
        $(id).css({"background-image": "url("+imgurl+")"});
    };

    $timeout(function(){
        work.loadImages();
    },2000);

    var getScreenShots = function( obj, size ){
        var url = obj.url;
        if(url === null){
            return "";
        }
        size = (size === null) ? "big" : size;
        var vid;
        var results;
        results = url.match("[\\?&]v=([^&#]*)");
        vid = ( results === null ) ? url : results[1];
        obj.videoid = vid;
        if(size == "small"){
            return "http://img.youtube.com/vi/"+vid+"/2.jpg";
        }else {
            return "http://img.youtube.com/vi/"+vid+"/0.jpg";
        }
    };

}]);

angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
.controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function($scope, $timeout, $transition, $q) {
}]).directive('carousel', [function() {
    return {

    };
}]);



/*
    $("#play-video").click(function(){
        var b=$("#videoID").attr("src");b+="&autoplay=1";
        $("#videoID").attr("src",b);$("#videoID").attr({height:"315",width:420});
        $(this).fadeOut(100);$("#videoID").fadeIn(200)
}};
*/


