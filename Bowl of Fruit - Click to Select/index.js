import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { range } from 'd3';
import { FruitBowl } from './fruitBowl';

const width = 960;
const height = 500;

const makeFruit = type => ({
  type,
  id: Math.random()
});


const App = () => {

  const [fruits] = useState(
    range(5).map(() => makeFruit('apple'))
  ); 
    
  const [
    selectedFruit,
    setSelectedFruit
  ] = useState(fruits[0].id);
  
  return (
    <svg width={width} height={height}>
      <FruitBowl
        fruits={fruits}
        height={height}
        selectedFruit={selectedFruit}
        setSelectedFruit={setSelectedFruit}
      />
    </svg>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);



// import { fruitBowl } from './fruitBowl';

// const svg = select('svg');



// const onClick = id => {
//   selectedFruit = id;
//   render();
// };



// render();

// // Eat an apple.
// setTimeout(() => {
//   fruits.pop();
//   render();
// }, 1000);

// // Replacing an apple with a lemon.
// setTimeout(() => {
//   fruits[2].type = 'lemon';
//   render();
// }, 2000);

// // Eat an apple.
// setTimeout(() => {
//   fruits = fruits.filter((d, i) => i !== 1);
//   render();
// }, 3000);