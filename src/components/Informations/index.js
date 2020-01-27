import React, { Component } from 'react';
import './index.css';

const Titre = ({ bgcolor, color, width, height }) => (
  <h1
    className='p-2 ml-5 pl-3 infoTitre'
    style={{
      backgroundColor: bgcolor,
      color: color,
      width: width,
      height: height,
      fontSize: '4rem'
    }}
  >
    Informations
  </h1>
);

const HO = ({ bgcolor, fontFamily }) => (
  <div
    style={{
      fontFamily: fontFamily
    }}
  >
    <h3 className='my-3' style={{ fontSize: '2.8rem' }}>
      Opening hours
    </h3>
    <div className='row' style={{ backgroundColor: bgcolor }}>
      <div
        className='col-md-6 '
        style={{
          fontFamily: fontFamily
        }}
      >
        Lundi
      </div>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        Fermé
      </div>
    </div>
    <div className='row'>
      <div
        className='col-md-6 '
        style={{
          fontFamily: fontFamily
        }}
      >
        Mardi
      </div>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        9:30 - 18:00
      </div>
    </div>
    <div className='row' style={{ backgroundColor: bgcolor }}>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        Mercredi
      </div>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        9:30 - 18:00
      </div>
    </div>
    <div className='row'>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        Jeudi
      </div>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        9:30 - 18:00
      </div>
    </div>
    <div className='row' style={{ backgroundColor: bgcolor }}>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        Vendredi
      </div>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        9:30 - 18:00
      </div>
    </div>
    <div className='row'>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        Samedi
      </div>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        9:30 - 18:00
      </div>
    </div>
    <div className='row' style={{ backgroundColor: bgcolor }}>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        Dimanche
      </div>
      <div
        className='col-md-6'
        style={{
          fontFamily: fontFamily
        }}
      >
        9:30 - 18:00
      </div>
    </div>
  </div>
);

const Adress = ({ bgcolor }) => (
  <div
    className='row'
    style={{
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    }}
  >
    <h3 className='my-3'>Adress</h3>

    <p style={{ backgroundColor: bgcolor }} className='col-md-12 p-3'>
      Sakalli Barber Shop
      <br />
      Place du Ballon 2,
      <br /> 6040 Charleroi
      <br /> Belgique
    </p>
  </div>
);
const Phone = ({ bgcolor }) => (
  <div
    className='row'
    style={{
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    }}
  >
    <h3 className='my-3'>Phone</h3>

    <p style={{ backgroundColor: bgcolor }} className='col-md-12 p-3 m-0'>
      +32 493 666 426
    </p>
  </div>
);

export class Informations extends Component {
  render() {
    return (
      <div className='mt-5 '>
        <Titre bgcolor='rgba(255,255,255,0.1)' color='white' width='400px' />
        <div
          className='d-flex   mt-5 mx-5 align-items-end justify-content-center infoDiv'
          style={{
            fontSize: '1.4rem'
          }}
        >
          <div className='col-md-4 mr-5 ' style={{ color: 'white' }}>
            <div>
              <HO
                bgcolor='rgba(90,77,16,0.25)'
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              />
            </div>
            <div>
              <Adress bgcolor='rgba(90,77,16,0.25)' />
            </div>
            <div>
              <Phone bgcolor='rgba(90,77,16,0.25)' />
            </div>
          </div>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10165.538406225358!2d4.4140443!3d50.4339365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbec95edc182a4bb9!2sBarber%20Shop%20Ballon!5e0!3m2!1sfr!2sbe!4v1579173434876!5m2!1sfr!2sbe'
            width='600'
            height='457'
            frameborder='0'
            style={{ border: '0' }}
            allowfullscreen=''
            title='localisation'
            className='col-md-7 infoMap'
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Informations;
