
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
                    ['data1', 34,197,181,352,147],
                    ['data2', 10,188,227,401,144],
                    ['data3',  0,142,164,233, 61],
                    ['data4',  3,143,150,252, 57],
                    ['data5', 20, 81,214,272, 35],
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
                    ['ADS', 1000,383,303,95,36,22,18,13,11,7,6,5,5,2,1,1,1,0,0,0,0,0,0,0,0],
                    ['GS' , 1000,422,333,101,35,24,20,12,9,8,3,2,2,2,1,1,1,1,0,0,0,0,0,0,0],
                    ['SC' , 1000,275,203,57,21,15,11, 9,4,3,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
                    ['RID', 1000,279,203,54,24,14, 9, 8,6,4,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0],
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
                    {value: 8, text: 'ADS/GS h-Index = 8'},
                    {value: 7},
                    {value: 6},
                ]
                },
                y: {
                lines: [
                    {value: 8, text: 'min. citation = 8'},
                    {value: 7},
                    {value: 6},
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
                    ['data1', 913],
                    ['data2', 976],
                    ['data3', 602],
                    ['data4', 607],
                    ['data5', 624],
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
