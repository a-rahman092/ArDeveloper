import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from 'mdbreact';
import './Section.css';

class Section extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapsed } = this.state;

    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id='apppage'>
        
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                  <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                    Create awesome Web Applications
                  </h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4'>
                    CHOOSE OUR WEB DESIGN SERVICES & YOUR BUSINESS CAN COUNT ON 100 PERCENT TRANSPARENCY
                  </h6>
                  <MDBBtn color='white'>Download</MDBBtn>
                  <MDBBtn outline color='white'>
                    Learn More
                  </MDBBtn>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md='6' xl='5' className='mt-xl-5'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src='https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__480.png'
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol md='12' className='text-center'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Section;
