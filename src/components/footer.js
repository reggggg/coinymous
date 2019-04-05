import React, {Component} from 'react';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../css/footer.css';

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false,
      languageSelected: 'EN'
    }
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  langSelect = async (lang) => {
    await this.setState({
      languageSelected: lang
    })
    console.log(this.state.languageSelected);
  }

  render(){
    const lang = [
      {lang: 'English', value: 'EN'},
      {lang: 'Filipino', value: 'FIL'},
      {lang: 'Chinese', value: 'CHI'},
      {lang: 'Japanese', value: 'JAP'},
      {lang: 'German', value: 'GER'},
    ]

    return (
      <div className="footer">
        <Container>
          <div className="footerContent">
            <Row className="centerBetween">
              <Col md="5" className="firstCol">
                <h6>Copyright © Cush Cash 2018. All rights reserved.</h6>
              </Col>
              <Col md="2" className="secondCol">
                <img src={require('../images/landingPage/CushCash-Logo-01.svg')} alt=""/>
              </Col>
              <Col md="5" className="thirdCol">
                <a href="#">About</a>
                <a href="#">Roadmap</a>
                <a href="#">Whitepaper</a>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle className="language" caret>{this.state.languageSelected}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Select Language</DropdownItem>
                    {
                      lang.map((item, index) => (
                        <DropdownItem key={index} onClick={() => this.langSelect(item.value)}>{item.lang}</DropdownItem>
                      ))
                    }
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Footer;
