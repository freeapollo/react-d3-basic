# Pie Chart

## Required Props

### data

- type: `array of object`

each object has same key

example:

    [{
      "date": "04/23/12",
      "Group1": "-20",
      "Group2": "12",
      "Group3": "46"
    }, {
      "date": "04/24/12",
      "Group1": "32",
      "Group2": "-20",
      "Group3": "24"
    }]



#### x

- type: `function`

parsed data function

#### chartSeries

- type: `array of object`
- field: `required`, define the data field
- name: `optional`, the show name of this data. default is the same with field.
- color: `optional`, show categorical color

example:

    [{
      field: "Group1",
      name: "Group 1",
      color: "red"
    },
    {
      field: "Group2",
      name: "Group 2",
      color: "black"
    }]

## Appearance Props (optional)

### title

- type: string

the title of the graph

### width

- type: int
- default: `960`

the width of the graph

### height

- type: int
- default: `500`

the height of the graph


### margins

- type: object
- default: `{top: 80, right: 100, bottom: 80, left: 100}`

margins of the graph

### id

- type: stirng

- default : `null`

### name

### outerRadius

### innerRadius

### pieSort

### legendPosition


## Show Props (optional)

### interpolate

please reference d3 interpolate

### showXAxis

- type: boolean
- default: `true`

### showYAxis

- type: boolean
- default: `true`

### showXGrid

- type: boolean
- default: `true`

### showYGrid

- type: boolean
- default: `true`

### showLegend

- type: boolean
- default: `true`

### categoricalColors

- default:  `d3.scale.category10()`

you must send one of the d3 categorical colors. [reference](https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors)

## Class Props (optional)

### svgClassName

- type: string
- default: `null`

### titleClassName

- type: string
- default: `null`

### yAxisClassName

- type: string
- default: `null`

### xAxisClassName

- type: string
- default: `null`

### legendClassName

- type: string
- default: `null`


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
