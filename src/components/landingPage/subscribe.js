import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../css/landingPage/subscribe.css';
class Subscribe extends Component {
  render(){
    return (
      <div className="subscribe">
        <Container>
          <div className="subscribeContent">
            <h1>SUBSCRIBE</h1>
            <p>Let’s stay connected</p>
            <Row className="centerBetween">
              <Col md="6" className="left">
                <p>We’ve provide interdum velit laoreet id donec ultrices tincidunt arcu. Fringilla phasellus faucibus scelerisque.</p>
              </Col>
              <Col md="6" className="right">
                <span>
                  <input type="email" placeholder="Your Email"/>
                  <button>Submit</button>
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Subscribe;
