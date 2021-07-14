(function (React,d3,ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const colorScale = d3.scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range(['#c11d1d', '#eae600']);

  const radiusScale = d3.scaleOrdinal()
    .domain(['apple', 'lemon'])
    .range([50, 30]);

  const xPosition = (d, i) => i * 120 + 60;

  const FruitBowl = props => {
    const {
      fruits,
      height,
      onClick,
      selectedFruit,
      setSelectedFruit
    } = props;
    
    return fruits.map((fruit, i) => (
      React__default.createElement( 'circle', {
        key: fruit.id, cx: xPosition(fruit, i), cy: height / 2, r: radiusScale(fruit.type), fill: colorScale(fruit.type), strokeWidth: 5, stroke: fruit.id === selectedFruit
            ? 'black'
            : 'none', onClick: () => { setSelectedFruit(fruit.id); } })
    ));
  };

  //     .transition().duration(1000)
  //       .attr('cx', xPosition)
  //       .attr('r', d => radiusScale(d.type));
  //   circles.exit()
  //     .transition().duration(1000)
  //       .attr('r', 0)
  //     .remove();

  const width = 960;
  const height = 500;

  const makeFruit = type => ({
    type,
    id: Math.random()
  });


  const App = () => {

    const [fruits] = React.useState(
      d3.range(5).map(() => makeFruit('apple'))
    ); 
      
    const [
      selectedFruit,
      setSelectedFruit
    ] = React.useState(fruits[0].id);
    
    return (
      React__default.createElement( 'svg', { width: width, height: height },
        React__default.createElement( FruitBowl, {
          fruits: fruits, height: height, selectedFruit: selectedFruit, setSelectedFruit: setSelectedFruit })
      )
    );
  };

  const rootElement = document.getElementById('root');
  ReactDOM.render(React__default.createElement( App, null ), rootElement);



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

}(React,d3,ReactDOM));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2ZydWl0Qm93bC5qcyIsIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzY2FsZU9yZGluYWwgfSBmcm9tICdkMyc7XG5cbmNvbnN0IGNvbG9yU2NhbGUgPSBzY2FsZU9yZGluYWwoKVxuICAuZG9tYWluKFsnYXBwbGUnLCAnbGVtb24nXSlcbiAgLnJhbmdlKFsnI2MxMWQxZCcsICcjZWFlNjAwJ10pO1xuXG5jb25zdCByYWRpdXNTY2FsZSA9IHNjYWxlT3JkaW5hbCgpXG4gIC5kb21haW4oWydhcHBsZScsICdsZW1vbiddKVxuICAucmFuZ2UoWzUwLCAzMF0pO1xuXG5jb25zdCB4UG9zaXRpb24gPSAoZCwgaSkgPT4gaSAqIDEyMCArIDYwO1xuXG5leHBvcnQgY29uc3QgRnJ1aXRCb3dsID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgZnJ1aXRzLFxuICAgIGhlaWdodCxcbiAgICBvbkNsaWNrLFxuICAgIHNlbGVjdGVkRnJ1aXQsXG4gICAgc2V0U2VsZWN0ZWRGcnVpdFxuICB9ID0gcHJvcHM7XG4gIFxuICByZXR1cm4gZnJ1aXRzLm1hcCgoZnJ1aXQsIGkpID0+IChcbiAgICA8Y2lyY2xlXG4gICAgICBrZXk9e2ZydWl0LmlkfVxuICAgICAgY3g9e3hQb3NpdGlvbihmcnVpdCwgaSl9XG4gICAgICBjeT17aGVpZ2h0IC8gMn1cbiAgICAgIHI9e3JhZGl1c1NjYWxlKGZydWl0LnR5cGUpfVxuICAgICAgZmlsbD17Y29sb3JTY2FsZShmcnVpdC50eXBlKX1cbiAgICAgIHN0cm9rZVdpZHRoPXs1fVxuICAgICAgc3Ryb2tlPXtcbiAgICAgICAgZnJ1aXQuaWQgPT09IHNlbGVjdGVkRnJ1aXRcbiAgICAgICAgICA/ICdibGFjaydcbiAgICAgICAgICA6ICdub25lJ1xuICAgICAgfVxuICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTZWxlY3RlZEZydWl0KGZydWl0LmlkKSB9fVxuICAgIC8+XG4gICkpO1xufTtcblxuLy8gICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMClcbi8vICAgICAgIC5hdHRyKCdjeCcsIHhQb3NpdGlvbilcbi8vICAgICAgIC5hdHRyKCdyJywgZCA9PiByYWRpdXNTY2FsZShkLnR5cGUpKTtcbi8vICAgY2lyY2xlcy5leGl0KClcbi8vICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApXG4vLyAgICAgICAuYXR0cigncicsIDApXG4vLyAgICAgLnJlbW92ZSgpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyByYW5nZSB9IGZyb20gJ2QzJztcbmltcG9ydCB7IEZydWl0Qm93bCB9IGZyb20gJy4vZnJ1aXRCb3dsJztcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5cbmNvbnN0IG1ha2VGcnVpdCA9IHR5cGUgPT4gKHtcbiAgdHlwZSxcbiAgaWQ6IE1hdGgucmFuZG9tKClcbn0pO1xuXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblxuICBjb25zdCBbZnJ1aXRzXSA9IHVzZVN0YXRlKFxuICAgIHJhbmdlKDUpLm1hcCgoKSA9PiBtYWtlRnJ1aXQoJ2FwcGxlJykpXG4gICk7IFxuICAgIFxuICBjb25zdCBbXG4gICAgc2VsZWN0ZWRGcnVpdCxcbiAgICBzZXRTZWxlY3RlZEZydWl0XG4gIF0gPSB1c2VTdGF0ZShmcnVpdHNbMF0uaWQpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgPEZydWl0Qm93bFxuICAgICAgICBmcnVpdHM9e2ZydWl0c31cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHNlbGVjdGVkRnJ1aXQ9e3NlbGVjdGVkRnJ1aXR9XG4gICAgICAgIHNldFNlbGVjdGVkRnJ1aXQ9e3NldFNlbGVjdGVkRnJ1aXR9XG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTtcblxuXG5cbi8vIGltcG9ydCB7IGZydWl0Qm93bCB9IGZyb20gJy4vZnJ1aXRCb3dsJztcblxuLy8gY29uc3Qgc3ZnID0gc2VsZWN0KCdzdmcnKTtcblxuXG5cbi8vIGNvbnN0IG9uQ2xpY2sgPSBpZCA9PiB7XG4vLyAgIHNlbGVjdGVkRnJ1aXQgPSBpZDtcbi8vICAgcmVuZGVyKCk7XG4vLyB9O1xuXG5cblxuLy8gcmVuZGVyKCk7XG5cbi8vIC8vIEVhdCBhbiBhcHBsZS5cbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICBmcnVpdHMucG9wKCk7XG4vLyAgIHJlbmRlcigpO1xuLy8gfSwgMTAwMCk7XG5cbi8vIC8vIFJlcGxhY2luZyBhbiBhcHBsZSB3aXRoIGEgbGVtb24uXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgZnJ1aXRzWzJdLnR5cGUgPSAnbGVtb24nO1xuLy8gICByZW5kZXIoKTtcbi8vIH0sIDIwMDApO1xuXG4vLyAvLyBFYXQgYW4gYXBwbGUuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgZnJ1aXRzID0gZnJ1aXRzLmZpbHRlcigoZCwgaSkgPT4gaSAhPT0gMSk7XG4vLyAgIHJlbmRlcigpO1xuLy8gfSwgMzAwMCk7Il0sIm5hbWVzIjpbInNjYWxlT3JkaW5hbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJyYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBR0EsTUFBTSxVQUFVLEdBQUdBLGVBQVksRUFBRTtLQUM5QixNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDMUIsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7O0VBRWpDLE1BQU0sV0FBVyxHQUFHQSxlQUFZLEVBQUU7S0FDL0IsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzFCLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOztFQUVuQixNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7O0FBRXpDLEVBQU8sTUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJO0lBQ2hDLE1BQU07TUFDSixNQUFNO01BQ04sTUFBTTtNQUNOLE9BQU87TUFDUCxhQUFhO01BQ2IsZ0JBQWdCO0tBQ2pCLEdBQUcsS0FBSyxDQUFDOztJQUVWLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO01BQ3pCQztRQUNFLEtBQUssS0FBSyxDQUFDLEVBQUcsRUFDZCxJQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFFLEVBQ3hCLElBQUksTUFBTSxHQUFHLENBQUUsRUFDZixHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQzFCLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFDNUIsYUFBYSxDQUFDLEVBQ2QsUUFDRSxLQUFLLENBQUMsRUFBRSxLQUFLLGFBQWE7Y0FDdEIsT0FBTztjQUNQLE1BQU0sRUFFWixTQUFTLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUM5QztLQUNILENBQUMsQ0FBQztHQUNKLENBQUM7Ozs7Ozs7Ozs7RUNqQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQzs7RUFFbkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLO0lBQ3pCLElBQUk7SUFDSixFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtHQUNsQixDQUFDLENBQUM7OztFQUdILE1BQU0sR0FBRyxHQUFHLE1BQU07O0lBRWhCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBR0MsY0FBUTtNQUN2QkMsUUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN2QyxDQUFDOztJQUVGLE1BQU07TUFDSixhQUFhO01BQ2IsZ0JBQWdCO0tBQ2pCLEdBQUdELGNBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7O0lBRTNCO01BQ0VELHVDQUFLLE9BQU8sS0FBSyxFQUFFLFFBQVEsTUFBTTtRQUMvQkEsOEJBQUM7VUFDQyxRQUFRLE1BQU8sRUFDZixRQUFRLE1BQU0sRUFDZCxlQUFlLGFBQWEsRUFDNUIsa0JBQWtCLGdCQUFnQixFQUFDLENBQ25DO09BQ0U7TUFDTjtHQUNILENBQUM7O0VBRUYsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNwRCxRQUFRLENBQUMsTUFBTSxDQUFDQSw4QkFBQyxTQUFHLEVBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9