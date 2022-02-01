import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() { 
    const { onIncrement,onReset,onDelete,counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        <span>{counters.map(counter => (
        <Counter key={counter.id} onHandleIncrement={onIncrement} onDelete={onDelete} counter={counter} />
        ))}</span>
      </div>
    );
  }
}

export default Counters;