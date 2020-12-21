var myChart=echarts.init(document.getElementById("myAarChart"));
var option = {
    "color": ["#00EAFF", "#00EAFF", "#00EAFF", "#00EAFF", "#fedd76"],
    "title": {
        "text": "药物功效与报酬"
    },
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "right": "30%",
        "containLabel": true
    },
    "yAxis": [{
        "type": "category",
        "axisLine": {
            "show": true
        },
        "splitArea": {
            "color": "#111",
            "lineStyle": {
                "color": "#111"
            }
        },
        "axisLabel": {
            "color": "#111"
        },
        "splitLine": {
            "show": false
        },
        "boundaryGap": false,
        "data": [ '妇科', '内分泌科', '风湿免疫科', '肿瘤科', '呼吸科', '皮肤科', '其他', '血液内科',
            '骨科', '血管外科', '抗病毒', '男科', '神经科', '烧伤科', '心脏科', '麻醉剂', '消炎药', '止痛药',
            '眼科', '消化科', '传染科', '泌尿外科', '感染科']
    }],
    "xAxis": [{
        "type": "value",
        "min": 0,
        "splitNumber": 4,
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#fff"
            }
        },
        "axisLine": {
            "show": true,
        },
        "axisLabel": {
            "show": true,
            "margin": 20,
            "textStyle": {
                "color": "#111"
            }
        },
        "axisTick": {
            "show": true,
        }
    }],
    "series": [{
        "name": "最低价",
        "type": "line",
        "showAllSymbol": true,
        "symbol": "circle",
        "symbolSize": 10,
        "lineStyle": {
            "opacity": 0
        },
        "itemStyle": {
            "color": "#9dc3f0",
            "borderColor": "#fff",
            "borderWidth": 1,
            "shadowColor": "rgba(0, 0, 0, .3)"
        },
        "tooltip": {
            "show": true
        },
        "data": [3000, 2600, 3000, 4000, 1200, 3000, 5000,4000,2800,550,2300,1000,480,19350,2400,5000,3000,600,5500,2950,
            2800,3000,5000]
    }, {
        "name": "最高价",
        "type": "line",
        "showAllSymbol": true,
        "symbol": "circle",
        "symbolSize": 10,
        "lineStyle": {
            "opacity": 0
        },
        "itemStyle": {
            "color": "#0e578c",
            "borderColor": "#fff",
            "borderWidth": 1,
            "shadowColor": "rgba(0, 0, 0, .3)"
        },
        "tooltip": {
            "show": true
        },
        "data": [43400, 43400, 38000, 34600, 30000, 28500, 25100,22000,20560,20100,20000,20000,20000,19350,19000,
            18000,18000,18000,16800,15375,12000,9500,7000]
    }, {
        "name": "平均值",
        "type": "line",
        "showAllSymbol": true,
        "symbol": "circle",
        "symbolSize": 10,
        "lineStyle": {
            "opacity": 0
        },
        "itemStyle": {
            "color": "#fedd72",
            "borderColor": "#fff",
            "borderWidth": 1,
            "shadowColor": "rgba(0, 0, 0, .3)"
        },
        "tooltip": {
            "show": true
        },
        "data": [11353, 7688, 11609, 11148, 8811, 9346, 9935,9649,11636,7829,8558,7989,7209,
            19350,7972,9725,7282,6954,13802,7057,5204,7000,6000]

    }, {
        "name": "",
        "type": "bar",
        "stack": "A",
        "itemStyle": {
            "barBorderColor": "rgba(0,0,0,0)",
            "color": "rgba(0,0,0,0)"
        },
        "barWidth": "1%",
        "emphasis": {
            "itemStyle": {
                "barBorderColor": "rgba(0,0,0,0)",
                "color": "rgba(0,0,0,0)"
            }
        },
        "data": [3000, 2600, 3000, 4000, 1200, 3000, 5000,4000,2800,550,2300,1000,480,19350,2400,5000,3000,600,5500,2950,
            2800,3000,5000],
        "tooltip": {
            "show": false
        }
    }, {
        "name": "",
        "type": "bar",
        "stack": "A",
        "itemStyle": {
            "barBorderColor": "#3f84c7",
            "color": "#3f84c7"
        },
        "barWidth": "1%",
        "emphasis": {
            "itemStyle": {
                "barBorderColor": "rgba(0,0,0,0)",
                "color": "rgba(0,0,0,0)"
            }
        },
        "data": [40400, 40800, 35000, 30600, 28800, 25500, 20100, 18000, 17760, 19550, 17700, 19000, 19952, 0, 16600, 13000, 15000, 17400, 11300, 12425, 9200, 6500, 2000],
        "tooltip": {
            "show": false
        }
    }]
}

myChart.setOption(option);


window.onresize=function () {
    myChart.resize();
    myChart.resize();
};