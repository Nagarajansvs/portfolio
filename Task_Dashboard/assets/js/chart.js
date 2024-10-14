
// Chart 1

am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX: true,
  paddingLeft:0,
  paddingRight:1
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, { 
  minGridDistance: 30, 
  minorGridEnabled: true
});

xRenderer.labels.template.setAll({
  rotation: -90,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});

xRenderer.grid.template.setAll({
  location: 1
})

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "country",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

var yRenderer = am5xy.AxisRendererY.new(root, {
  strokeOpacity: 0.1
})

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: yRenderer
}));

// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  sequencedInterpolation: true,
  categoryXField: "country",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));

series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
series.columns.template.adapters.add("fill", function (fill, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

series.columns.template.adapters.add("stroke", function (stroke, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});


// Set data
var data = [{
  country: "USA",
  value: 2025
}, {
  country: "China",
  value: 1882
}, {
  country: "Japan",
  value: 1809
}, {
  country: "Germany",
  value: 1322
}, {
  country: "UK",
  value: 1122
}, {
  country: "France",
  value: 1114
}, {
  country: "India",
  value: 984
}, {
  country: "Spain",
  value: 711
}, {
  country: "Netherlands",
  value: 665
}, {
  country: "South Korea",
  value: 443
}, {
  country: "Canada",
  value: 441
}];

xAxis.data.setAll(data);
series.data.setAll(data);


series.appear(1000);
chart.appear(1000, 100);

});

// Chart 3
  
// Chart 5

am5.ready(function() {

  // Data
  var data = [
    {
      date: "2013-01-16",
      market0: 71,
      market1: 75,
      sales0: 5,
      sales1: 9
    },
    {
      date: "2013-01-17",
      market0: 74,
      market1: 78,
      sales0: 4,
      sales1: 6
    },
    {
      date: "2013-01-18",
      market0: 78,
      market1: 88,
      sales0: 5,
      sales1: 2
    },
    {
      date: "2013-01-19",
      market0: 85,
      market1: 89,
      sales0: 8,
      sales1: 9
    },
    {
      date: "2013-01-20",
      market0: 82,
      market1: 89,
      sales0: 9,
      sales1: 6
    },
    {
      date: "2013-01-21",
      market0: 83,
      market1: 85,
      sales0: 3,
      sales1: 5
    },
    {
      date: "2013-01-22",
      market0: 88,
      market1: 92,
      sales0: 5,
      sales1: 7
    },
    {
      date: "2013-01-23",
      market0: 85,
      market1: 90,
      sales0: 7,
      sales1: 6
    },
    {
      date: "2013-01-24",
      market0: 85,
      market1: 91,
      sales0: 9,
      sales1: 5
    },
    {
      date: "2013-01-25",
      market0: 80,
      market1: 84,
      sales0: 5,
      sales1: 8
    },
    {
      date: "2013-01-26",
      market0: 87,
      market1: 92,
      sales0: 4,
      sales1: 8
    },
    {
      date: "2013-01-27",
      market0: 84,
      market1: 87,
      sales0: 3,
      sales1: 4
    },
    {
      date: "2013-01-28",
      market0: 83,
      market1: 88,
      sales0: 5,
      sales1: 7
    },
    {
      date: "2013-01-29",
      market0: 84,
      market1: 87,
      sales0: 5,
      sales1: 8
    },
    {
      date: "2013-01-30",
      market0: 81,
      market1: 85,
      sales0: 4,
      sales1: 7
    }
  ];
  
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv5");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  root.dateFormatter.setAll({
    dateFormat: "yyyy-MM-dd",
    dateFields: ["valueX"]
  });
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    })
  );
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "zoomX"
  }));
  cursor.lineY.set("visible", false);
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {
        minorGridEnabled: true
      }),
      tooltip: am5.Tooltip.new(root, {}),
      tooltipDateFormat: "yyyy-MM-dd"
    })
  );
  
  var yAxis0 = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        pan: "zoom"
      })
    })
  );
  
  var yRenderer1 = am5xy.AxisRendererY.new(root, {
    opposite: true
  });
  yRenderer1.grid.template.set("forceHidden", true);
  
  var yAxis1 = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: yRenderer1,
      syncWithAxis: yAxis0
    })
  );
  
  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var columnSeries1 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Actual sales",
      xAxis: xAxis,
      yAxis: yAxis0,
      valueYField: "sales1",
      valueXField: "date",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  columnSeries1.columns.template.setAll({
    width: am5.percent(60),
    fillOpacity: 0.5,
    strokeOpacity: 0
  });
  
  
  columnSeries1.data.processor = am5.DataProcessor.new(root, {
    dateFields: ["date"],
    dateFormat: "yyyy-MM-dd"
  });
  
  var columnSeries0 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Target sales",
      xAxis: xAxis,
      yAxis: yAxis0,
      valueYField: "sales0",
      valueXField: "date",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  columnSeries0.columns.template.set("width", am5.percent(40));
  
  var series0 = chart.series.push(
    am5xy.SmoothedXLineSeries.new(root, {
      name: "Market days",
      xAxis: xAxis,
      yAxis: yAxis1,
      valueYField: "market0",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  series0.strokes.template.setAll({
    strokeWidth: 2
  });
  
  // Add bullet
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
  series0.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        stroke: series0.get("fill"),
        strokeWidth: 2,
        fill: root.interfaceColors.get("background"),
        radius: 5
      })
    });
  });
  
  var series1 = chart.series.push(
    am5xy.SmoothedXLineSeries.new(root, {
      name: "Market days all",
      xAxis: xAxis,
      yAxis: yAxis1,
      valueYField: "market1",
      valueXField: "date"
    })
  );
  
  series1.strokes.template.setAll({
    strokeWidth: 2,
    strokeDasharray: [2, 2]
  });
  
  var tooltip1 = series1.set("tooltip", am5.Tooltip.new(root, {
    pointerOrientation: "horizontal"
  }));
  tooltip1.label.set("text", "{name}: {valueY}");
  
  // Add bullet
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
  series1.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        stroke: series1.get("fill"),
        strokeWidth: 2,
        fill: root.interfaceColors.get("background"),
        radius: 5
      })
    });
  });
  
  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  var scrollbar = chart.set("scrollbarX", am5xy.XYChartScrollbar.new(root, {
    orientation: "horizontal",
    height: 60
  }));
  
  var sbDateAxis = scrollbar.chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {})
    })
  );
  
  var sbValueAxis0 = scrollbar.chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    })
  );
  
  var sbValueAxis1 = scrollbar.chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    })
  );
  
  var sbSeries0 = scrollbar.chart.series.push(
    am5xy.ColumnSeries.new(root, {
      valueYField: "sales0",
      valueXField: "date",
      xAxis: sbDateAxis,
      yAxis: sbValueAxis0
    })
  );
  
  sbSeries0.columns.template.setAll({ fillOpacity: 0.5, strokeOpacity: 0 });
  
  var sbSeries1 = scrollbar.chart.series.push(
    am5xy.LineSeries.new(root, {
      valueYField: "market0",
      valueXField: "date",
      xAxis: sbDateAxis,
      yAxis: sbValueAxis1
    })
  );
  
  var legend = chart.children.push(
    am5.Legend.new(root, {
      x: am5.p50,
      centerX: am5.p50
    })
  );
  legend.data.setAll(chart.series.values);
  
  columnSeries1.data.setAll(data);
  columnSeries0.data.setAll(data);
  
  series0.data.setAll(data);
  series1.data.setAll(data);
  
  sbSeries0.data.setAll(data);
  sbSeries1.data.setAll(data);
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series0.appear(1000);
  series1.appear(1000);
  chart.appear(1000, 100);
  
  });

