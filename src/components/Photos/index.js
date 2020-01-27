import React, { Component } from 'react';
import './index.css';

const Titre = ({ bgcolor, color, width, height }) => (
  <h1
    className='p-2 ml-5 pl-3 photoTitre'
    style={{
      backgroundColor: bgcolor,
      color: color,
      width: width,
      height: height,
      fontSize: '4rem'
    }}
  >
    Photos
  </h1>
);

const Pict = ({ position, top, left, width, height, require }) => (
  <img
    style={{ position: position, width: width, height: height }}
    src={require}
    alt='pict1'
    className='col-md-4 photoImg'
  />
);

export class Photos extends Component {
  render() {
    return (
      <div style={{ width: '100%', marginTop: '100px' }} className='photoDiv'>
        <Titre bgcolor='rgba(255,255,255,0.1)' color='white' width='400px' />

        <div className='d-flex container justify-content-around mt-5 '>
          <div className='row'>
            <Pict
              width='365px'
              height='450px'
              require={require('../../img/17.jpg')}
            />
            <Pict
              width='365px'
              height='450px'
              require={require('../../img/17.jpg')}
            />
            <Pict
              width='365px'
              height='450px'
              require={require('../../img/17.jpg')}
            />
          </div>
        </div>
        <div className='d-flex container justify-content-around mt-5'>
          <div className='row'>
            <Pict
              width='365px'
              height='450px'
              require={require('../../img/17.jpg')}
            />
            <Pict
              width='365px'
              height='450px'
              require={require('../../img/17.jpg')}
            />
            <Pict
              width='365px'
              height='450px'
              require={require('../../img/17.jpg')}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
