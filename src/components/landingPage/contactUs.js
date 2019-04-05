import React, {Component} from 'react';
import { Container, Row, Col, Button, Alert } from 'reactstrap';

import '../../css/landingPage/contactUs.css';


class ContactUs extends Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
      sending: 'Send Message',
      disabledButton: false
    }
  }

  onDismiss = async () => {
    await this.setState({ visible: !this.state.visible })
    setTimeout(() => {
      this.setState({
        visible: !this.state.visible,
        sending: 'Send Message',
        disabledButton: false

      });
    }, 4000)

    if(this.state.visible === true){
      this.setState({
        sending: 'Sending...',
        disabledButton: true
      });
    }
  }

  render(){

  const contacts = [
    {icon: require('../../images/landingPage/Icon-Phone.svg'), text: '+63 0123 9876'},
    {icon: require('../../images/landingPage/Icon-Mail.svg'), text: 'info@dreamtech.net'},
    {icon: require('../../images/landingPage/Icon-Tele.svg'), text: 'Join us on Telegram'}
  ]

    return (
      <div className="contactUs">
        <Container>
          <div className="contactUsContent">
            <h1>REQUEST A CALL BACK</h1>
            <p>Contact us now!</p>
            <p>Would you like to speak to one of our financial advisers over the phone? <br/> Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.</p>
            <div className="centerBetween">
              <Row>
                <Col md="6" className="left">
                  <p>Any questions? Reach out to us and we’ll get back to you shortly.</p>
                  {
                    contacts.map((item, index) => (
                      <div className="eachItem" key={index}>
                        <img src={item.icon} />
                        <span>{item.text}</span>
                      </div>
                    ))
                  }
                </Col>
                <Col md="6" className="right">
                  <Alert className="alert" color="danger" isOpen={this.state.visible}>
                    API Still not ready...
                  </Alert>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                  <textarea name="" id="" cols="30" rows="7" placeholder="Your Message"></textarea>
                  <button className="submit"
                          onClick={this.onDismiss}
                          disabled={this.state.disabledButton}
                        >{this.state.sending}
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default ContactUs;
