import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
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
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBModal, MDBModalBody, MDBModalHeader, MDBInput
  , MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption
} from "mdbreact";
import { Link } from 'react-scroll';
import AddToHomescreen from 'react-add-to-homescreen';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import "./Section.css";


import registerServiceWorker from "./registerServiceWorker";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color="indigo" dark expand="md" style={{ zIndex: 2 }} className="fixed-top">
          <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!"><li><Link to="apppage" spy={true} smooth={true}>Home</Link></li></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!"><li><Link to="features" spy={true} smooth={true}>Features</Link></li></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!"><li><Link to="pricing" spy={true} smooth={true}>Pricing</Link></li></MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!"><li><Link to="about" spy={true} smooth={true}>About Us</Link></li></MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}
class Section extends React.Component {
  state = {
    collapsed: false,
    modal14: false
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }




  render() {

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage" style={{ zIndex: 1 }}>
        <MDBView>
          <MDBMask className="white-text gradient" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className="d-flex justify-content-center white-text align-items-center"
          >
            <MDBRow>
              <MDBCol md="6" className="text-center text-md-left mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Create awesome Web Applications
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    HTML, CSS, BOOTSTRAP, JAVASCRIPT, JQUERY, REACT, PHP & MANY
                    MORE
                  </h6>
                  <MDBBtn color="deep-orange" onClick={this.toggle(14)}>REQUEST A QUOTE</MDBBtn>


                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978__480.png"
                    alt=""
                    className="img-fluid"
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>

            <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered className="text-dark">
              <MDBModalHeader toggle={this.toggle(14)}>Create Website</MDBModalHeader>
              <MDBModalBody className="px-5">
                <form action="https://formspree.io/f/moqpzoon" method="POST">
                  <div className="grey-text">

                    <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                      success="right" name="fullname" />
                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                      success="right" name="email" />
                    <MDBInput label="Type of Website" icon="tag" group type="text" validate error="wrong" success="right" name="type" />
                    <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" name="message" />
                  </div>
                  <div className="text-center">

                    <MDBInput type="submit" value="submit" className="btn btn-info pt-2" />
                  </div>

                </form>

              </MDBModalBody>

            </MDBModal>
          </MDBContainer>
        </MDBView>



      </div>

    );
  }

}

class Features extends React.Component {
  render() {
    return (
      <section className="text-center my-5" id="features">
        <h2 className="h1-responsive font-weight-bold my-5">
          Why is it so great?
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <MDBRow className="container-fluid">
          <MDBCol md="4">
            <MDBIcon icon="chart-area" size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4">Analytics</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="book" size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-4">Tutorials</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon far icon="comments" size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4">Support</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}
class Pricing extends React.Component {
  state = {
    modal14: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  render() {
    return (
      <section className="my-5" id="contact" id="pricing">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Pricing
        </h2>

        <MDBRow center className="container-fluid">
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard cascade narrow ecommerce>
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                  <strong>
                    Convert Website to Android App
                      </strong><hr />
                  <h2>$10</h2>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon far icon="star" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <MDBBtn color="default" size="sm" onClick={this.toggle(14)}>Place an order</MDBBtn>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard cascade narrow ecommerce>
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                  <strong>
                    Static Website
                      </strong><br /><br /><hr />
                  <h2>$20</h2>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <MDBBtn color="default" size="sm" onClick={this.toggle(14)}>Place an order</MDBBtn>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
            <MDBCard cascade narrow ecommerce>
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle>
                  <strong>
                    Dynamic Website
                      </strong><br /><br /><hr />
                  <h2>$20</h2>
                </MDBCardTitle>
                <ul className="rating">
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon icon="star" />
                  </li>
                  <li>
                    <MDBIcon far icon="star-half" />
                  </li>
                </ul>
                <MDBCardText>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit.
                </MDBCardText>
                <MDBCardFooter className="px-1">
                  <MDBBtn color="default" size="sm" onClick={this.toggle(14)}>Place an order</MDBBtn>
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered className="text-dark">
          <MDBModalHeader toggle={this.toggle(14)}>Create Website</MDBModalHeader>
          <MDBModalBody className="px-5">
            <form action="https://formspree.io/f/moqpzoon" method="POST">
              <div className="grey-text">

                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" name="fullname" />
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" name="email" />
                <MDBSelectInput selected="Choose your country" />
                <MDBSelectOptions>
                  <MDBSelectOption disabled>Type of Service</MDBSelectOption>
                  <MDBSelectOption value="Website to Android App Convert">Website to Android App Convert</MDBSelectOption>
                  <MDBSelectOption value="Static">Static</MDBSelectOption>
                  <MDBSelectOption value="Dynamic">Dynamic</MDBSelectOption>

                </MDBSelectOptions>
                <MDBInput label="Type of Website" icon="tag" group type="text" validate error="wrong" success="right" name="type" />
                <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" name="message" />
              </div>
              <div className="text-center">

                <MDBInput type="submit" value="submit" className="btn btn-info pt-2" />
              </div>

            </form>

          </MDBModalBody>

        </MDBModal>
      </section>

    );
  }
}
class About extends React.Component {
  render() {
    return (
      <MDBContainer id="about">
        <section className="team-section text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Testimonials v.3
          </h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>


          <div>
            <div className="mx-auto">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                alt=""
                className="rounded-circle z-depth-1 img-fluid"
              />
            </div>
            <h4 className="font-weight-bold dark-grey-text mt-4">
              Anna Deynah
                </h4>
            <h6 className="font-weight-bold blue-text my-3">
              Web Designer
                </h6>
            <p className="font-weight-normal dark-grey-text">
              <MDBIcon className="fa fa-quote-left pr-2" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
            <div className="orange-text">
              <MDBIcon icon="star" />
              <MDBIcon icon="star" />
              <MDBIcon icon="star" />
              <MDBIcon icon="star" />
              <MDBIcon far icon="star-half" />
            </div>
          </div>

        </section>
      </MDBContainer>
    );
  }
}
class Footer extends React.Component {
  render() {
    return (

      <div className="footer-copyright text-center py-3 bg-primary text-white">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Mohd Abdul Rahman
        </MDBContainer>
      </div>

    );
  }
}


ReactDOM.render(<Navbar />, document.getElementById("root"));
ReactDOM.render(<Section />, document.getElementById("section"));
ReactDOM.render(<Features />, document.getElementById("features"));
ReactDOM.render(<Pricing />, document.getElementById("pricing"));
ReactDOM.render(<About />, document.getElementById("about"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

registerServiceWorker();
