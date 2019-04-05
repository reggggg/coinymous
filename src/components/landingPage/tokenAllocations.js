import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import PieChart from 'react-minimal-pie-chart';

import '../../css/landingPage/tokenAllocations.css';

class TokenAllocations extends Component {
  render(){

  const fund = [
    {color: require('../../images/landingPage/Icon_TokenAloc1.svg'), title: '350 millions', subtitle: 'Token'},
    {color: require('../../images/landingPage/Icon_TokenAloc2.svg'), title: '150 millions', subtitle: 'Token Sale'},
    {color: require('../../images/landingPage/Icon_TokenAloc3.svg'), title: '10 millions', subtitle: 'Hard Cap'},
    {color: require('../../images/landingPage/Icon_TokenAloc4.svg'), title: '$0.04', subtitle: 'Coin Price'},
  ]

  const token = [
    {color: require('../../images/landingPage/Icon_TokenAloc1.svg'), title: '45%', subtitle: 'Community'},
    {color: require('../../images/landingPage/Icon_TokenAloc2.svg'), title: '25%', subtitle: 'Reserved Funding'},
    {color: require('../../images/landingPage/Icon_TokenAloc3.svg'), title: '9%', subtitle: 'Founders and Team'},
    {color: require('../../images/landingPage/Icon_TokenAloc4.svg'), title: '3%', subtitle: 'Advisors'},
    {color: require('../../images/landingPage/Icon_TokenAloc9.svg'), title: '2%', subtitle: 'Bounty Campaign'},
  ]

  const chart1 = [
    { value: 10, color: '#8FAFBD' },
    { value: 10, color: '#194789' },
    { value: 20, color: '#0A1725' },
    { value: 60, color: '#CF3632' }
  ]

  const chart2 = [
    { value: 5, color: '#FEFEFE' },
    { value: 10, color: '#8FAFBD' },
    { value: 10, color: '#194789' },
    { value: 15, color: '#0A1725' },
    { value: 60, color: '#CF3632' }
  ]

    return (
      <div className="tokenAllocations">
        <Container>
          <div className="tokenAllocationsContent">
            <h1>TOKEN ALLOCATIONS</h1>
            <p>Terms of service are rules by which one must agree to abide in order to use a service.</p>
            <Row className="centerBetween">
              <Col md="4" className="firstCol">
                <p>Lorem sed risus ultricies tristique nulla aliquet enim tortor. Lacinia at quis risus sed. Elit pellentesque habitant morbi tristique senectus et. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a.</p>
                <p>In order to make Cush Cash token distirbution process more efficient, the CushCash price will be linked to ETH</p>
                <h4>1 CCT = 0.00015 ETH</h4>
                <button>BUY CUSH CASH TOKENS</button>
              </Col>
              <Col md="4" className="secondCol">
                <h3>Fund Distribution</h3>
                <PieChart
                  animate={true}
                  className="pieChart1"
                  data={chart1}
                />
                <ul className="funds">
                  {
                    fund.map((item, index) => (
                      <li key={index}>
                        <span><img src={item.color} /> {item.title} - <label>{item.subtitle}</label></span>
                      </li>
                    ))
                  }
                </ul>
              </Col>
              <Col md="4" className="thirdCol">
                <h3>Token Distribution</h3>
                <PieChart
                  animate={true}
                  className="pieChart2"
                  data={chart2}
                />
                <ul className="tokens">
                  {
                    token.map((item, index) => (
                      <li key={index}>
                        <span><img src={item.color} /> {item.title} - <label>{item.subtitle}</label></span>
                      </li>
                    ))
                  }
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default TokenAllocations;
