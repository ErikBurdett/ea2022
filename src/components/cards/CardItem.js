import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards_item_link' target="_blank" rel="noreferrer" href={props.href}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Album Image'
              src={props.src}
              href={props.href}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          </a>
      </li>
    </>
  );
}

export default CardItem;