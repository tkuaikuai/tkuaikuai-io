var myChart=echarts.init(document.getElementById("myCarChart"));

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['最小值', '最大值', '平均值']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['烧伤科', '眼科', '其他', '麻醉科', '感染科', '肿瘤科', '血液内科', '妇科', '风湿免疫科',
                '皮肤科', '止痛科', '泌尿外科', '消化科', '骨科', '传染科', '内分泌科', '心脏科', '抗病毒', '呼吸科',
                '男科', '消炎科', '血管外科', '神经科']
        }
    ],
    series: [
        {
            name: '最小值',
            type: 'bar',
            label: {
                show: true,
                position: 'inside'
            },
            data: [3000, 2600, 3000, 4000, 1200, 3000, 5000,4000,2800,550,2300,1000,480,19350,2400,5000,3000,600,5500,2950,
                2800,3000,5000]
        },
        {
            name: '最大值',
            type: 'bar',
            stack: '总量',
            label: {
                show: true
            },
            data: [43400, 43400, 38000, 34600, 30000, 28500, 25100,22000,20560,20100,20000,20000,20000,19350,19000,
                18000,18000,18000,16800,15375,12000,9500,7000]
        },
        {
            name: '平均值',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [11353, 7688, 11609, 11148, 8811, 9346, 9935,9649,11636,7829,8558,7989,7209,
                19350,7972,9725,7282,6954,13802,7057,5204,7000,6000]
        }
    ]
};

myChart.setOption(option);


window.onresize=function () {
    myChart.resize();
    myChart.resize();
};