import React, {Component} from 'react';


import { Container, Row, Col } from 'reactstrap';
import '../../css/landingPage/legal.css';

class Legal extends Component {


  render(){

    const flags = [
      {img: require('../../images/landingPage/Icon-EngFlag.png'), lang: 'English', downloadIco: require('../../images/landingPage/Icon-Download.svg') },
      {img: require('../../images/landingPage/Icon-ChinFlag.png'), lang: 'Chinese', downloadIco: require('../../images/landingPage/Icon-Download.svg') },
      {img: require('../../images/landingPage/Icon-JapFlag.png'), lang: 'Japanese', downloadIco: require('../../images/landingPage/Icon-Download.svg') },
      {img: require('../../images/landingPage/Icon-GerFlag.png'), lang: 'German', downloadIco: require('../../images/landingPage/Icon-Download.svg') }
    ]

    return (
      <div className="legal">
        <Container>
          <div className="legalContent">
            <h1>LEGAL DOCUMENTATIONS</h1>
            <p>Terms of service are rules by which one must agree to abide in order to use a service.</p>
            <Row className="docs">
              <Col md="4" className="left">
                <center><img src={require('../../images/landingPage/Image-WhitePaper.png')} alt=""/></center>
              </Col>
              <Col md="8" className="right">
                <h5>Read Whitepaper</h5>
                <p>A white paper is an authoritative report or guide that informs readers concisely about a complex issue and presents the ussuing body’s philosophy on the matter. It. is meant to help readers understood on issue, solve a problem, or make a decision.</p>
                <p>The initial British term concerning ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Row className="flags">
                  {
                    flags.map((item, index) => (
                      <Col className="eachFlag" key={index}>
                        <center><img src={item.img} /></center><br/>
                        <span><img src={item.downloadIco} /> {item.lang}</span>
                      </Col>
                    ))
                  }
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Legal;
