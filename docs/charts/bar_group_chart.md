# Bar Group Chart

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

### labelOffset

## X axis props (optional)

### xDomain

reference [react-d3-core](https://github.com/react-d3/react-d3-core) for more detail

### xScale

- type: boolean
- default: `true`

### xOrient

### xTickOrient

### xLabel

### xRangeRoundBands

## Y axis props (optional)

### y

- type: function

- default: `y: (d) => {return +d;}`


### yOrient

### yRange

### yDomain

reference [react-d3-core](https://github.com/react-d3/react-d3-core) for more details.

### yScale

- type: boolean
- default: `true`

### yTickOrient

### yTicks

### yLabel

### yLabelPosition

### yTickFormat

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


## Example

```js
"use strict";

var React = require('react');
var Chart = require('react-d3-core').Chart;
var BarGroupChart = require('react-d3-basic').BarGroupChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/age.csv')

  var ageNames = d3.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

  generalChartData.forEach(function(d) {
    d.ages = ageNames.map(function(name) { return {name: name, value: +d[name]}; });
  });

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Bar Group Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    legendPosition = 'right',
    labelOffset = 30,

    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over'
      },

    ],
    x = function(d) {
      return d.State;
    },
    xOrient = 'bottom',
    xTickOrient = 'bottom',
    xDomain = generalChartData.map(function(d) { return d.State; }),
    xRangeRoundBands = {interval: [0, width - margins.left - margins.right], padding: .1},
    xScale = 'ordinal',
    xAxisClassName = 'x-axis',
    xLabel = "Age",
    xLabelPosition = 'bottom',
    y = function(d) {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'right',
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = [0, d3.max(generalChartData, function(d) { return d3.max(d.ages, (d) => { return d.value; }); })],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Population",
    yTickFormat = d3.format(".2s"),
    yLabelPosition = 'left'


  React.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      >
      <BarGroupChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        id= {id}
        margins= {margins}
        svgClassName= {svgClassName}
        labelOffset = {labelOffset}
        titleClassName= {titleClassName}
        yAxisClassName= {yAxisClassName}
        xAxisClassName= {xAxisClassName}
        legendClassName= {legendClassName}
        legendPosition= {legendPosition}
        categoricalColors= {d3.scale.category10()}
        chartSeries = {chartSeries}
        showLegend= {showLegend}
        showXAxis= {showXAxis}
        showYAxis= {showYAxis}
        x= {x}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xLabel = {xLabel}
        xLabelPosition = {xLabelPosition}
        y= {y}
        yOrient= {yOrient}
        yRange= {yRange}
        yDomain= {yDomain}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
        yTickFormat= {yTickFormat}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
    </Chart>
  , document.getElementById('data_bar_group')
  )
})()
```
