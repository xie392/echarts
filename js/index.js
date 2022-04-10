$(function () {
    //  com = 189;
    var ros = [4, 3, 2, 5, 6, 1, 4, 3, 2, 5, 6, 1, 5, 5, 4, 5];
    // 指南针
    var compass = {
        tooltip: {
            formatter: '{c}'
        },
        // 第一个为指南针背景图，第二个为指南针十字标签，第三个为指南针，接入数据在第三个
        series: [{
            type: 'pie',
            startAngle: 90,
            radius: "90%",
            z: -10,
            labelLine: {
                show: false,
            },
            emphasis: {
                scale: false,
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: "#3450a4",
                },
            }]
        }, {
            startAngle: 90,
            endAngle: -270,
            type: 'gauge',
            radius: '70%',
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
                length: '100%',
                lineStyle: {
                    color: '#fff',
                    width: 2,
                }
            },
            pointer: {
                show: false,
            },
            splitNumber: 4,
        }, {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 360,
            z: 99,
            splitNumber: 4,
            radius: '90%',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: function (value) {
                    switch (value) {
                        case 0:
                            return "S";
                        case 90:
                            return "W";
                        case 180:
                            return "N";
                        case 270:
                            return "E";
                        default:
                            break;
                    }
                },
                color: '#fff',
                fontSize: 14,
                distance: 3,
            },
            splitLine: {
                show: false
            },
            pointer: {
                show: true,
                icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAiCAMAAABcDciTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABFFBMVEX/AAD/AAH/AQL/AQH/AAL/////AAD/AAH/AQL/AAD/AAD/AAD/AAD/AAH/AAD/AQL/AQL/AAD/AAL/AAD/AAD/AAH/AAD/AAD/AAD/AAD/AQH/AAD/AAD/AAD/AQL/AAD/AAD/AAD/AAD/AAL/AAD/AAD/AAD/AAD/AAD/AAH/AAL/AAD/AAL/Cgr/Dg7/Cgr/Dg//DQ//DQ7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAD/AAH/AQL/AQH/AAL///8EndKmAAAAVnRSTlMAAAAAAAAXJ2R4s8gM9v4aUGmguQPr+g8+W4yq3PMHK0x6m8jpAho9Zowatdwx9PX09PQxGrXcZoz+PcjpAnqbK0zzB6o+WwPr+g+guVBpDPazZHgXJ2NJFc8AAAABYktHRAX4b+nHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QcVBiY1zlpgmQAAAOZJREFUGNNNzOdawkAQheHROIoNe+8NKy5KRBB771gPCXv/92FmdhM8P5Lv3WcTIll3T4eMOmW5Xmqvr1/PtAcG80MKeQwDI9mtUWAs7fEJYHLKY7qJJmakgiCYTRpz/m/zQISFRcWSdBwt6ycrEGFVsQa0YmB9I+lCHm6bRF1bcgdxjG2inV09biHaK1Bx35jSQcmYQ1Okss1WpvAo7UpIfJyiysRhzeMkAdddn54Jzh0uWHDpcKXgivT1jUNVcMsOd4J7j4dHa5+ePfjF2ldO8Wbte4bGRy3MwJ91buPr+x9+fvX1BzPHP7+pF5ngAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA3LTIxVDA2OjM4OjI2KzAwOjAwIPtDQAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNy0yMVQwNjozODo1MyswMDowMAlb3UIAAAAASUVORK5CYII=",
                length: "135%",
                width: "10%",
                offsetCenter: [0, "70%"],
            },
            detail: {
                show: false
            },
            data: [{
                value:189
            }]
        }],
    };
    var myChart1 = _Chart('myChart1', compass);

    // 玫瑰图
    var rose = {
        tooltip: {},
        radar: {
            indicator: [{
                    name: 'N',
                    max: 6
                },
                {
                    name: 'NNW',
                    max: 6
                },
                {
                    name: 'NW',
                    max: 6
                },
                {
                    name: 'WNW',
                    max: 6
                },
                {
                    name: 'W',
                    max: 6
                },
                {
                    name: 'WSW',
                    max: 6
                },
                {
                    name: 'SW',
                    max: 6
                },
                {
                    name: 'SSW',
                    max: 6
                },
                {
                    name: 'S',
                    max: 6
                },
                {
                    name: 'SSE',
                    max: 6
                },
                {
                    name: 'SE',
                    max: 6
                },
                {
                    name: 'ESE',
                    max: 6
                },
                {
                    name: 'E',
                    max: 6
                },
                {
                    name: 'ENE',
                    max: 6
                },
                {
                    name: 'NE',
                    max: 6
                },
                {
                    name: 'NNE',
                    max: 6
                }
            ]
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.4)'
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(255,255,255,1)'
            }
        },
        series: [{
            name: '风向图',
            type: 'radar',
            areaStyle: {
                color: 'rgba(176,204,53,.5)'
            },
            lineStyle: {
                color: 'rgba(176,204,53,1)'
            },
            emphasis: {
                disabled: true,
                focus: 'series'
            },
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
                color: "rgba(176,204,53,1)",
                fontSize: 28,
            },
            data: [{
                value: ros
            }],
        }]
    }
    var myChart2 = _Chart('myChart2', rose);


    // 自适应
    window.onresize = () => {
        myChart1.resize();
        myChart2.resize();
    }

    setInterval(()=>{

        compass.series[2].data[0].value = _random(0,360);
        _Chart('myChart1', compass);


    },1000)

})







/**
 * Echarts绘画 
 * @param {String} id       元素id值
 * @param {Object} option   配置项
 */
function _Chart(id, option, flag) {
    var myChart = echarts.init(document.getElementById(id));

    myChart.setOption(option);

    return myChart;
}

/**
 * 获取某范围的随机数
 * @param {Number} lowerValue 开始范围
 * @param {Number} upperValue 结束范围
 * @returns 
 */
 function _random(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  }
  