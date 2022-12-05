google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Gender', 'Male', 'Female'],
        ['18-24 years old', 10, 3],
        ['25-34 years old', 8, 7],
        ['35-44 years old', 5, 3],
        ['45-54 years old', 2, 1],
        ['55-64 years old', 1, 1],
        ['65-74 years old', 0, 1]
      ]);

      var options = {
        backgroundColor: 'black',
        width: 700,
        height: 400,
        legend: {textStyle: {color: 'white'}},
        title: 'Population of users using Toloka in different age groups',
        titleTextStyle: {color: 'white'},
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          
          textStyle: {color: 'white'},
          titleTextStyle: {color: 'white'},
          title: 'Total Population',
          minValue: 0,
        },
        vAxis: {
          title: 'Age Groups',
          titleTextStyle: {color: 'white'},
          textStyle: {color: 'white'},
        },
        series: {
          0: {color: '#168a00'},//01fff4
          1: {color: '#6bff4f'}//edff00
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }