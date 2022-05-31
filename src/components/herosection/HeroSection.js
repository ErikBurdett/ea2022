import React from 'react';
import '../../App.css';
import './HeroSection.css';
import {GithubButton}  from '../buttons/GithubButton'
import {PrintsButton} from '../buttons/PrintsButton';
import { LinkedinButton } from '../buttons/LinkedinButton';
import {Button} from '../buttons/Button';


function HeroSection() {
    return (
      <div className='hero-container'>
        
        <h1>Erik Burdett</h1>
        <h4 className ="title-margin-top"></h4>
        {/* <h4><i class="fas fa-dharmachakra"></i></h4> */}
          
        
        <h4>Full Stack Web Developer - Writer - Photographer </h4>
        <h4 className="title-margin-bottom"></h4>
        <h6>React - Node - Python - Flask - SQL(etc) - DevOps - Adobe Suite - Wordpress </h6>
        <h6 className="italic-text">If it's got Docs I can learn it!</h6>
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
          {/* <MerchButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            MERCH
          </MerchButton> */}
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
          {/* <ProjectsButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            PROJECTS 
          </ProjectsButton> */}
          {/* <BlogButton
          className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            BLOG
          </BlogButton> */}
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
  