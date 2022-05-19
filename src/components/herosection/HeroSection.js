import React from 'react';
import '../../App.css';
import './HeroSection.css';
import {ProjectsButton} from '../buttons/ProjectsButton';
import {MerchButton} from '../buttons/MerchButton';
import {GithubButton}  from '../buttons/GithubButton'
import {PrintsButton} from '../buttons/PrintsButton';
import { LinkedinButton } from '../buttons/LinkedinButton';
import { BlogButton } from '../buttons/BlogButton';
import {Button} from '../buttons/Button';


function HeroSection() {
    return (
      <div className='hero-container'>
        
        <h1>Erik Burdett</h1>
        <h4 className ="title-margin-top"></h4>
        {/* <h4><i class="fas fa-dharmachakra"></i></h4> */}
          
        
        <h4>Full Stack Web Developer - Copy Writer - Photography - Content Creation </h4>
        <h4 className="title-margin-bottom"></h4>
        <h6>React - Node - Python - SQL - SQLite - Postgress - CSS - HTML - Javascript - Adobe Suite - Wordpress - Strapi - Headless CMSs - Photography & Video - Writing - Copy Writing - Editing - Publishing - Social Media Management </h6>
        <div className='hero-btns'>
          {/* <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            SHOP
          </Button> */}
          <GithubButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            CONTACT 
          </GithubButton>
          <MerchButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            MERCH
          </MerchButton>
          <LinkedinButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            RESUME 
          </LinkedinButton>
          <ProjectsButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            PROJECTS 
          </ProjectsButton>
          <BlogButton
          className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            BLOG
          </BlogButton>
          <PrintsButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            FOR YOUR EYES 
          </PrintsButton>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  