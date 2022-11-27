import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.scss';
import close from '../../assets/images/close.png';

const HomeButton = () => {
  return (
    <Link className='home-button' to='/'>
      <img className='home-button__icon' src={close} alt="Close" />
    </Link>
  )
}

export default HomeButton