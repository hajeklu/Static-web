import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Vybrali jsme pro vás!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Dürüm kebab s vepřovým masem a čerstvým salátem'
              label='250g'
              path='/menu'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Lahodná pizza z Italského těsta'
              label='300g'
              path='/menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Doner kebab v pravém tureckém chlebu'
              label='200g'
              path='/menu'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Zapečený masový toust se zelím, cibulí a sýrem'
              label='150g'
              path='/menu'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Řecký salát pro ty co maso moc nemusí'
              label='300g'
              path='/menu'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
