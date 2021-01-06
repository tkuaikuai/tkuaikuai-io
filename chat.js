var myChart=echarts.init(document.getElementById("myOarChart"));
var
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999',
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: ['招募信息数量', '临床试验点数量']
        },
        xAxis: [
            {
                type: 'category',
                data: ['北京', '湖南', '江苏', '上海', '广东', '河南', '浙江', '安徽', '河北', '湖北',
                    '四川', '山东','广西','重庆','黑龙江','江西','贵州','福建','天津','云南','山西','甘肃',
                    '吉林','辽宁','海南','陕西','青海','台湾','内蒙古','西藏','宁夏','新疆','香港','澳门'],
                axisLabel:{
                    textStyle:{
                        fontSize:5,
                    }
                },
                axisPointer: {
                    type: 'shadow',
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '招募信息数量',
                min: 0,
                max: 500,
                interval: 50,
                axisLabel: {
                    formatter: '{value} '
                }
            },
            {
                type: 'value',
                name: '临床试验点数量',
                min: 0,
                max: 60,
                interval: 10,
                axisLabel: {
                    formatter: '{value} '
                }
            }
        ],
        series: [
            {
                name: '招募信息数量',
                type: 'bar',
                color:'#3f84c7',
                data: [443,429,331,285,278,266,213,190,158,94,
                    83,70,44,40,30,26,24,20,18,8,3,2,2,0,0,0,0,0,0,
                    0,0,0,0,0]
            },
            {
                name: '临床试验点数量',
                type: 'bar',
                color:'#ff5737',
                yAxisIndex: 1,
                data: [23,13,33,8,53,20,30,13,17,10,33,45,10,
                    14,6,13,3,6,11,6,14,1,4,9,1,12,2,0,6,0,4,13,0,0]
            }
        ]
    };



myChart.setOption(option);


window.onresize=function () {
    myChart.resize();
    myChart.resize();
};