var myChart=echarts.init(document.getElementById("myPieChart"));

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
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
                '四川', '山东'],
            axisPointer: {
                type: 'shadow'
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
            color:'#40a4c3',
            data: [443,429,331,285,278,266,213,190,158,94,83,70]
        },
        {
            name: '临床试验点数量',
            type: 'bar',
            color:'#ffce00',
            yAxisIndex: 1,
            data: [23,13,33,8,53,20,30,13,17,10,33,45]
        }
    ]
};

myChart.setOption(option);


window.onresize=function () {
    myChart.resize();
    myChart.resize();
};

