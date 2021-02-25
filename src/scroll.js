import React from "react";
import { MDBSmoothScroll } from "mdbreact";

class ScrollSpyPage extends React.Component {
    state = {
      isOpen: false
    };
    render() {
      return (
    <div>
      <MDBSmoothScroll to="section1">Section 1</MDBSmoothScroll>
      <MDBSmoothScroll to="section2">Section 2</MDBSmoothScroll>

      <div id="section1">
        <h3>Section 1</h3>
        <hr />
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
      </div>


      <div id="section2">
        <h3>Section 2</h3>
        <hr />
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
        <h5>Smooth Scroll Example</h5>
      </div>
    </div>
  );
}
}

export default ScrollSpyPage;