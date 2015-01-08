(function() {
  'use strict';

  angular
    .module('bamuiApp.dashboard')
    .directive('pieChart', pieChart);

  function pieChart() {
  	return {
  	  restrict: 'E',
  	  transclude: true,
  	  replace: true,
  	  scope: {
  	  	data : '=',
  	  	onClick: '&'
  	  },
  	  controller: 'DashboardController',
  	  controllerAs: 'dashboardCtl',
  	  template: '<div id="pieChart" style="margin: 0 auto">not working</div>',
  	  link: function(scope, element, attrs) {
        var chart = drawChart(scope, element);
        scope.$watch('data', function(newValue) {
          if(!newValue) {
          	return;
          }
          chart.series[0].setData(newValue, true);	
        });
  	  } 
  	};
  }

  function drawChart(scope, element) {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'pieChart',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Browser market shares at a specific website, 2010'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage}%</b>',
        percentageDecimals: 1
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        data: scope.items,
        point: {
          events: {
          	click: function(event) {
              console.log(this.name);
              var selectedPoint = this.name;
              scope.$apply(function(s){
                s.onClick({name: selectedPoint});
              });
          	}
          }	
        }
      }]
    });
    return chart;
  }  
})();