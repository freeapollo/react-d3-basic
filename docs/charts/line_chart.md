# Line Chart


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


## X axis props (optional)

### xDomain

reference [react-d3-core](https://github.com/react-d3/react-d3-core) for more detail

### xLabel

## Y axis props (optional)

### y

- type: function

- default: `y: (d) => {return +d;}`

### yDomain

reference [react-d3-core](https://github.com/react-d3/react-d3-core) for more details.

### yLabel

### yLabelPosition

## Example

```js
"use strict";

var React = require('react');
var Chart = require('react-d3-core').Chart;
var LineChart = require('react-d3-basic').LineChart;

(function() {

  var generalChartData = require('./data/user.json');

  var chartSeries = [
      {
        field: 'age',
        name: 'Age',
        color: '#ff7f0e'
      }
    ],
    x = function(d) {
      return d.index;
    },
    xDomain = d3.extent(generalChartData, x),
    xLabel = "Index",
    y = function(d) {
      return d;
    },
    yDomain = d3.extent(generalChartData, function(d) {return d.age;}),
    yLabel = "Age",
    yLabelPosition = 'right'

  React.render(
    <Chart>
      <LineChart
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
        xDomain= {xDomain}
        xLabel = {xLabel}
        y= {y}
        yDomain= {yDomain}
        yLabel = {yLabel}
        yLabelPosition = {yLabelPosition}
      />
    </Chart>
  , document.getElementById('data_line')
  )
})()
```
