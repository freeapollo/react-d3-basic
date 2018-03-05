# Pie Chart

## Required Props

!!import "../shared/charts/required.md"

## Appearance Props (optional)

!!import "../shared/charts/appearance.md"

### name

### outerRadius

### innerRadius

### pieSort

### legendPosition


## Show Props (optional)

!!import "../shared/charts/show.md"

## Class Props (optional)

!!import "../shared/charts/class.md"


## Example

```js
"use strict";

var React = require('react');
var Chart = require('react-d3-core').Chart;
var PieChart = require('react-d3-basic').PieChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/age_pie.csv')

  var width = 960,
    height = 500,
    radius = Math.min(width, height - 120) / 2,
    margins = {top: 50, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    title = "Pie Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    showLegend = true,
    value = function(d) {
      return +d.population;
    },
    name = function(d) {
      return d.age;
    },
    chartSeries = [
      {
        "field": "<5",
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ],
    legendPosition = 'right',
    outerRadius = radius - 10,
    innerRadius = 0;


  React.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      >
      <PieChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        radius= {radius}
        id= {id}
        margins= {margins}
        chartSeries= {chartSeries}
        svgClassName= {svgClassName}
        titleClassName= {titleClassName}
        legendClassName= {legendClassName}
        legendPosition= {legendPosition}
        categoricalColors= {d3.scale.category10()}
        showLegend= {showLegend}
        value = {value}
        name = {name}
        outerRadius= {outerRadius}
        innerRadius= {innerRadius}
        pieSort = {d3.descending}
      />
    </Chart>
  , document.getElementById('data_pie')
  )
})()

```
