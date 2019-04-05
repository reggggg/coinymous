import React, {Component} from 'react';
import { Container, Row, Col, Collapse, CardBody, Card } from 'reactstrap';

import '../../css/landingPage/faq.css';

class Faq extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: 0,
      data: [
        {active: false, questions: 'What is Cush Cash?', body: 'Investors can use services to divide their investments between various services like P2P loans, crowdfunding, etc. The first version of the STMX allows startups to launch and manage crowdfunding and ICO campaigns.'},
        {active: true, questions: 'What cryptocurrencies can I use to purchase?', body: 'Investors can use services to divide their investments between various services like P2P loans, crowdfunding, etc. The first version of the STMX allows startups to launch and manage crowdfunding and ICO campaigns.'},
        {active: false, questions: 'How can I participate in the ICO Token sale?', body: 'Investors can use services to divide their investments between various services like P2P loans, crowdfunding, etc. The first version of the STMX allows startups to launch and manage crowdfunding and ICO campaigns.'},
        {active: false, questions: 'How do I benefit from the ICO Token?', body: 'Investors can use services to divide their investments between various services like P2P loans, crowdfunding, etc. The first version of the STMX allows startups to launch and manage crowdfunding and ICO campaigns.'}
      ],
    }
  }

  toggle = async (id) => {
    let collapseDynamic = JSON.parse(JSON.stringify(this.state.data));
    collapseDynamic[id].active = !collapseDynamic[id].active;
    await this.setState({
      id: id,
      data: collapseDynamic
    })
    // console.log('collapse: ', this.state.data[id].active);
  }


  render(){
    const iconId = this.state.id;
    let toggleIcon;
    if(this.state.data[iconId].active === true){
      toggleIcon = require('../../images/landingPage/Icon_FAQ-.svg');
    }else {
      toggleIcon = require('../../images/landingPage/Icon_FAQ+.svg');
    }

    return (
      <div className="faq">
        <Container>
          <div className="faqContent">
            <h1>COMMON QUESTIONS</h1>
            <p>Frequently Asked Questions</p>
            <Row className="centerBetween">
              <Col sm="6" className="left">
                {
                  this.state.data.map((item, index) => (
                    <div className="block" key={index}>
                      <div className="titleBar" onClick={() => this.toggle(index)}>
                        <span>
                          {item.questions}
                          <img src={toggleIcon} onClick={() => this.toggle(index)} />
                        </span>
                      </div>
                      <Collapse isOpen={item.active}>
                        <Card>
                          <CardBody><p>{item.body}</p></CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  ))
                }
              </Col>
              <Col sm="6" className="right">
                <p>We’ve provide interdum velit laoreet id donec ultrices tincidunt arcu. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Lacus vestibulum sed arcu non. Mi tempus imperdiet nulla malesuada. Turpis cursus in hac habitasse platea.</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Faq;
