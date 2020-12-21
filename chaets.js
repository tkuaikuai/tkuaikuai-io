var myChart=echarts.init(document.getElementById("myBarChart"));

var option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['新药审批', '仿制药', '进口药']
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
        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '新药审批',
            type: 'line',
            stack: '总量',
            color:'#40A4C3',
            data: [148, 344, 606, 4011, 734, 312, 577]
        },
        {
            name: '仿制药',
            type: 'line',
            stack: '总量',
            color:'#FFCE00',
            data: [92, 81, 404, 2949, 251, 58, 107]
        },
        {
            name: '进口药',
            type: 'line',
            stack: '总量',
            color:'#FE0000',
            data: [251, 216, 348, 513, 316, 154, 494]
        },

    ]
};


myChart.setOption(option);


window.onresize=function () {
    myChart.resize();
    myChart.resize();
};

