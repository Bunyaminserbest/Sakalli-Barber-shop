import React, { Component } from 'react';
import './index.css';

const ImageTarifs = ({ width, height }) => (
  <img
    style={{
      width: width,
      height: height,
      padding: 'unset'
    }}
    src={require('../../img/tarifs.png')}
    alt='Homeimg'
    className='col-md-4 serviceImg'
  />
);

export class Services extends Component {
  constructor() {
    super();
    this.state = {
      serviceBgColor: 'rgba(90,77,16,0.25)',
      priceBgColor: 'black',
      promotionBgColor: 'black',
      title: 'Services we offer',
      content: 'Services offerts'
    };
  }

  handleClick(t) {
    console.log(t);
    if (t === 1) {
      this.setState({
        serviceBgColor: 'rgba(90,77,16,0.25)',
        priceBgColor: 'black',
        promotionBgColor: 'Black',
        title: 'Services we offer',
        content: 'Services offerts'
      });
    } else if (t === 2) {
      this.setState({
        serviceBgColor: 'Black',
        priceBgColor: 'rgba(90,77,16,0.25)',
        promotionBgColor: 'Black',
        title: 'Price',
        content: 'Prix'
      });
    } else if (t === 3) {
      this.setState({
        serviceBgColor: 'Black',
        priceBgColor: 'black',
        promotionBgColor: 'rgba(90,77,16,0.25)',
        title: 'Promotions',
        content: 'Promotions'
      });
    }
  }

  render() {
    return (
      <div
        className='container-fluid serviceDiv'
        style={{ marginTop: '120px' }}
      >
        <div className='row '>
          <div className='col-md-4'></div>
          <div className='col-md-8 btnDiv'>
            <button
              className='mx-3 serviceBtn'
              onClick={() => this.handleClick(1)}
              style={{
                backgroundColor: this.state.serviceBgColor,
                width: '200px',
                fontSize: '1.6rem',
                outline: 'none'
              }}
            >
              Services
            </button>

            <button
              className='mx-3 serviceBtn'
              onClick={() => this.handleClick(2)}
              style={{
                backgroundColor: this.state.priceBgColor,
                width: '200px',
                fontSize: '1.6rem',
                outline: 'none'
              }}
            >
              Prix
            </button>

            <button
              className='mx-3 serviceBtn'
              onClick={() => this.handleClick(3)}
              style={{
                backgroundColor: this.state.promotionBgColor,
                width: '200px',
                fontSize: '1.6rem',
                outline: 'none'
              }}
            >
              Promotions
            </button>
          </div>
        </div>
        <div className='row'>
          <ImageTarifs />

          <div
            className='p-5 col-md-8 serviceBox'
            style={{
              backgroundColor: 'rgba(90,77,16,0.25)',

              padding: 'unset'
            }}
          >
            <h1
              className='d-flex pl-3 mt-4 serviceTitre'
              style={{
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: '300px',
                fontSize: '4rem'
              }}
            >
              {this.state.title}
            </h1>

            <p
              className='container mt-5'
              style={{
                color: 'white',
                fontSize: '1.4rem',
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              {this.state.content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
