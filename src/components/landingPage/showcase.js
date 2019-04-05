import React, {Component} from 'react';

import $ from 'jquery';
import { Container, Row, Col } from 'reactstrap';
import Particles from 'particlesjs';
import Clock from '../clock/clock';
import '../../css/landingPage/showcase.css';

class Showcase extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    Particles.init({
      selector: '.background',
      color: '#ecf0f1',
      sizeVariations: 3,
      connectParticles: false
    });
  }

  render(){
    return (
      <div className="showcase">
        <canvas className="background"></canvas>
        <Container>
          <Row className="centerBetween">
            <Col className="left" md="6">
              <h1>Blockchain rewards and loyalty platform for a $20B+ market</h1>
              <p>
                Merchants get a premium AI-powered rewards platform for free. Shoppers are rewarded for purchases with cryptocurrency.
              </p>
            </Col>
            <Col className="right" md="6">
              <div className="bordered">
                <h5>ICO ENDS IN</h5>
                  <Clock />
                <button>BUY CUSH CASH TOKENS</button>
                <Row className="worthOfTokens">
                  <Col>
                    <h4>$33,564,367</h4>
                    <h6>Worth of CC tokens</h6>
                  </Col>
                  <Col>
                    <h4>2,981</h4>
                    <h6>ETH Raised</h6>
                  </Col>
                </Row>
                <Row className="progress">
                  <Col><h6>$5m</h6></Col>
                  <Col><h6>$55m</h6></Col>
                </Row>
                <Row className="bar">
                  <Col className="barCol">
                    <div className="outerBar">
                      <div className="insideBar"></div>
                    </div>
                  </Col>
                </Row>
                <Row className="softHardCap">
                  <Col>
                    <span>Softcap in 789 days</span>
                  </Col>
                  <Col>
                    <span className="hardcap">Hardcap</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Showcase;
