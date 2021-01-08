import $ from 'jquery';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navba = ()=>{


    $(document).on('click',function(){
        $(window).on('scroll',function(){
          if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
          }
          else{
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
          }
        });
      
        $('.menu-toggler').on('click',function(){
          $(this).toggleClass("active");
          $(".navbar-menu").toggleClass("active");
        });
      });
     
      $(document).on('ready',function ($) {
        $('.works').magnificPopup({
        type: 'image',
        gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
              }
        // other options
      });
      });
      

   return(
    <nav className="navbar">
        <div className="inner-width">
            <a href="/" class="logo"></a>
            <button className="menu-toggler" >
        <span></span>
        <span></span>
        <span></span>
      </button>
            <div className="navbar-menu">
                <a href="/#home">Home</a>
                <a href="/#about">About</a>
                <a href="/#services">Quick Links</a>
                <a href="/#education">Education</a>
                <a href="/#works">Works</a>
                <a href ="/teqip">TEQIP</a>
                <a href="/#contact">Contact</a>
            </div>
        </div>
    </nav>
   )
}

export default Navba;