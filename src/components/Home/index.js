import React, { Component } from 'react';
import './index.css';

const BarreDore = ({
  color,
  width,
  height,
  position,
  opacity,
  top,
  right,
  left
}) => (
  <div
    style={{
      backgroundColor: color,
      height: height,
      width: width,
      opacity: opacity,
      position: position,
      top: top,
      right: right,
      left: left
    }}
    className='noDisplay'
  ></div>
);

const Titre = ({
  value,
  color,
  bgcolor,
  opacity,
  fontSize,
  width,
  height,
  position,
  left,
  top
}) => (
  <h1
    className='p-1 d-flex justify-content-center align-items-center homeTitre'
    style={{
      value: value,
      color: color,
      backgroundColor: bgcolor,
      opacity: opacity,
      fontSize: fontSize,
      width: width,
      height: height,
      position: position,
      left: left,
      top: top
    }}
  >
    Top Barber Shop in &nbsp;
    <span style={{ color: '#A89331' }}> Charleroi</span>
  </h1>
);

const ImageP = ({ position, width, height, top, left }) => (
  <img
    style={{
      position: position,
      width: width,
      height: height,
      top: top,
      left: left
    }}
    src={require('../../img/6.jpg')}
    alt='Homeimg'
    className='homeImg'
  />
);

const Text = ({ position, left, top, fontSize, fontFamily, color }) => (
  <p
    style={{
      position: position,
      top: top,
      left: left,
      fontSize: fontSize,
      fontFamily: fontFamily,
      color: color
    }}
    className='homeText'
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do
    eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Quam
    adipiscing vitae <br /> proin sagittis nisl. Pretium lectus quam id leo in
    <br />
    vitae. Amet mattis vulputate enim nulla aliquet <br /> porttitor lacus
    luctus. Velit ut tortor pretium <br /> viverra suspendisse. Lacus vestibulum
    sed arcu <br />
    non odio euismod. Velit ut tortor pretium viverra <br />
    suspendisse. Lacus vestibulum sed arcu non odio <br />
    euismod.
  </p>
);

const Button = ({ position, top, left, bgcolor, width, height }) => (
  <button
    style={{
      position: position,
      top: top,
      left: left,
      backgroundColor: bgcolor,
      width: width,
      height: height
    }}
    className='homeContact'
  >
    Contact us now
  </button>
);

const RatingG = ({ position, width, height, top, left }) => (
  <a href='https://www.google.com/search?q=sakalli+barber+shop&oq=sakalli+barber&aqs=chrome.1.69i57j69i59j69i60j69i61.3498j0j4&sourceid=chrome&ie=UTF-8#lrd=0x47c22f613d9cbf0f:0xbec95edc182a4bb9,1,,,'>
    <img
      style={{
        position: position,
        width: width,
        height: height,
        top: top,
        left: left
      }}
      src={require('../../img/google.svg')}
      alt='google rating'
      className='ratingG'
    />
  </a>
);

const RatingF = ({ position, width, height, top, left }) => (
  <a href='https://www.facebook.com/pages/Barber-shop-Ballon-Cihad/228623377572625'>
    <img
      className='pl-2 ratingF'
      style={{
        position: position,
        width: width,
        height: height,
        top: top,
        left: left
      }}
      src={require('../../img/facebook.svg')}
      alt='facebook rating rating'
    />
  </a>
);

export class Home extends Component {
  render() {
    return (
      <div className='d-flex justify-content-around pt-5 '>
        <BarreDore
          color='#5A4D10'
          height='196px'
          width='21px'
          opacity='0.2'
          position='absolute'
          top='0'
          left='0'
        />
        <div>
          <Titre
            color='white'
            bgcolor='rgba(0,0,0,0.5)'
            width='680px'
            height='62px'
            fontSize='4.5rem'
            position='absolute'
            left='90px'
            top='250px'
          />

          <Text
            fontSize='1.4rem'
            color='white'
            position='relative'
            top='150px'
            left='50px'
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
          />

          <Button
            bgcolor='#5A4D10'
            position='relative'
            top='150px'
            width='233px'
            height='50px'
            left='50px'
          />
        </div>
        <div>
          <ImageP position='relatif' width='950' height='522px' />
          <div class='pt-3'>
            <RatingG width='218px' />
            <RatingF width='218px' />
          </div>
        </div>
        <BarreDore
          color='#5A4D10'
          height='196px'
          width='21px'
          opacity='0.2'
          position='absolute'
          top='660px'
          right='0'
        />
      </div>
    );
  }
}

export default Home;
