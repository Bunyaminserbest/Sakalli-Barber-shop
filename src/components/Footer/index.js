import React, { Component } from 'react';

const FooterDesign = () => (
  <div class='d-flex align-items-end mt-5' style={{ fontSize: '1.5rem' }}>
    <div
      className='text-center '
      style={{
        borderTop: 'solid 10px',
        borderColor: 'rgba(90,77,16,0.25)',
        backgroundColor: 'black',
        width: '100%'
      }}
    >
      <h1>Love to have you with us</h1>

      <div
        style={{
          width: '80px',
          color: 'rgba(90,77,16,0.5)',
          position: 'relative',
          left: '47%'
        }}
        className='d-flex justify-content-around'
      >
        <a
          style={{ color: 'rgba(90,77,16,0.5)' }}
          href='https://www.instagram.com/sakalli_barbershop/'
        >
          <i class='fab fa-instagram'></i>
        </a>
        <a
          style={{ color: 'rgba(90,77,16,0.5)' }}
          href='https://www.facebook.com/pages/Barber-shop-Ballon-Cihad/228623377572625'
        >
          <i class='fab fa-facebook-square'></i>
        </a>
        <a
          style={{ color: 'rgba(90,77,16,0.5)' }}
          href='https://www.google.com/search?q=sakalli+barber+shop&oq=sakalli+barber&aqs=chrome.1.69i57j69i59j69i60j69i61.3498j0j4&sourceid=chrome&ie=UTF-8#lrd=0x47c22f613d9cbf0f:0xbec95edc182a4bb9,1,,,'
        >
          <i class='fab fa-google'></i>
        </a>
      </div>
      <p className='my-2' style={{ color: 'rgba(90,77,16,0.25)' }}>
        © Copyrights preserved Sakalli
      </p>
    </div>
  </div>
);

export class Footer extends Component {
  render() {
    return (
      <div>
        <FooterDesign />
      </div>
    );
  }
}

export default Footer;
