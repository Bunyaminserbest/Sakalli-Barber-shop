import React, { Component } from 'react';
import './index.css';

export class Static extends Component {
  Home(d) {
    if (d === 1) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div
        className='arrow'
        style={{
          position: 'fixed',
          top: '600px',
          right: '30px'
        }}
        onClick={() => this.Home(1)}
      >
        <button style={{ outline: 'none' }}>
          <i className='fas fa-arrow-circle-up fa-2x '></i>
        </button>
      </div>
    );
  }
}

export default Static;
