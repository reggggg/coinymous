import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../css/landingPage/why.css';

class Why extends Component {
  render(){
    const data = [
      {
        img: require('../../images/landingPage/Icon-Feature1.svg'),
        title: 'Global Single-Platform',
        body: 'Investors can use services to divide their investments between various services like P2P loans, crowdfunding, etc. The first version of the STMX allows startups to launch and manage crowdfunding and ICO campaigns.'
      },
      {
        img: require('../../images/landingPage/Icon-Feature2.svg'),
        title: 'Safe and Secure',
        body: 'Investors can use services to divide their investments between various services like P2P loans, crowdfunding, etc. The first version of the STMX allows startups to launch and manage crowdfunding and ICO campaigns.'
      },
      {
        img: require('../../images/landingPage/Icon-Feature3.svg'),
        title: 'Decentralize Payment System',
        body: 'Investors can use services to divide their investments between various services like P2P loans, crowdfunding, etc. The first version of the STMX allows startups to launch and manage crowdfunding and ICO campaigns.'
      }
    ]
    return (
      <div className="why">
        <Container>
          <div className="whyContent">
            <h1>WHY CUSH CASH?</h1>
            <p>Lorem ipsum dolor este.</p>
            <Row className="items">
              {
                data.map((item, index) => (
                  <Col className="itemsCol" sm="4" key={index}>
                    <center><img src={item.img} /></center>
                    <h5>{item.title}</h5>
                    <p>{item.body}</p>
                  </Col>
                ))
              }
            </Row>
            <div className="subContent">
              <h2>HOW IT WORKS?</h2>
              <p>Lorem ipsum dolor este.</p>
              <p>Tincidunt arcu non sodales neque. Faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. In fermentum et sollicitudin ac orci phasellus egestas tellus. Ut porttitor leo a diam sollicitudin. Purus semper eget duis at tellus at urna condimentum. Aliquam faucibus purus in massa tempor nec feugiat. Neque aliquam vestibulum morbi blandit cursus. Morbi leo urna molestie at elementum eu. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Why;
