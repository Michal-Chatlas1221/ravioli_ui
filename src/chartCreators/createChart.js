var Highcharts = require('highcharts');

const mapDataToLineChart = data => ({
    categories: Object.keys(data),
    values: (Object.keys(data).map(e => data[e]))
});

const mapDataToPieChart = data =>
    Object.keys(data).map(e => ({
        name: e,
        y: data[e]
    }));

const mapDataToSemiCircle = data =>
    Object.keys(data).map(e => [e, data[e]]);


const lineChart = (data) => ({
    title: {
        text: 'Colors',
            x: -20 //center
    },
    subtitle: {
        text: 'Dupa',
            x: -20
    },
    xAxis: {
        categories: mapDataToLineChart(data).categories
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: 'unit'
    },
    legend: {
        layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
    },
    series: [{
        name: 'Colors',
        data: mapDataToLineChart(data).values
    }]
});

const pieChart = (data) => ({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares January, 2015 to May, 2015'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Colors',
        colorByPoint: true,
        data: mapDataToPieChart(data)
    }]
});

const semiCircleChart = (data) => ({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Browser<br>shares<br>2015',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Colors',
        innerSize: '50%',
        data: mapDataToSemiCircle(data)
    }]
});

const columnChart = data => ({
    chart: {
        type: 'column',
        margin: [60, 10, 40, 40]
    },
    title: {
        text: 'Right-Skewed, Multi-Modal Distribution',
        x: 25
    },
    subtitle: {
        text: 'Weights of Chicks on Various Diets',
        x: 25
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    tooltip: {},
    plotOptions: {
        series: [
            {
                name: 'dupa',
                data: [['dupa', 0], ['dupa1', 1] ,['dupa2', 2], ['dupa3', 3], ['dupa4', 4]]
            }
        ]
    },
    xAxis: {
        title: {
            text: 'Weight'
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        min: 0
    }
});


export default  {
    line: lineChart,
    pie: pieChart,
    semi_circle: semiCircleChart,
    column: columnChart
};

