import React from 'react';
import '../../App.css';
import Footer from '../footer/Footer.js';
import '../footer/Footer.css';
import AboutHero from '../herosection/AboutHero';
import {GithubButton}  from '../buttons/GithubButton'
import {PrintsButton} from '../buttons/PrintsButton';
import { LinkedinButton } from '../buttons/LinkedinButton';
import {Button} from '../buttons/Button';

function Contact() {
  return(<>
  <AboutHero/>
  <div className='cards'>
      <h1 className="mt-1 mb-1 bg-dark ">Erik Burdett</h1>

          
          <div>
            <p className='mt-4 b mb-1 bg-dark text-light text-center'> 
            <br/><br/>
            Hi, I'm Erik. I'm a fullstack engineer, writer, and photographer living and working in Windswept West-Texas (AKA: Amarillo, TX).
            <br/><br/>
            I've been working in web-development since 2014. I started as a copywriter in 2014 working for GischMedia, then CreativePickle but found myself drawn to the actual development work and coding and so began building sites for myself and others via Wordpress while diving into Python and JavaScript and related stacks in order to truly become a fullstack web engineer. 
            <br/><br/>
            Fast forward to 2015: I found myself signing onto my long-time friend Rannah Evett's mission: The fundraising and foundation of The Saint Francis de Sales School for the Deaf in Nyapea, Uganda where there were no options for Deaf children in the entire Eastern Nile Valley region of Northern Uganda. From 2015-2018 I spent time in Uganda and the States working with Rannah as a sort of technology solutions specialist in fundraising efforts and building their website to also serve as a donation solution for the organization. <a href='https://stfrancisministries.org/' target="_blank" rel="noreferrer">The Saint Francis Ministries website</a> became my first major full-stack project and taught me an important lesson: 
            <br/><br/><b>Engineering, when paired with a truly good purpose, can create real world change for the better.</b>
            <br/><br/>
            Coming back from Uganda after a motorcycle wreck I dealt with a long-term Staph infection and remained state-bound and during that time worked remotely for Saint Francis Ministries while pursuing an English degree at West Texas A&M University in my hometown, Canyon, TX. Close to my last semester there I realized I needed to be writing a different kind of poetry: Code. And so I left WTAMU and worked full time as a freelance photographer and web developer for various projects but found a long-term contract at my friend Monti Smith's company EightyTwenty Meals in Amarillo, TX and began creating their website and ordering system and working as a general technology solutions guy. As start-up specializing in affordable pre-made meal-prep meals built around an anti-inflamitory whole foods diet EightyTwenty's mission & Monti's vision and goals spoke to me deeply as I believe a major part of doing good in this world is remaining healthy under the stresses of the world and feeling good enough to do that good work - and that all starts with getting the nurtiets our bodies need to handle whatever comes our way. 
            <br/><br/>
            When 'The Pandemic' hit in 2020 I was working in kitchens to make ends meet between photo shoots and freelance web work and was suddenly out of work as the lock-downs began. I was also living and working at <a href='http://www.mariposa.eco/' target="_blank" rel="noreferrer">The Mariposa Eco-Village & Land Trust in Amarillo, TX</a> as one of the artists in residence and helping out with the day-to-day AirBnB responsibilities and as the lock-down continued the board in charge of the land decided to close the AirBnB for the time (Thankfully as of 2022 it's back open! Go visit!) and I needed to make plans for the future.
            <br/><br/>
            Enter: <a href='https://www.bloomtech.com/hire-from-bloomtech' target='_blank' rel='noreferrer'>The Bloom Institute of Technology</a> where I studied fullstack development for 6 months while working building cabinents for a cabinent shop in Canyon, TX. In my last month of study at Bloom I worked on a real-world non-profit fullstack application for <a href='https://familypromise.org/' target='_blank' rel='noreferrer'>Family Promise</a> and through that program was hired out of the Bloom Labs early by the ad-tech start-up: <a href="https://www.audiohook.com/" target='_blank' rel='noreferrer'>Audiohook</a>, where I wore many hats as a QA & Testing lead, front-end & back-end & DevOps engineer for the next 10 months. It was truly a full-stack position and I learned a massive amount while part of the team there. However, the advertising industry has never had my heart in the way non-profit and mission-focused work has. While the compensation was fantastic and the team and technologies I worked with even better, I felt in my heart I needed to align my work with my heart & philosophies and set off on my current mission: to find a fullstack engineering team/position doing work that changes the world for the better as I continue to work with Saint Francis Ministries & EightyTwenty and form my own engineering-focused non-profit. 
            <br></br>
            <br></br>
            And so that's where I'm at now: doing freelance work for organizations I believe change the world for the better while looking for a full-time team to work within with the foremost goal in my mind being: to change the world for the better through great engineering and DevOps. 
            
            <br/><br/>
            If you belong to an organization that you believe is doing so and are looking for engineers please reach out to me on <a href="https://www.linkedin.com/in/eaburdett/" target="_blank" rel="noreferrer">Linkedin</a> or contact me at erikaburdet@gmail.com :)
            <br></br>
            <br></br>
            <div className='hero-btns justify-content center'>

          <GithubButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            CONTACT 
          </GithubButton>

          <LinkedinButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            RESUME 
          </LinkedinButton>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Contact
          </Button>

          <PrintsButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            FOR YOUR EYES 
          </PrintsButton>
        </div>


             </p>

            

        </div>
        
    </div>


  <Footer/>
  </>

  );
   

}

export default Contact;