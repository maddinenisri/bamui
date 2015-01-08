(function() {
  'use strict';

  angular
    .module('bamuiApp.dashboard')
    .directive('lineChart', pieChart);

  function pieChart() {
  	return {
  	  restrict: 'E',
  	  transclude: true,
  	  replace: true,
  	  scope: {
  	  	drilldownData : '=',
        label: '='
  	  },
  	  controller: 'DashboardController',
  	  controllerAs: 'dashboardCtl',
  	  template: '<div id="{{::lineChartId}}" style="margin: 0 auto">not working</div>',
  	  link: function(scope, element, attrs) {
        scope.lineChartId = 'lineChart'+scope.label;
        console.log(scope.lineChartId);
        element.attr('id', scope.lineChartId);
        var chart = drawChart(scope, element);
        scope.$watch('drilldownData', function(newValue) {
          if(!newValue) {
          	return;
          }
          //chart.series[0].setData(newValue, true);	
        });
  	  } 
  	};
  }

  function drawChart(scope, element) {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'lineChart'+scope.label,
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: scope.label,
            data: scope.drilldownData,
            colorByPoint: true,
            point: {
              events: {
                click: function(event) {
                  console.log(this.index);
                }
              }
            }
        }]
    });
    return chart;
  }  
})();