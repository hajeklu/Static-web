import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3-fullhd.mp4' autoPlay loop muted />
      <h1>Kebab a Pizza Reina</h1>
      <p>Věříme že poctivá práce, má smysl</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          href='/menu'
        >
          JÍDELNÍ MENU
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          href='tel:725776260'
        >
          OBJEDNAT  <i className='fa fa-phone' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
