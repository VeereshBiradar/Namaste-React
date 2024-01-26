import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement('div', { id: 'child' }, [
      React.createElement('h1', {}, 'awesome'),
      React.createElement('h2', {}, 'amazing')
    ]),
    React.createElement('div', { id: 'child2' }, [
      React.createElement('h1', {}, 'awesome'),
      React.createElement('h2', {}, 'amazing')
    ])
  ]
);

const rootParent = document.getElementById('root'); // No need to use ReactDOM.createRoot in this case
ReactDOM.render(parent, rootParent);

console.log(parent);

