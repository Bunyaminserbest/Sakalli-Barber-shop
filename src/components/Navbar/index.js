import React, { Component } from 'react';
import './index.css';

const ColoredLine = ({ color, width }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      width: width
    }}
    className='noDisplay'
  />
);

export class Navbar extends Component {
  Home(d) {
    if (d === 1) {
      window.scrollBy(0, 170);
    }
    if (d === 2) {
      window.scrollBy(0, 850);
    }
    if (d === 3) {
      window.scrollBy(0, 1500);
    }
    if (d === 4) {
      window.scrollBy(0, 2575);
    }
  }

  render() {
    return (
      <div className='d-flex justify-content-around ' style={{ width: '100%' }}>
        <div className='d-flex flex-column pl-5'>
          <div className='d-flex justify-content-around mt-5 '>
            <button
              className='noDisplay'
              style={{ outline: 'none' }}
              onClick={() => this.Home(1)}
            >
              Home
            </button>

            <button
              className='noDisplay'
              style={{ outline: 'none' }}
              onClick={() => this.Home(2)}
            >
              Services
            </button>
            <button
              className='noDisplay'
              style={{ outline: 'none' }}
              onClick={() => this.Home(3)}
            >
              Photos
            </button>
          </div>
          <ColoredLine color='#A89331' width='40vw' />
        </div>

        <img
          className='logo'
          src={require('../../img/Bun-blanc.png')}
          alt='Navlogo'
        />

        <div className='d-flex flex-column pr-5 noDisplay'>
          <div className='d-flex justify-content-around mt-5'>
            <button
              className='noDisplay'
              style={{ outline: 'none' }}
              onClick={() => this.Home(4)}
            >
              Informations
            </button>
            <button className='noDisplay' style={{ outline: 'none' }}>
              {' '}
              Contacts
            </button>
            <button className='noDisplay' style={{ outline: 'none' }}>
              About us
            </button>
          </div>
          <ColoredLine color='#A89331' width='40vw' />
        </div>
      </div>
    );
  }
}

export default Navbar;
