import React, { Component } from 'react'

import logo from "../../assets/images/logo.png";

 class Header extends Component {  
  constructor() {
    super()

    this.isDropdownVisible = false;
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  render() {
    return (
      <div className="header fixed-header flex-row-center" >
        <div className="container flex-row-center" style={{justifyContent:"space-between"}}>
        <div>
          <img src={logo} style={{cursor: 'pointer'}} className="header-logo" onClick={() => {window.location.assign('/')}}/>
        </div>
        <div  className="header-right">
          <ul className='font-medium-14-dark flex-row-center'>
            <li className='flex-row-center' style={{marginLeft: '20px', height: '30px', position: 'relative', display: window.location.pathname === '/' ? 'flex' : 'none'}} onClick={this.toggleDropdown}>
              Business Types
              <div className="triangle-down"></div>

              <div id="header_dropdown" style={{display: 'flex', visibility: 'hidden', flexDirection: 'column', position: 'absolute', top: '31px', left: '-4px', boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.2)', backgroundColor: 'white', padding: '9px 0',borderRadius: '8px', width: '126px'}}>
                <a href="#" style={{padding: '7px 14px', fontSize: '13px', fontWeight: 'bold'}} data-id="retail" onClick={this.scrollToDiv}>General Retail</a>
                <a href="#" style={{padding: '7px 14px', fontSize: '13px', fontWeight: 'bold'}} data-id="restaurants" onClick={this.scrollToDiv}>Restaurants</a>
                <a href="#" style={{padding: '7px 14px', fontSize: '13px', fontWeight: 'bold'}} data-id="grocery" onClick={this.scrollToDiv}>Grocery</a>
                <a href="#" style={{padding: '7px 14px', fontSize: '13px', fontWeight: 'bold'}} data-id="spa" onClick={this.scrollToDiv}>Spa & Salon</a>
              </div>
            </li>
            <li className='flex-row-center' style={liStyle}>
              <a href="/solutions">Solutions</a>
            </li>
            <li className='flex-row-center' style={liStyle}>
              <a href="/getInTouch">Support</a>
            </li>
            <li className='flex-row-center' style={liStyle}>
              <a href="/pricing">Pricing</a>
            </li>
            <li className='flex-row-center' style={liStyle}>
              <a href="">Login</a>
            </li>
            <li className='flex-row-center' style={liStyle}>
              <button style={btnStyle}>
                Signup for FREE! 
              </button>
            </li>
          </ul>
        </div>
        </div>
      </div>
    )
  }

  toggleDropdown() {
    let self = this;
    let dropdown = document.getElementById('header_dropdown');
    if (this.isDropdownVisible) {
      dropdown.style.visibility = 'hidden';
    }
    else {
      dropdown.style.visibility = 'visible';

      let fun = function() {
        dropdown.style.visibility = 'hidden';
        self.isDropdownVisible = false;
        document.removeEventListener('click', fun);
      }
      document.addEventListener('click', fun)
    }

    this.isDropdownVisible = !this.isDropdownVisible;
  }

  scrollToDiv(e) {
    let $ = window.$;
    let id = $(e.target).data('id');
    $('html, body').animate({
        scrollTop: $('#'+id).offset().top-68
    }, 1000);
  }
}

const btnStyle={
  width: 'fit-content',
  height: '30px',
  borderRadius: '15px',
  border: 'solid 1px #212b36',
  padding: '0 10px'
}


const liStyle={
    marginLeft: '20px',
    height: '30px',
}


export default  Header;
