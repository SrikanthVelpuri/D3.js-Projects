import React from 'react';
import { scaleOrdinal } from 'd3';

const colorScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range(['#c11d1d', '#eae600']);

const radiusScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range([50, 30]);

const xPosition = (d, i) => i * 120 + 60;

export const FruitBowl = props => {
  const {
    fruits,
    height,
    onClick,
    selectedFruit,
    setSelectedFruit
  } = props;
  
  return fruits.map((fruit, i) => (
    <circle
      key={fruit.id}
      cx={xPosition(fruit, i)}
      cy={height / 2}
      r={radiusScale(fruit.type)}
      fill={colorScale(fruit.type)}
      strokeWidth={5}
      stroke={
        fruit.id === selectedFruit
          ? 'black'
          : 'none'
      }
      onClick={() => { setSelectedFruit(fruit.id) }}
    />
  ));
};

//     .transition().duration(1000)
//       .attr('cx', xPosition)
//       .attr('r', d => radiusScale(d.type));
//   circles.exit()
//     .transition().duration(1000)
//       .attr('r', 0)
//     .remove();