// Chart 6

am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv6");
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  // start and end angle must be set both for chart and series
  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    layout: root.verticalLayout,
    innerRadius: am5.percent(40)
  }));
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  // start and end angle must be set both for chart and series
  var series0 = chart.series.push(am5percent.PieSeries.new(root, {
    valueField: "bottles",
    categoryField: "country",
    alignLabels: false
  }));
  
  var bgColor = root.interfaceColors.get("background");
  
  series0.ticks.template.setAll({ forceHidden: true });
  series0.labels.template.setAll({ forceHidden: true });
  series0.slices.template.setAll({
    stroke: bgColor,
    strokeWidth: 2,
    tooltipText:
      "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} bottles)"
  });
  series0.slices.template.states.create("hover", { scale: 0.95 });
  
  var series1 = chart.series.push(am5percent.PieSeries.new(root, {
    valueField: "litres",
    categoryField: "country",
    alignLabels: true
  }));
  
  series1.slices.template.setAll({
    stroke: bgColor,
    strokeWidth: 2,
    tooltipText:
      "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} litres)"
  });
  
  var data = [{
    country: "Lithuania",
    litres: 501.9,
    bottles: 1500
  }, {
    country: "Czech Republic",
    litres: 301.9,
    bottles: 990
  }, {
    country: "Ireland",
    litres: 201.1,
    bottles: 785
  }, {
    country: "Germany",
    litres: 165.8,
    bottles: 255
  }, {
    country: "Australia",
    litres: 139.9,
    bottles: 452
  }, {
    country: "Austria",
    litres: 128.3,
    bottles: 332
  }, {
    country: "UK",
    litres: 99,
    bottles: 150
  }, {
    country: "Belgium",
    litres: 60,
    bottles: 178
  }, {
    country: "The Netherlands",
    litres: 50,
    bottles: 50
  }];
  
  // Set data
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
  series0.data.setAll(data);
  series1.data.setAll(data);
  
  // Play initial series animation
  // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
  series0.appear(1000, 100);
  series1.appear(1000, 100);
  
  }); 



