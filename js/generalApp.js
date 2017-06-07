/**
 * Created by Administrator on 2017/6/3.
 */
/***综合分析控制器和路由配置** */
angular.module('myGerneral',['ng','ngRoute'])
.controller('generalCtrl',["$scope",function($scope){
    
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
.controller('homeCtrl',["$scope","$http",function($scope,$http){
    $("#sparkline1").sparkline([14,21,8,12,10,18,25,20], {
            type: 'bar',
            height: '40',
            barWidth: 8,
            barColor: '#00a65a'
        });
        $("#sparkline2").sparkline([14,21,8,12,10,18,25,20], {
            type: 'bar',
            height: '40',
            barWidth: 8,
            barColor: '#dd4b39'
        });
        $("#sparkline3").sparkline([14,21,8,12,10,18,25,20], {
            type: 'bar',
            height: '40',
            barWidth: 8,
            barColor: '#00c0ef '
        });
        //DONUT CHART
        var donut = new Morris.Donut({
            element: 'sales-chart',
            resize: true,
            colors: ["#3c8dbc", "#f56954", "#00a65a"],
            data: [
                {label: "软件开发", value: 12},
                {label: "IT设备", value: 30},
                {label: "地理测绘", value: 20}
            ],
            hideHover: 'auto'
        });
        //BAR CHART
        var bar = new Morris.Bar({
            element: 'bar-chart',
            resize: true,
            data: [
                {y: '2017 1月', a: 100},
                {y: '2017 2月', a: 75},
                {y: '2017 3月', a: 50},
                {y: '2017 4月', a: 75},
                {y: '2017 5月', a: 50},
                {y: '2017 6月', a: 75},
                {y: '2017 7月', a: 100},
                {y: '2017 8月', a: 95},
                {y: '2017 9月', a: 83},
                {y: '2017 10月', a: 78},
                {y: '2017 11月', a: 91}
            ],
            barColors: ['#00a65a'],
            xkey: 'y',
            ykeys: ['a'],
            labels: ['税收'],
            hideHover: 'auto'
        });
        // AREA CHART
        var area = new Morris.Area({
            element: 'revenue-chart',
            resize: true,
            data: [
                {y: '2011 Q1', item1: 2666, item2: 2666},
                {y: '2011 Q2', item1: 2778, item2: 2294},
                {y: '2011 Q3', item1: 4912, item2: 1969},
                {y: '2011 Q4', item1: 3767, item2: 3597},
                {y: '2012 Q1', item1: 6810, item2: 1914},
                {y: '2012 Q2', item1: 5670, item2: 4293},
                {y: '2012 Q3', item1: 4820, item2: 3795},
                {y: '2012 Q4', item1: 15073, item2: 5967},
                {y: '2013 Q1', item1: 10687, item2: 4460},
                {y: '2013 Q2', item1: 8432, item2: 5713}
            ],
            xkey: 'y',
            ykeys: ['item1', 'item2'],
            labels: ['Item 1', 'Item 2'],
            lineColors: ['#a0d0e0', '#3c8dbc'],
            hideHover: 'auto'
        });
        //数据表格
        $("#example1").DataTable({
            "paging": false,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": false,
            "autoWidth": false
        });
}])
.controller('totalCtrl',["$scope",function($scope){
    /*时间选择*/
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd', 
        autoclose: true,
        todayHighlight : true,
        todayBtn : "linked",
        language: 'zh-CN'
    });

    // LINE CHART
    var line = new Morris.Line({
        element: 'line-chart',
        resize: true,
        data: [
            {y: '1月', a: 2666,b: 6432},
            {y: '2月', a: 2778,b: 8432},
            {y: '3月', a: 4912,b: 10687},
            {y: '4月', a: 3767,b: 15073},
            {y: '5月', a: 6810,b: 4820},
            {y: '6月', a: 5670,b: 5670},
            {y: '7月', a: 4820,b: 6810},
            {y: '8月', a: 15073,b: 3767},
            {y: '9月', a: 10687,b: 4912},
            {y: '10月', a: 8432,b: 2778},
            {y: '11月', a: 6432,b: 2666}
        ],
            xkey: 'y',
            ykeys: ['a','b'],
            labels: ['营业收入','资产总额'],
            lineColors: ['#a0d0e0', '#3c8dbc'],
            hideHover: 'auto'
    });
    //BAR CHART
    var bar = new Morris.Bar({
        element: 'bar-chart',
        resize: true,
        data: [
            {y: '2011', a: 100, b: 90},
            {y: '2012', a: 75, b: 65},
            {y: '2013', a: 50, b: 40},
            {y: '2014', a: 75, b: 65},
            {y: '2015', a: 50, b: 40},
            {y: '2016', a: 75, b: 65},
            {y: '2012', a: 100, b: 90}
        ],
            barColors: ['#00a65a', '#f56954'],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['营业收入', '资产总额'],
            hideHover: 'auto'
        });
}])
.controller('busCateCtrl',["$scope","$http",function($scope,$http){
        $('.datepicker').datepicker({
            format: 'yyyy-mm-dd', 
            autoclose: true,
            todayHighlight : true,
            todayBtn : "linked",
            language: 'zh-CN'
        });
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });
        // BAR CHART
        var barMyChart = echarts.init(document.getElementById('barChart'));
        var barOptions= {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    x: 'right',
                    data:['指标值']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis : [
                    {
                        type : 'category',
                        data : ['外资企业', '内资企业', '私营企业', '个体工商企业', '代表机构'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                xAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'指标值',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390]
                    }
                ]
            };
         barMyChart.setOption(barOptions);
         //barChar2
         var barMyChart2 = echarts.init(document.getElementById('barChart2'));
         var barOptions2= {
                color: ['#C23531'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    x: 'right',
                    data:['留区税收']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis : [
                    {
                        type : 'category',
                        data : ['外资企业', '内资企业', '私营企业', '个体工商企业', '代表机构'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                xAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} 亿元'
                        }
                    }
                ],
                series : [
                    {
                        name:'留区税收',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390]
                    }
                ]
            };
         barMyChart2.setOption(barOptions2);
         //radarChart
         var radarMyChart = echarts.init(document.getElementById('radarChart'));
         var radarOption={
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient : 'vertical',
                    x : 'right',
                    data:['代表机构']
                },
                polar : [
                {
                    indicator : [
                        { text: '留区税收', max: 6000},
                        { text: '总收入', max: 16000},
                        { text: '工业总产值', max: 30000},
                        { text: '出口总额', max: 38000},
                        { text: '利润总额', max: 52000}
                        ]
                    }
                ],
                calculable : true,
                series : [
                    {
                        type: 'radar',
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '代表机构'
                            }
                        ]
                    }
                ]
            };
        radarMyChart.setOption(radarOption);
        //lineChart
        var lineMyChart = echarts.init(document.getElementById('lineChart'));
        var lineOption={
                legend: {
                    x:'right',
                    data:['代表机构']
                },
                tooltip: {
                    trigger: 'axis'
                },
                calculable : true,
                grid: {
                    left: '3%',
                    right: '6%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} 亿元'
                        }
                    }
                ],
                series : [
                    {
                        name:'代表机构',
                        type:'line',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    shadowColor : 'rgba(0,0,0,0.4)'
                                }
                            }
                        },
                        data:[15, 50, 75, 121, 239, 401, 457, 533, 569,585,621]
                    }
                ]
            };
        lineMyChart.setOption(lineOption);
        //数据表格
        $("#example1").DataTable({
            "paging": false,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": false,
            "autoWidth": false
        });
}])
.controller('technoCtrl',["$scope","$http",function($scope,$http){
    /*时间选择*/
       $('.datepicker').datepicker({
            format: 'yyyy-mm-dd', 
            autoclose: true,
            todayHighlight : true,
            todayBtn : "linked",
            language: 'zh-CN'
        });
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });

        // BAR CHART
        var barMyChart = echarts.init(document.getElementById('barChart'));
        var barOptions= {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    x: 'right',
                    data:['指标值']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis : [
                    {
                        type : 'category',
                        data : ['电子与信息', '工程和新医药', '航空航天', '环境保护', '海洋工程'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                xAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'指标值',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390]
                    }
                ]
            };
         barMyChart.setOption(barOptions);
         //barChar2
         var barMyChart2 = echarts.init(document.getElementById('barChart2'));
         var barOptions2= {
                color: ['#C23531'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    x: 'right',
                    data:['留区税收']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis : [
                    {
                        type : 'category',
                        data :  ['电子与信息', '工程和新医药', '航空航天', '环境保护', '海洋工程'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                xAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} 亿元'
                        }
                    }
                ],
                series : [
                    {
                        name:'留区税收',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390]
                    }
                ]
            };
         barMyChart2.setOption(barOptions2);
         //radarChart
         var radarMyChart = echarts.init(document.getElementById('radarChart'));
         var radarOption={
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient : 'vertical',
                    x : 'right',
                    data:['海洋工程']
                },
                polar : [
                {
                    indicator : [
                        { text: '留区税收', max: 6000},
                        { text: '总收入', max: 16000},
                        { text: '工业总产值', max: 30000},
                        { text: '出口总额', max: 38000},
                        { text: '利润总额', max: 52000}
                        ]
                    }
                ],
                calculable : true,
                series : [
                    {
                        type: 'radar',
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '海洋工程'
                            }
                        ]
                    }
                ]
            };
        radarMyChart.setOption(radarOption);
        //lineChart
        var lineMyChart = echarts.init(document.getElementById('lineChart'));
        var lineOption={
                legend: {
                    x:'right',
                    data:['海洋工程']
                },
                tooltip: {
                    trigger: 'axis'
                },
                calculable : true,
                grid: {
                    left: '3%',
                    right: '6%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} 亿元'
                        }
                    }
                ],
                series : [
                    {
                        name:'海洋工程',
                        type:'line',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    shadowColor : 'rgba(0,0,0,0.4)'
                                }
                            }
                        },
                        data:[15, 50, 75, 121, 239, 401, 457, 533, 569,585,621]
                    }
                ]
            };
        lineMyChart.setOption(lineOption);
        //数据表格
        $("#example1").DataTable({
            "paging": false,
            "lengthChange": false,
            "searching": false,
            "ordering": true,
            "info": false,
            "autoWidth": false
        });
}])
.controller('economyCtrl',["$scope","$http",function($scope,$http){
     /*时间选择*/
        $('.datepicker').datepicker({
            format: 'yyyy-mm-dd', 
            autoclose: true,
            todayHighlight : true,
            todayBtn : "linked",
            language: 'zh-CN'
        });
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });

        // BAR CHART
        var barMyChart = echarts.init(document.getElementById('barChart'));
        var barOptions= {
                color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    x: 'right',
                    data:['指标值']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis : [
                    {
                        type : 'category',
                        data : ['广陵区', '邗江区', '江都区', '宝应县', '仪征市','高邮市'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                xAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'指标值',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390,245]
                    }
                ]
            };
         barMyChart.setOption(barOptions);
         //barChar2
         var barMyChart2 = echarts.init(document.getElementById('barChart2'));
         var barOptions2= {
                color: ['#C23531'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend:{
                    x: 'right',
                    data:['留区税收']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis : [
                    {
                        type : 'category',
                        data :  ['广陵区', '邗江区', '江都区', '宝应县', '仪征市','高邮市'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                xAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} 亿元'
                        }
                    }
                ],
                series : [
                    {
                        name:'留区税收',
                        type:'bar',
                        barWidth: '60%',
                        data:[10, 52, 200, 334, 390,254]
                    }
                ]
            };
         barMyChart2.setOption(barOptions2);
         //radarChart
         var radarMyChart = echarts.init(document.getElementById('radarChart'));
         var radarOption={
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient : 'vertical',
                    x : 'right',
                    data:['高邮市']
                },
                polar : [
                {
                    indicator : [
                        { text: '留区税收', max: 6000},
                        { text: '总收入', max: 16000},
                        { text: '工业总产值', max: 30000},
                        { text: '出口总额', max: 38000},
                        { text: '利润总额', max: 52000}
                        ]
                    }
                ],
                calculable : true,
                series : [
                    {
                        type: 'radar',
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '高邮市'
                            }
                        ]
                    }
                ]
            };
        radarMyChart.setOption(radarOption);
        //lineChart
        var lineMyChart = echarts.init(document.getElementById('lineChart'));
        var lineOption={
                legend: {
                    x:'right',
                    data:['高邮市']
                },
                tooltip: {
                    trigger: 'axis'
                },
                calculable : true,
                grid: {
                    left: '3%',
                    right: '6%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} 亿元'
                        }
                    }
                ],
                series : [
                    {
                        name:'高邮市',
                        type:'line',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    shadowColor : 'rgba(0,0,0,0.4)'
                                }
                            }
                        },
                        data:[15, 50, 75, 121, 239, 401, 457, 533, 569,585,621]
                    }
                ]
            };
        lineMyChart.setOption(lineOption);
}])
.controller('enterDistrCtrl',["$scope","$http",function($scope,$http){
     /*时间选择*/
       $('.datepicker').datepicker({
            format: 'yyyy-mm-dd', 
            autoclose: true,
            todayHighlight : true,
            todayBtn : "linked",
            language: 'zh-CN'
        });

        //lineChart
        var lineMyChart = echarts.init(document.getElementById('lineChart'));
        var lineOption={
                legend: {
                    x:'right',
                    data:['留区税收']
                },
                tooltip: {
                    trigger: 'axis'
                },
                calculable : true,
                grid: {
                    left: '3%',
                    right: '6%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} 亿元'
                        }
                    }
                ],
                series : [
                    {
                        name:'留区税收',
                        type:'line',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    shadowColor : 'rgba(0,0,0,0.4)'
                                }
                            }
                        },
                        data:[15, 50, 75, 121, 239, 401, 457, 533, 569,585,621]
                    }
                ]
            };
        lineMyChart.setOption(lineOption);
}])
.controller('indivEnterCtrl',["$scope","$http",function($scope,$http){
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });

        // BAR CHART
        var barMyChart = echarts.init(document.getElementById('barChart'));
        var barOptions= {
                    title : {
                        'text':'累计同比走势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        x:'right',
                        data:['当前','历史同期','增长率']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} 亿元'
                            }
                        },
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name:'当前',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'历史同期',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'增长率',
                            type:'line',
                            yAxisIndex: 1,
                            data:[1.3, 1.2, 1.3, 1.1, 1.1, 0.9, 1.3, 1.1, 1.5, 0.9, 0.9, 0.7]
                        }
                    ]
                };
         barMyChart.setOption(barOptions);
         //barChar2
         var barMyChart2 = echarts.init(document.getElementById('barChart2'));
         var barOptions2= {
                    title : {
                        'text':'当月同比走势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        x:'right',
                        data:['当前','历史同期','增长率']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} 亿元'
                            }
                        },
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name:'当前',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'历史同期',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'增长率',
                            type:'line',
                            yAxisIndex: 1,
                            data:[1.3, 1.2, 1.3, 1.1, 1.1, 0.9, 1.3, 1.1, 1.5, 0.9, 0.9, 0.7]
                        }
                    ]
                };
         barMyChart2.setOption(barOptions2);
         //barChart3
         var barMyChart3 = echarts.init(document.getElementById('barChart3'));
         var barOptions3= {
                    title : {
                        'text':'年同期走势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        x:'right',
                        data:['累计值','同比增长']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} 亿元'
                            }
                        },
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name:'累计值',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'同比增长',
                            type:'line',
                            yAxisIndex: 1,
                            data:[1.3, 1.2, 1.3, 1.1, 1.1, 0.9, 1.3, 1.1, 1.5, 0.9, 0.9, 0.7]
                        }
                    ]
                };
         barMyChart3.setOption(barOptions3);
        //lineChart
        var lineMyChart = echarts.init(document.getElementById('lineChart'));
        var lineOption={
                title:{
                    text:'预测走势'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    x:'right',
                    data:['2013年','2014年','2015年','2016年','2017年']
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel:{
                            formatter:'{value}亿元'
                        }
                    }
                ],
                series : [
                    {
                        name:'2013年',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 230, 210,415,273,147,109]
                    },
                    {
                        name:'2014年',
                        type:'line',
                        data:[220, 182, 191, 234, 290, 330, 310,405,478,383,294]
                    },
                    {
                        name:'2015年',
                        type:'line',
                        data:[150, 232, 201, 154, 190, 330, 410,237,345,463,237]
                    },
                    {
                        name:'2016年',
                        type:'line',
                        data:[320, 332, 301, 334, 390, 330, 320,412,321,450,603]
                    },
                    {
                        name:'2017年',
                        type:'line',

                        data:[420, 232, 401, 334, 290, 330, 320,514,384,562,486]
                    }
                ]
            };
        lineMyChart.setOption(lineOption);
}])
.controller('busIndCtrl',["$scope","$http",function($scope,$http){
    
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });

        // BAR CHART
        var barMyChart = echarts.init(document.getElementById('barChart'));
        var barOptions= {
                    title:{
                        text:'当月走势预警图'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        x:'right',
                        data:['本企业','竞争对手','行业平均值','预警值']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            position: 'bottom',
                            axisLine : {    // 轴线
                                show: true
                            },
                            axisTick : {    // 轴标记
                                show:true
                            },
                            axisLabel : {
                                show:true,
                                interval: 'auto',    // {number}
                                formatter: '{value}月'
                            },
                        data : [
                                '1','2','3','4','5', '6', '7','8','9','10','11','12'
                            ]
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLine : {    // 轴线
                                show: true
                            },
                            axisTick : {    // 轴标记
                                show:true
                            },
                            axisLabel : {
                                show:true,
                                interval: 'auto',    // {number}
                                formatter: '{value} 万元',    // Template formatter!
                            },
                            splitLine : {
                                show:true
                            }
                        }
                    ],
                    series : [
                        {
                            name: '本企业',
                            type: 'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name: '竞争对手',
                            type: 'bar',
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'行业平均值',
                            type: 'line',
                            data: [2.0, 2.2, 23.3, 24.5, 26.3, 60.2, 120.3, 123.4, 33.0, 16.5, 12.0, 6.2]
                        },
                        {
                            name:'预警值',
                            type: 'line', 
                            data: [12.0, 12.2, 13.3, 14.5, 16.3, 58.2, 128.3, 103.4, 31.0, 24.5, 18.0, 16.2]
                        }
                    ]
                }
         barMyChart.setOption(barOptions);
        //lineChart
        var lineMyChart = echarts.init(document.getElementById('lineChart'));
        var lineOption={
                title:{
                    text:'累计走势预警'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    x:'right',
                    data:['本企业','竞争对手','行业平均值','预警值']
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel:{
                            formatter:'{value}万元'
                        }
                    }
                ],
                series : [
                    {
                        name:'本企业',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 230, 210,415,273,147,109]
                    },
                    {
                        name:'竞争对手',
                        type:'line',
                        data:[220, 182, 191, 234, 290, 330, 310,405,478,383,294]
                    },
                    {
                        name:'行业平均值',
                        type:'line',
                        data:[150, 232, 201, 154, 190, 330, 410,237,345,463,237]
                    },
                    {
                        name:'预警值',
                        type:'line',
                        data:[320, 332, 301, 334, 390, 330, 320,412,321,450,603]
                    }
                ]
            };
        lineMyChart.setOption(lineOption);
}])
.controller('reliefAreaCtrl',["$scope","$http",function($scope,$http){
    //radarChart
         var radarMyChart = echarts.init(document.getElementById('radarChart'));
         var radarOption={
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient : 'vertical',
                    x : 'right',
                    data:['指标值']
                },
                polar : [
                {
                    indicator : [
                        { text: '留区税收', max: 6000},
                        { text: '总收入', max: 16000},
                        { text: '工业总产值', max: 30000},
                        { text: '出口总额', max: 38000},
                        { text: '利润总额', max: 52000}
                        ]
                    }
                ],
                calculable : true,
                series : [
                    {
                        type: 'radar',
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '指标值'
                            }
                        ]
                    }
                ]
            };
        radarMyChart.setOption(radarOption);
        //lineChart
        var lineMyChart = echarts.init(document.getElementById('lineChart'));
        var lineOption={
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    x:'right',
                    data:['留区税收']
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel:{
                            formatter:'{value}万元'
                        }
                    }
                ],
                series : [
                    {
                        name:'留区税收',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 230, 210,415,273,147,109]
                    }
                ]
            };
        lineMyChart.setOption(lineOption);
}])
.controller('multiIndexCtrl',["$scope","$http",function($scope,$http){
     /*时间选择*/
        $('.datepicker').datepicker({
            format: 'yyyy-mm-dd', 
            autoclose: true,
            todayHighlight : true,
            todayBtn : "linked",
            language: 'zh-CN'
        });
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });
         "use strict";
         //sparkline bar

        // BAR CHART
        var barMyChart = echarts.init(document.getElementById('barChart'));
        var barOptions={
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '3%',
                        bottom: '3%',
                        containLabel: true
                    },
                    legend: {
                        x:'right',
                        data:['留区税收','总收入','留区税收增长率','总收入增长率','税收百分比']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} 亿元'
                            }
                        },
                        {
                            type: 'value',
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'留区税收',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'总收入',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'留区税收增长率',
                            type:'line',
                            yAxisIndex: 1,
                            data:[0, 8.2, 5.3, 7.1, 4.1, 2.9, -8.3, -5.1, -5.5, -3.9, -4.9, -9.7]
                        },
                         {
                            name:'总收入增长率',
                            type:'line',
                            yAxisIndex: 1,
                            data:[0, 10.2, 7.3, 8.1, 5.1, 4.9, 5.3, 5.1, 5.5, 0, 4.9, 9.7]
                        },
                        {
                            name:'税收百分比',
                            type:'line',
                            yAxisIndex: 1,
                            data:[25, 34.2, 27.3, 38.1, 45.1, 42.9, 35.3, 45.1, 35.5, 40, 42.9, 39.7],
                            markLine: {
                                symbol: ['none', 'none'],
                                label: {
                                    normal: {show: false}
                                },
                                lineStyle: {
                                    normal: {
                                        color: '#e54035',
                                        width: 2
                                    }
                                },
                                data: [{
                                    yAxis: '0'
                                }]
                            }
                        },
                    ]
                };
         barMyChart.setOption(barOptions);
}])
.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl:'general/home.html',
        controller:'homeCtrl'   
    })
    .when('/total-assets',{
        templateUrl:'general/total-assets.html',
        controller:'totalCtrl'
    })
    .when('/business-category',{
        templateUrl:'general/business-category.html',
        controller:'busCateCtrl'
    })
    .when('/technosphere',{
        templateUrl:'general/technosphere.html',
        controller:'technoCtrl'
    })
    .when('/economy',{
        templateUrl:'general/economy.html',
        controller:'economyCtrl'
    })
    .when('/enterprise-distribution',{
        templateUrl:'general/enterprise-distribution.html',
        controller:'enterDistrCtrl'
    })
    .when('/business-indicator',{
        templateUrl:'general/business-indicator.html',
        controller:'busIndCtrl'
    })
    .when('/individual-enterprise',{
        templateUrl:'general/individual-enterprise.html',
        controller:'indivEnterCtrl'
    })
    .when('/relief-area',{
        templateUrl:'general/relief-area.html',
        controller:'reliefAreaCtrl'
    })
    .when('/multi-index',{
        templateUrl:'general/multi-index.html',
        controller:'multiIndexCtrl'
    })
    .otherwise({redirectTo:'/home'})
})