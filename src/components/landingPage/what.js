import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/landingPage/what.css';

class What extends Component {
  render(){
    return (
      <div className="what">
        <Container>
          <div className="whatContent">
            <h1>WHAT IS CUSH CASH?</h1>
            <p>Lorem ipsum dolor este.</p>
            <Row className="centerBetween">
              <Col sm="6"></Col>
              <Col sm="6" className="right">
                <p>Cush Cash is a platform for the future of funding that is built on top of the Ethereum blockchain. It accelerates growth of start-up companies by offering tools and services that save both time and resources.</p>
                <p>Investors can use services to divide their investments between various services like P2P loans, crowdfunding, etc. The first version of the STMX allows startups to launch and manage crowdfunding and ICO campaigns.</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default What;
