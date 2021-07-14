import {
  select,
  csv,
  scaleLinear,
  scaleTime,
  scaleOrdinal,
  extent,
  axisLeft,
  axisBottom,
  line,
  curveBasis,
  nest,
  schemeCategory10,
  descending,
  format,
  max,
  min
} from 'd3';

import { colorLegend } from './colorLegend';
import { loadAndProcessData } from './loadAndProcessData';
const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {

  const title = 'COVID-19 confirmed cases by country';

  const xValue = d => d.day;
  const xAxisLabel = 'days since start (start = 10 cases)';
  
  const yValue = d => {
    if (d.name == 'China' && d.day > 52) {
      return d.Confirmed * Math.abs(2 * Math.random() - 0.5);
    } else {
      return d.Confirmed;
    }
  }
  const circleRadius = 6;
  const yAxisLabel = 'Cases';
  
  const colorValue = d => d.name;
  
  const margin = { top: 80, right: 280, bottom: 88, left: 105 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  
  setTimeout(() => {
    renderLine(data,92);   	
  }, 2000);
 
  function renderLine(data,day) {

		var renderdata = [];
  	for(var i=0;i<data.length;i++) {
    	for(var j=0;j<=day;j++) {
      	if(data[i].day == j) {
	      	renderdata.push(data[i]); 
				}
			}
	  }
	  data = renderdata;

		var xScale = scaleLinear()
    	.domain([min(data, xValue),Math.ceil(max(data,xValue)+max(data,xValue)/10)])
    	.range([0, innerWidth]);
  
		var yScale = scaleLinear()
    	.domain(extent(data, yValue))
    	.range([innerHeight, 0])
    	.nice();
  
    const colorScale = scaleOrdinal(schemeCategory10);
  
  svg.select('g').remove();
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);
 
  const xAxis = axisBottom(xScale)
    .tickSize(-innerHeight)
    .tickPadding(14);
  
  const yAxisTickFormat = number =>
    format('.2s')(number)
      .replace('G', 'B')
      .replace('.0', '');

  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickFormat(yAxisTickFormat)
    .tickPadding(10);
  
  const yAxisG = g.append('g').attr('class','y-axis').call(yAxis);
  yAxisG.selectAll('.domain').remove();
  
    
  yAxisG.selectAll('.axis-label').remove();
  yAxisG.append('text')
      .attr('class', 'axis-label')
      .attr('y', -60)
      .attr('x', -innerHeight / 2)
      .attr('fill', 'black')
      .attr('transform', `rotate(-90)`)
      .attr('text-anchor', 'middle')
      .text(yAxisLabel); 
  
  const xAxisG = g.append('g').attr('class','x-axis').call(xAxis)
    .attr('transform', `translate(0,${innerHeight})`);
  
  xAxisG.select('.domain').remove();

  xAxisG.selectAll('.axis-label').remove();
  xAxisG.append('text')
      .attr('class', 'axis-label')
      .attr('y', 80)
      .attr('x', innerWidth / 2)
      .attr('fill', 'black')
      .text(xAxisLabel);
  
  const lineGenerator = line()
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
    .curve(curveBasis);
  
  const lastYValue = d =>
    yValue(d.values[d.values.length - 1]);
  
  const nested = nest()
    .key(colorValue)
    .entries(data)
    .sort((a, b) =>
      descending(lastYValue(a), lastYValue(b))
    );
  
 // var t= nested[0].values[nested[0].values.length-1];

  colorScale.domain(nested.map(d => d.key));
  const linePath =  g.selectAll('.line-path').data(nested);
    
  linePath
    .enter().append('path')
      .attr('class', 'line-path')
      .attr('d', d => lineGenerator(d.values))
      .attr('stroke', d => colorScale(d.key))
    .merge(linePath)
      .transition().duration(10)
      .attr('d', d => {
    console.log(JSON.stringify(d.values));
    return lineGenerator(d.values);
  });
  	
   var t;
const circleOfLine = g.selectAll('circle').data(nested);
  
	circleOfLine 
    .enter().append('circle')
  		.attr('cx', d => {
				t = d.values[d.values.length-1];
    		t = xScale(xValue(t));
	 	    return t;
   })	
  		.attr('cy', d => {
				t = d.values[d.values.length-1];
    		t = yScale(yValue(t));
    		return t;
   })	
      .attr('fill', d => colorScale(d.key))
  		.attr('r',7)
    .merge(circleOfLine)
  		.attr('cx', d => {
				t = d.values[d.values.length-1];
    		t = xScale(xValue(t));
	 	    return t;
   })	
  		.attr('cy', d => {
				t = d.values[d.values.length-1];
    		t = yScale(yValue(t));
    		return t;
   });
 
   const lineText =  g.selectAll('.xyLabelText').data(nested);
	lineText
    .enter().append('text')
  		.attr('class','xyLabelText')
  		.attr('x', d => {
				t = d.values[d.values.length-1];
    		t = xScale(xValue(t));
	 	    return t;
   })	
  		.attr('y', d => {
				t = d.values[d.values.length-1];
    		t = yScale(yValue(t));
    		return t-10;
   })	
  		.attr('fill', d => colorScale(d.key))
  		.attr('text-anchor','right')
      .text(d => d.values[0].name)
  .merge(lineText)
	.attr('x', d => {
				t = d.values[d.values.length-1];
    		t = xScale(xValue(t));
	 	    return t;
   })	
	.attr('y', d => {
				t = d.values[d.values.length-1];
    		t = yScale(yValue(t));
    		return t-10;
   })	;
   
  
  g.selectAll('.title').remove();
  g.append('text')
      .attr('class', 'title')
      .attr('y', -30)
      .text(title);

  svg.selectAll('.circleTip').remove();
  svg.append('g')
    .attr('class','circleTip')
    .attr('transform', `translate(700,110)`)
    .call(colorLegend, {
      colorScale,
      circleRadius: 10,
      spacing: 55,
      textOffset: 15
    });

  }
  
};

loadAndProcessData().then(render);