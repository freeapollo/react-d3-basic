# Bar Stack

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

### xTickPadding

### xInnerTickSize

### xOuterTickSize

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

### yTickOrient
### yTickPadding
### yInnerTickSize
### yOuterTickSize
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
var BarStackChart = require('react-d3-basic').BarStackChart;

(function() {
  var generalChartData = require('dsv?delimiter=,!./data/age.csv')

  var ageNames = d3.keys(generalChartData[0]).filter(function(key) { return key !== "State"; });

  generalChartData.forEach(function(d) {
    var y0 = 0;
    d.ages = ageNames.map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].y1;
  });

  var width = 960,
    height = 500,
    margins = {top: 50, right: 50, bottom: 50, left: 50},
    id = "test-chart",
    title = "Bar Stack Chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class",
    legendClassName = "test-legend",
    showLegend = true,
    showXAxis = true,
    showYAxis = true,
    showXGrid = true,
    showYGrid = true,
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
    xTickPadding = 3,
    xInnerTickSize = 6,
    xOuterTickSize = 6,
    y = function(d) {
      return +d;
    },
    yOrient = 'left',
    yTickOrient = 'left',
    yRange = [height - margins.top - margins.bottom, 0],
    yDomain = [0, d3.max(generalChartData, function(d) { return d.total; })],
    yScale = 'linear',
    yAxisClassName = 'y-axis',
    yLabel = "Population",
    yTickFormat = d3.format(".2s")
    yLabelPosition = 'left',
    yTickPadding = 4,
    yInnerTickSize = 6,
    yOuterTickSize = 6


  React.render(
    <Chart
      title={title}
      id={id}
      width={width}
      height={height}
      >
      <BarStackChart
        title= {title}
        data= {generalChartData}
        width= {width}
        height= {height}
        id= {id}
        margins= {margins}
        svgClassName= {svgClassName}
        titleClassName= {titleClassName}
        yAxisClassName= {yAxisClassName}
        xAxisClassName= {xAxisClassName}
        legendClassName= {legendClassName}
        categoricalColors= {d3.scale.category10()}
        chartSeries = {chartSeries}
        showLegend= {showLegend}
        showXAxis= {showXAxis}
        showYAxis= {showYAxis}
        x= {x}
        showXGrid= {showXGrid}
        xDomain= {xDomain}
        xRangeRoundBands= {xRangeRoundBands}
        xScale= {xScale}
        xOrient= {xOrient}
        xTickOrient= {xTickOrient}
        xTickPadding = {xTickPadding}
        xInnerTickSize = {xInnerTickSize}
        xOuterTickSize = {xOuterTickSize}
        xLabel = {xLabel}
        xLabelPosition = {xLabelPosition}
        y= {y}
        showYGrid= {showYGrid}
        yOrient= {yOrient}
        yRange= {yRange}
        yDomain= {yDomain}
        yScale= {yScale}
        yTickOrient= {yTickOrient}
        yTickPadding = {yTickPadding}
        yInnerTickSize = {yInnerTickSize}
        yOuterTickSize = {yOuterTickSize}
        yTickFormat= {yTickFormat}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
    </Chart>
  , document.getElementById('data_bar_stack')
  )
})()
```
