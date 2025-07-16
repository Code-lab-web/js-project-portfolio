import React from 'react';

// Function component using function keyword
function FunctionComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a function component.</p>
    </div>
  );
}

// Function component using arrow function syntax
const FunctionComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a function component.</p>
    </div>
  );
};

// Removed redundant default export
import React, { useState } from 'react';

const FunctionComponent = () => {
  // Using useState Hook to manage state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Removed redundant default export
import React, { useState, useEffect } from 'react';

const FunctionComponent = () => {
  const [count, setCount] = useState(0);

  // useEffect Hook to replicate componentDidMount and componentDidUpdate
  useEffect(() => {
    // This code block runs after every render
    console.log("Component did mount or update");

    // Clean-up function (replicating componentWillUnmount)
    return () => {
      console.log("Component will unmount");
    };
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export { FunctionComponent };
import React, { Component } from 'react';

// Define a class component that extends React.Component or React.PureComponent
class ClassComponent extends Component {
  // Define constructor if necessary
  constructor(props) {
    super(props);
    // Initialize state if needed
    this.state = {
      count: 0
    };
  }

  // Define lifecycle methods if necessary
  componentDidMount() {
    // Code to run after the component is mounted
  }

  // Define instance methods if necessary
  handleClick = () => {
    // Update state or perform other logic
    this.setState({ count: this.state.count + 1 });
  }

  // Define render() method to return JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

// Removed redundant default export
import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  // Define a method to update state
  incrementCount = () => {
    // Use this.setState() to update state
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export { ClassComponent };
import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // Fetch initial data when the component mounts
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the data has changed
    if (prevState.data !== this.state.data) {
      // Data has changed, perform additional actions
      console.log('Data has been updated:', this.state.data);
    }
  }

  componentWillUnmount() {
    // Cleanup tasks before the component is unmounted
    console.log('Component will unmount');
    // For example, remove event listeners, cancel ongoing tasks, etc.
  }

  fetchData() {
    // Simulate fetching data from an API
    setTimeout(() => {
      this.setState({ data: 'Some data fetched from API' });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}

import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Custom method to handle incrementing count
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  // Custom method to handle decrementing count
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export { ClassComponent };
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
import { useTheme } from 'styled-components'


const MyComponent = () => {
  const theme = useTheme()


  console.log('Current theme: ', theme)
  // ...
}