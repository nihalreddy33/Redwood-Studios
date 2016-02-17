angular.module('y').controller('PagesCtrl',['$scope','$location', '$anchorScroll','$state',function($scope,$location, $anchorScroll, $state){
    var pg = $scope;
    pg.menuList = [
        {label:'Home',iconclass:'fa fa-comment-o fa-3x',container:'home-container',id:'home'},
        {label:'About us',iconclass:'fa fa-trophy fa-3x',container:'about-us-container',id:'about'},
        //{label:'Team',iconclass:'fa fa-puzzle-piece fa-3x',container:'team-container',id:'team'},
        {label:'Work',iconclass:'fa fa-cogs fa-3x',container:'work-container',id:'work'},
        {label:'Clients',iconclass:'fa fa-users fa-3x',container:'clients-container',id:'clients'},
        {label:'Contact us',iconclass:'fa fa-pencil-square-o fa-3x',container:'contact-us-container',id:'contactus'}
    ];

    pg.setProps = function(){
        /* affix the navbar after scroll below header */
        $('#nav').affix({
            offset: {
                //Stick to top
                //top: $('header').height()-$('#nav').height()

                top:$('#nav').offset().top
            }
        });
        activateStickyBar();

        /*$('#stick-bar').affix({
            offset: {
                top:$('#stick-bar').offset().top
            }
        });
        $('body').scrollspy({ target: '#stick-bar' });*/
    };

    var activateStickyBar = function(){
        $('body').scrollspy({ target: '#stick-bar' });
    };

    activateStickyBar();

    pg.scrollTop = function(){
        $('body,html').animate({scrollTop:0},1000);
    };

    pg.navClick = function(id,container){
        //$location.hash(id);
        var sectionid = '.'+container;
        var pos = $(sectionid).offset().top-150;
        //console.log('element name: '+sectionid+' position ',$(sectionid).position(),' Pos: ',pos);
        $('body,html').animate({scrollTop:pos},700);
    };

    pg.goToInfoPage = function(){
        $state.go('request-info');
    };

}]);
