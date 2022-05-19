import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Recent Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          
            <CardItem
            // needs to link to https://stfrancisministries.org/ - from project page
              src='https://photos.smugmug.com/Uganda-2016-2018/UGANDA/i-73NtZwr/0/fdb0dac0/X3/32382102863-X3.jpg'
              text='St. Francis De Sales School for The Deaf - Nyapea, Uganda'
              label='website'
              href='https://stfrancisministries.org/'
            />
          
  
            <CardItem
            // needs to link to randallcountyrentals.com - from project page 
              src='https://photos.smugmug.com/TOME/i-GFR8N5j/0/ddac55cd/X3/randalcountrentals-X3.png'
              text='Randall County Rentals Website - Amarillo, Texas'
              label='Website'
              href='https://randallcountyrentals.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              // link to services page & a slideshow/smugmug gallery of the shoot
              src='https://photos.smugmug.com/Behind-The-Scenes/Iridis-BTS-Photos/i-pC9V7Zn/0/a84d32e0/X3/Iridis%20Day%203-81-X3.jpg'
              text='IRIDIS - Behind The Scenes'
              label='Photography'
              href='https://erikburdett.smugmug.com/Behind-The-Scenes/Iridis-BTS-Photos/'
            />
            <CardItem
            // link to website & project page 
              src='https://i1.sndcdn.com/artworks-uOh69n5vZw4OAyCQ-0kPnNg-t200x200.jpg'
              text='TELEPHONE HEATER Website'
              label='Website & Music'
              href='https://teleheater-site-4oyxs3mql-erikburdett.vercel.app/'
            
            />
            <CardItem
              src='https://images-na.ssl-images-amazon.com/images/I/51ek2GZUcbL._SY445_SX342_QL70_ML2_.jpg'
              text='TELEPHONE HEATER PRESENTS: New Amarilla - 2020'
              label='Album'
              href='https://open.spotify.com/artist/1U9oQ2kPIAOymZLvRK4wrs?si=Mo1Q4py5RayCRpw3ifHA-g&dl_branch=1'
            />
            <CardItem
              src='https://photos.smugmug.com/TOME/i-SpgR2Vt/0/b52df870/X2/Screenshot%20%2829%29-X2.png'
              text='Eighty Twenty Meals - Amarillo, Texas'
              label='Website'
              href='https://eightytwentymeals.com/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;