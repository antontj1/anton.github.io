Highcharts.getJSON('https://raw.githubusercontent.com/antontj1/antontj1.github.io/master/assets/maps/telescopes.json?callback=?', function (data) {

  // Prevent logarithmic errors in color calulcation
  data.forEach(function (p) {
    p.value = (p.value < 1 ? 0 : p.value);
  });

  // Initiate the chart
  Highcharts.mapChart('container', {

    chart: {
      map: 'custom/world'
    },

    title: {
      text: 'Ground-based telescopes around the World'
    },

    legend: {
      title: {
        text: 'Number of telescopes',
        style: {
          color: ( // theme
            Highcharts.defaultOptions &&
            Highcharts.defaultOptions.legend &&
            Highcharts.defaultOptions.legend.title &&
            Highcharts.defaultOptions.legend.title.style &&
            Highcharts.defaultOptions.legend.title.style.color
          ) || 'black'
        }
      }
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },

    tooltip: {
      backgroundColor: 'none',
      borderWidth: 0,
      shadow: false,
      useHTML: true,
      padding: 0,
      pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
        '</span></span> {point.name}<br>' +
        '<span style="font-size:20px">{point.value}</span>',
      positioner: function () {
        return { x: 0, y: 250 };
      }
    },

    colorAxis: {
      min: 1,
      max: 1000,
      type: 'logarithmic'
    },

    series: [{
      data: data,
      joinBy: ['iso-a3', 'code3'],
      name: 'Details',
      states: {
        hover: {
          color: '#a4edba'
        }
      }
    }]
  });
});
