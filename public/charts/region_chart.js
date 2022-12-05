google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['United States', 10],
      ['Kenya', 4],
      ['Morocco', 4],
      ['Russia', 3],
      ['Brazil', 3],
      ['India', 2],
      ['Dominican Republic', 2],
      ['Venezuela', 2],
      ['United Kingdom', 1],
      ['Nigeria', 1],
      ['Egypt', 1],
      ['Georgia', 1],
      ['Saudi Arabia', 1],
      ['Pakistan', 1],
      ['France', 1],
      ['Ghana', 1],
      ['Algeria', 1],
      ['Tanzania', 1],
      ['China', 1],
      ['Ukraine', 1],
      ['Myanmar', 1],
    ]);

    var options = {
        backgroundColor: 'black',
        colorAxis: {colors: ['#ddfcd7', '#23e000']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }