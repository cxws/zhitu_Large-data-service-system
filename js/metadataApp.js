/**
 * Created by Administrator on 2017/6/13.
 */
angular.module('myMetaData',['ng','ngRoute'])
.controller('metaDataCtrl',["$scope",function($scope){
    
}])
.controller('headCtrl',["$scope",function($scope){
     /**注销**/
    $scope.signOut=function($event){
        $event.preventDefault();
        layer.msg('<h2><i class="fa fa-sign-out fa-lg" style="color:red"></i>注销?</h2>是否返回首页',{
            time:0,
            shade: 0.5,
            area:['100%','200px'],
            btn: ['Yes', 'NO'],
            yes:function(index,location){
                layer.close(index);
                window.location.href="../index.html";
            }
        });    
    }
}])
.controller('asideCtrl',["$scope","$location",function($scope,$location){
    /**左侧栏目avtive**/
    $scope.isActive=function (current) {
        var href = '#'+$location.url();
        return current === href;
    }
}])
.controller('heightCtrl',["$scope",function($scope){
    var kBox=document.querySelector('.box-left');
    var kHeight=angular.element(kBox).height();
    $scope.rHeight={'height':kHeight};
}])
.controller('topicsCtrl',["$scope","$http",function($scope,$http){

}])
.controller('groupsCtrl',["$scope","$http",function($scope,$http){

}])
.controller('bivariateCtrl',["$scope","$http",function($scope,$http){

}])
.controller('dataIntegCtrl',["$scope","$http",function($scope,$http){

}])
.controller('indexDataCtrl',["$scope","$http",function($scope,$http){

}])
.controller('moduleMenuCtrl',["$scope","$http",function($scope,$http){
    
}])
.controller('systemLogCtrl',["$scope","$http",function($scope,$http){

}])
.controller('instituCtrl',["$scope","$http",function($scope,$http){

}])
.controller('rolePerCtrl',["$scope","$http",function($scope,$http){

}])
.controller('accountCtrl',["$scope","$http",function($scope,$http){

}])
.controller('personCtrl',["$scope","$http",function($scope,$http){

}])
.config(function($routeProvider){
    $routeProvider
    .when('/topics-indicators',{
        templateUrl:'metadata/topics-indicators.html',
        controller:'topicsCtrl'
    })
    .when('/grouping',{
        templateUrl:'metadata/grouping.html',
        controller:'groupsCtrl'
    })
    .when('/bivariate-table',{
        templateUrl:'metadata/bivariate-table.html',
        controller:'bivariateCtrl'
    })
    .when('/data-integration',{
        templateUrl:'metadata/data-integration.html',
        controller:'dataIntegCtrl'
    })
    .when('/index-data',{
        templateUrl:'metadata/index-data.html',
        controller:'indexDataCtrl'
    })
    .when('/module-menu',{
        templateUrl:'metadata/module-menu.html',
        controller:'moduleMenuCtrl'
    })
    .when('/system-log',{
        templateUrl:'metadata/system-log.html',
        controller:'systemLogCtrl'
    })
    .when('/institution-information',{
        templateUrl:'metadata/institution-information.html',
        controller:'instituCtrl'
    })
    .when('/role-permission',{
        templateUrl:'metadata/role-permission.html',
        controller:'rolePerCtrl'
    })
    .when('/account-information',{
        templateUrl:'metadata/account-information.html',
        controller:'accountCtrl'
    })
    .when('/personnel-information',{
        templateUrl:'metadata/personnel-information.html',
        controller:'personCtrl'
    })
    .otherwise({redirectTo:'/topics-indicators'})
})