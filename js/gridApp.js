/**
 * Created by Administrator on 2016/3/20.
 */
/**网格管理控制器及路由配置** */
angular.module('myGrid',['ng','ngRoute'])
    .controller('gridCtrl',["$scope","$location",function($scope,$event,$location){
        
    }])
    .controller('headCtrl',["$scope",function($scope,$event){
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
    .controller('asideCtrl',["$scope","$location",function($scope,$location ){
        /**左侧栏目avtive**/
        $scope.isActive=function (current) {
                var href = '#'+$location.url();
                return current === href;
        };
    }])
    .controller('heightCtrl',["$scope",function($scope){
           var leftBox=document.querySelector('#box-left');
           var leftHeight=angular.element(leftBox).height();
            $scope.rightHeight={'height':leftHeight};
            $scope.rightChildStyle={
                'position': 'relative', 
                'overflow': 'auto', 
                'width': 'auto',
                'height':leftHeight*0.9
            };
    }])
    .controller('monitCtrl',["$scope","$http",function($scope,$http){

    }])
    .controller('assigCtrl',["$scope","$http",function($scope,$http,$event){
        /**任务下发**/
        $scope.taskAdd=function($event){
            $event.preventDefault();
            layer.open({
                type: 1,
                title:['添加任务','font-size:18px;font-weight:bold;'],
                shadeClose: true,
                shade: 0.8,
                scrollbar: false,
                area: ['700px', 'auto'],
                content:'<form role="form">'+
                        '<div class="box-body">'+
                        '<div class="form-group">'+
                        '<label for="exampleInputEmail1">任务名称：</label>'+
                        '<input type="email" class="form-control"  placeholder="">'+
                        '</div>'+
                        '<div class="form-group">'+
                        '<label for="exampleInputPassword1">任务类型：</label>'+
                        '<select class="form-control"><option value="">常规</option></select>'+
                        '</div>'+
                        '<div class="form-group">'+
                        '<label for="exampleInputPassword1">执行人：</label>'+
                        '<select class="form-control"><option value="">王强</option></select>'+
                        '</div>'+
                        '<div class="form-group">'+
                        '<label for="exampleInputPassword1">任务内容：</label>'+
                        '<textarea rows="3" cols="10" class="form-control"></textarea>'+
                        '</div>'+
                        '</div>'+
                        '<div class="box-footer text-right">'+
                        '<button type="button" class="btn btn-default" style="margin-right:15px;">取消</button><button type="button" class="btn btn-primary">下发</button>'+
                        '</div>'+
                        '</form>'
            });
        }
    }])
    .controller('messageCtrl',["$scope","$http",function($scope,$http,$event){
        /**信息公告**/
        $scope.messageAdd=function($event){
           $event.preventDefault();
            layer.open({
                type: 1,
                title:['新增公告','font-size:18px;font-weight:bold;'],
                shadeClose: true,
                shade: 0.8,
                scrollbar: false,
                area: ['700px', 'auto'],
                content:'<form role="form">'+
                        '<div class="box-body">'+
                        '<div class="form-group">'+
                        '<label for="exampleInputEmail1">标题：</label>'+
                        '<input type="email" class="form-control"  placeholder="">'+
                        '</div>'+
                        '<div class="form-group">'+
                        '<label for="exampleInputPassword1">发布人：</label>'+
                        '<select class="form-control"><option value="">王强</option></select>'+
                        '</div>'+
                        '<div class="form-group">'+
                        '<label for="exampleInputPassword1">公告内容：</label>'+
                        '<textarea rows="3" cols="10" class="form-control"></textarea>'+
                        '</div>'+
                        '</div>'+
                        '<div class="box-footer text-right">'+
                        '<button type="button" class="btn btn-default" style="margin-right:15px;">取消</button><button type="button" class="btn btn-primary">发布</button>'+
                        '</div>'+
                        '</form>'
            });
        }
    }])
    .controller('newsCtrl',["$scope","$http",function($scope,$http,$event){
         /**消息管理**/
        $scope.newsAdd=function($event){
            $event.preventDefault();
            layer.open({
                type: 1,
                title:['发送给:XX','font-size:18px;font-weight:bold;'],
                shadeClose: true,
                shade: 0.8,
                scrollbar: false,
                area: ['700px', 'auto'],
                content:'<form role="form">'+
                        '<div class="box-body">'+
                        '<div class="form-group">'+
                        '<label for="exampleInputEmail1">标题：</label>'+
                        '<input type="email" class="form-control"  placeholder="">'+
                        '</div>'+
                        '<div class="form-group">'+
                        '<label for="exampleInputPassword1">内容：</label>'+
                        '<textarea rows="3" cols="10" class="form-control"></textarea>'+
                        '</div>'+
                        '</div>'+
                        '<div class="box-footer text-right">'+
                        '<button type="button" class="btn btn-danger" style="margin-right:15px;">取消</button><button type="button" class="btn btn-primary">发送</button>'+
                        '</div>'+
                        '</form>'
            });
        }
    }])
    .controller('companyCtrl',["$scope",function($scope,$event){

    }])
    .config(function($routeProvider){
        $routeProvider
        .when('/monitoring',{
            templateUrl:'grids/monitoring.html',
            controller:'monitCtrl'
        })
        .when('/company',{
            templateUrl:'grids/company.html',
            controller:'companyCtrl'
        })
        .when('/assignment',{
            templateUrl:'grids/assignment.html',
            controller:'assigCtrl'
        })
        .when('/message',{
            templateUrl:'grids/message.html',
            controller:'messageCtrl'
        })
        .when('/news',{
            templateUrl:'grids/news.html',
            controller:'newsCtrl'
        })
        .otherwise({redirectTo:'/monitoring'})
    })