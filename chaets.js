var myChart=echarts.init(document.getElementById("myBarChart"));

var option = {
    title: {
        text: '临床试验审批数量'
    },
    tooltip: {
        trigger: 'axis',
        fontSize:'50',
    },
    legend: {
        data: ['新药', '仿制药', '进口药'],
        textStyle:{
            fontSize:13,
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        axisLabel:{
            textStyle:{
                fontSize:15,
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            textStyle:{
                fontSize:15,
            }
        }
    },
    series: [
        {
            name: '新药',
            type: 'line',
            stack: '总量',
            color:'#0e578c',
            data: [148, 344, 606, 4011, 734, 312, 577]
        },
        {
            name: '仿制药',
            type: 'line',
            stack: '总量',
            color:'#3f84c7',
            data: [92, 81, 404, 2949, 251, 58, 107]
        },
        {
            name: '进口药',
            type: 'line',
            stack: '总量',
            color:'#9dc3f0',
            data: [251, 216, 348, 513, 316, 154, 494]
        },

    ]
};


myChart.setOption(option);


window.onresize=function () {
    myChart.resize();
    myChart.resize();
};

