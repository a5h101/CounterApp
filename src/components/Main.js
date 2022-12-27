import React from 'react';
import { Component } from 'react';
// import { useState } from 'react';
import '../App.css';
// const [count, setCount] = useState(0);

class CounterApp extends Component {
  state = { count: 0 };

  // changeCount = () => {
  //   if (action === '+') {
  // this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  //     console.log(this.state);
  //   } else if (action === '-') {
  //     this.setState((prevstate) => ({ count: prevstate.count - 1 }));
  //   } else {
  // this.setState({ count: 0 });
  // }
  // };
  onDecrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count - 1 }));
  };

  onIncrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  };
  onReset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="counter">
        <h1>Counter App</h1>
        <span className="count">{this.state.count}</span>
        <div className="btn">
          <button
            className="btn btn-action increment"
            onClick={this.onIncrement}
          >
            +
          </button>
          <button
            className="btn btn-action decrement"
            disabled={this.state.count === 0}
            onClick={this.onDecrement}
          >
            -
          </button>
          <button
            className="btn btn-action reset"
            disabled={this.state.count === 0}
            onClick={this.onReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default CounterApp;
// import { Component } from 'react';
// import '../App.css';
// class CounterApp extends Component {
//   state = { count: 0 };
//   onDecrement = () => {
//     this.setState((prevstate) => ({ count: prevstate.count - 1 }));
//   };

//   onIncrement = () => {
//     this.setState((prevstate) => ({ count: prevstate.count + 1 }));
//   };
//   onReset = () => {
//     this.setState({ count: 0 });
//   };

//   render() {
//     return (
//       <div className="app">
//         <h1> Counter App</h1>

//         <p>{this.state.count}</p>
//         <div className="buttons">
//           <button type="button" className="button" onClick={this.onIncrement}>
//             +
//           </button>
//           <button type="button" className="button" onClick={this.onDecrement}>
//             -
//           </button>
//           <button type="button" className="button" onClick={this.onReset}>
//             Reset{' '}
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default CounterApp;
