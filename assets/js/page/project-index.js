
$(function() {
    "use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.knob').knob({
        draw: function () {           
        }
    });

    // Current Ticket Status
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-combination', // id of chart wrapper
            data: {
                columns: [
                    ['data1', 34,197,181,315,272],
                    ['data2', 10,188,226,362,286],
                    ['data3',  0,142,168,235,114],
                    ['data4',  3,143,150,252,154],
                    ['data5', 21, 81,217,390,206],
                ],
                type: 'bar', // default type of chart
                colors: {
                    'data1': '#1d37c9',
                    'data2': '#00a1e6',
                    'data3': '#e6a400',
                    'data4': '#7595ff',
                    'data5': '#18dcab'
                },
                names: {
                    // name of each serie
                    'data1': 'ADS',
                    'data2': 'GS',
                    'data3': 'SC',
                    'data4': 'RID',
                    'data5': 'RG'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['2017','2018','2019','2020', '2021']
                },
            },
            bar: {
                width: 10
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
            grid: {
                y: {
                lines: [
                    {value: 50},
                    {value: 100},
                    {value: 150},
                    {value: 200},
                    {value: 250},
                    {value: 300},
                    {value: 350},
                    {value: 400},
                ]
                }
            },
        });
    });

});

$(function() {
    "use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.knob').knob({
        draw: function () {           
        }
    });

    // Current Ticket Status
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-combination2', // id of chart wrapper
            data: {
                columns: [
                    ['ADS', 1000,418,324,111,39,24,22,19,11,7,6,5,5,2,1,1,1,1,0,0,0,0,0,0,0],
                    ['GS' , 1000,460,356,125,38,26,22,13,9,9,8,4,2,2,1,1,1,1,0,0,0,0,0,0,0],
                    ['SC' , 1000,299,215,73,23,17,12, 9,6,3,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
                    ['RID', 1000,315,224,81,27,17,10, 9,7,6,3,2,1,1,1,0,0,0,0,0,0,0,0,0,0],
                ],
                type: 'line', // default type of chart
                colors: {
                    'ADS': '#1d37c9',
                    'GS': '#00a1e6',
                    'SC': '#e6a400',
                    'RID': '#7595ff',
                },
            },
            axis: {
                x: {
                    max: 18,
                    min: 0.5,
                },
                y: {
                    max: 30,
                    min: 2,
                },
            },
            grid: {
                x: {
                lines: [
                    {value: 9, text: 'GS h-index = 9'},
                ]
                },
                y: {
                lines: [
                    {value: 9},
                ]
                }
            },
        });
    });

});

$(function() {
    "use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.knob').knob({
        draw: function () {           
        }
    });

    // Current Ticket Status
    $(document).ready(function(){
        var chart = c3.generate({
            bindto: '#chart-combination3', // id of chart wrapper
            data: {
                columns: [
                    ['data2', 1077],
                    ['data1', 1001],
                    ['data5', 914],
                    ['data4', 704],
                    ['data3', 661],
                ],
                type: 'bar', // default type of chart
                colors: {
                    'data2': '#00a1e6',
                    'data1': '#1d37c9',
                    'data5': '#18dcab',
                    'data4': '#7595ff',
                    'data3': '#e6a400',
                },
                names: {
                    // name of each serie
                    'data2': 'GS',
                    'data1': 'ADS',
                    'data5': 'RG',
                    'data4': 'RID',
                    'data3': 'SC',    
                }

            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['']
                },
            },
            bar: {
                width: 40
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 0,
                top: 0
            },
            grid: {
                y: {
                lines: [
                    {value: 500},
                    {value: 1000},
                ]
                }
            },
        });
    });

});
