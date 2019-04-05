import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../css/landingPage/roadmap.css';

class Roadmap extends Component {
  render(){

  const data = [
    {date: 'December 2017', body: 'Lorem sed risus ultricies tristique nulla aliquet enim tortor. Lacinia at quis risus sed. Elit pellentesque habitant morbi tristique senectus et. '},
    {date: 'December 2017', body: 'Lorem sed risus ultricies tristique nulla aliquet enim tortor. Lacinia at quis risus sed. Elit pellentesque habitant morbi tristique senectus et. '},
    {date: 'December 2017', body: 'Lorem sed risus ultricies tristique nulla aliquet enim tortor. Lacinia at quis risus sed. Elit pellentesque habitant morbi tristique senectus et. '},
  ]

    return (
      <div className="roadmap">
        <Container>
          <div className="roadmapContent">
            <h1>OUR STRATEGY AND PROJECT PLAN</h1>
            <p>Terms of service are rules by which one must agree to abide in order to use a service.</p>
            <div className="centerBetween">
              <Row className="firstRow">
                {
                  data.map((item, index) => (
                    <Col md="4" className="firstCol" key={index}>
                      <img className="roundCheck" src={require('../../images/landingPage/Icon_Ticked.svg')} />
                      <h5>{item.date}</h5>
                      <p>{item.body}</p>
                    </Col>
                  ))
                }
              </Row>
              <Row className="secondRow">
                {
                  data.map((item, index) => (
                    <Col md="4" className="secondCol" key={index}>
                      <img className="roundCheck" src={require('../../images/landingPage/Icon_Ticked.svg')} />
                      <h5>{item.date}</h5>
                      <p>{item.body}</p>
                    </Col>
                  ))
                }
              </Row>
              <Row className="thirdRow">
                {
                  data.map((item, index) => (
                    <Col md="4" className="thirdCol" key={index}>
                      <img className="roundCheck" src={require('../../images/landingPage/Icon_Ticked.svg')} />
                      <h5>{item.date}</h5>
                      <p>{item.body}</p>
                    </Col>
                  ))
                }
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Roadmap;
