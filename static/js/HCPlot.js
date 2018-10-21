
Highcharts.chart('HCcontainer', {

    chart: {
        type: 'spline',
        inverted: false
    },
    title: {
        text: 'SEO Experiments Results'
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        title: {
            text: 'Traffic (Thousands)'
        }
    },
    xAxis: {
        inverted:false,
        title: {
            text: 'Days into experiment'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            //pointStart: 2010
        }
    },

    series: [{
        name: 'enabled',
        data:  [[-30, 20], [-25, 30], [-20, 40], [-15, 46.5], [-10, 50.1],
        [-5, 55], [0, 60.7], [10, 70.7], [20,75.5]]
    }, {
        name: 'controlled',
        data: [[-30, 12], [-25, 22], [-20, 32], [-15, 44.5], [-10, 55.1],
        [-5, 45], [0, 33.7], [10, 20.7], [20,15.5]]
    }, {
        name: 'control average before',
        data: [[-30, 32], [-25, 40], [-20, 55], [-15, 66.5], [-10, 70.1],
        [-5, 22], [0, 30.7], [10, 10.7], [20,5.5]]
    }, {
        name: 'enabled average before',
        data: [[-30, 70], [-25, 60], [-20, 50], [-15, 46.5], [-10, 30.1],
        [-5, 25], [0, 50.7], [10, 60.7], [20,75.5]]
    }, {
        name: 'control average after',
        data: [[-30, 10], [-25, 30], [-20, 40], [-15, 56.5], [-10, 60.1],
        [-5, 75], [0, 50.7], [10, 40.7], [20,35.5]]
    },
    {
        name: 'enabled average after',
        data: [[-30, 50], [-25, 40], [-20, 50], [-15, 36.5], [-10, 50.1],
        [-5, 55], [0, 30.7], [10, 20.7], [20,45.5]]
    }
],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});