angular.module('y').controller('TeamCtrl',['$scope','$timeout',function($scope,$timeout){
    var tm = $scope;
    tm.teamList = [
        {id:1,url:'assets/team/one.jpg'},
        {id:2,url:'assets/team/two.png'},
        {id:3,url:'assets/team/three.png'},
        {id:4,url:'assets/team/four.png'},
        {id:5,url:'assets/team/one.jpg'},
        {id:6,url:'assets/team/two.png'}
    ];

    tm.loadImages = function(){
        for(var i=0;i<tm.teamList.length;i++){
            var desktopid = '#'+'team'+tm.teamList[i].id;
            var mobileid = '#'+'team-small'+tm.teamList[i].id;
            var imgurl = tm.teamList[i].url;
            setBackgroundImage(desktopid,imgurl);
            setBackgroundImage(mobileid,imgurl);
        }
    };

    var setBackgroundImage = function(id,imgurl){
        $(id).css({"background-image": "url("+imgurl+")"});
    };

    $timeout(function(){
        tm.loadImages();
    },2000);


}]);
