
// render a a text on the webpage with the help of react

// const heading = React.createElement('h1', {id: 'heading'}, 'Hello World from React');

// //how to put into the html with the help of react dom
// const root = ReactDOM.createRoot(document.getElementById('root'));

// //display heading on the webpage or inside the html
// root.render(heading);

// console.log(heading);


{/* <div id="parent">
    <div id="child">
        <h1>I am react</h1>
    </div>
</div> */}


const parent = React.createElement('div', {id:'parent'}, 
React.createElement('div', {id:'child'}, [React.createElement('h1', {}, 'awesome'), React.createElement('h2', {}, 'amazing')]),
React.createElement('div', {id:'child2'}, [React.createElement('h1', {}, 'awesome'), React.createElement('h2', {}, 'amazing')]))


const rootParent = ReactDOM.createRoot(document.getElementById('root'))
rootParent.render(parent);

console.log(parent)
