import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Config from '../../config';
import history from '../../js/history';
import { getFromStorage, setInStorage } from '../../utils/storage';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

import '../../css/authentication/signin.css';

class Signin extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      submitDisable: false,
      submitName: 'SIGN IN',
      alertVisible: false,
      alertMessage: '',
      alertType: ''
    }
  }

  componentDidMount(){

  }

  pressEnter = async e => {
    if(e.key == 'Enter'){
      this.validateSignin();
    }
  }

  popAlert = async () => {
    await this.setState({ alertVisible: !this.state.alertVisible })
  }

  signinOnChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateSignin = () => {
    const {
      email,
      password
    } = this.state;

    if(!email || !password){
      this.setState({
        alertVisible: !this.state.alertVisible,
        alertMessage: 'Email and Password are required',
        alertType: 'warning'
      })
    }

    else {
      this.submitSignin();
    }
  }

  submitSignin = () => {
    //POST REQUEST TO BACKEND
    const {
      email,
      password
    } = this.state;

    this.setState({
      isLoading: true,
      submitDisable: true,
      submitName: 'SIGNING IN...'
    });
    fetch(Config.url + '/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => res.json())
    .then(json => {
      if(json.success){
        setInStorage('coinymous', { token: json.token });
        this.setState({
          isLoading: false,
          submitDisable: false,
          submitName: 'SIGN IN',
          token: json.token
        });
        history.replace('/');
      }else {
        this.setState({
          alertVisible: true,
          alertMessage: json.message,
          alertType: 'danger',
          isLoading: false,
          submitName: 'SIGN IN',
          submitDisable: false
        })
      }
    })
  }


  render(){


    return (
      <div className="signin">
        <Container>
          <div className="signinContent">
            <Row>
              <Col sm="12" md={{ size: 4, offset: 4 }}>
                <Alert className="alert" color={this.state.alertType} isOpen={this.state.alertVisible} toggle={this.popAlert}>
                  {this.state.alertMessage}
                </Alert>
                <Form className="form">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email"
                           name="email"
                           placeholder="Email"
                           onChange={this.signinOnChange}
                           onKeyPress={this.pressEnter}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type="password"
                           name="password"
                           placeholder="Password"
                           onChange={this.signinOnChange}
                           onKeyPress={this.pressEnter}
                    />
                  </FormGroup>
                  <Button onClick={this.validateSignin} color="primary" size="sm" disabled={this.state.submitDisable} block>{this.state.submitName}</Button>
                  <p>Not a member? <Link to="/signup">Sign up</Link></p>
                </Form>
                <Link to="/" className="goToHome">Go back to home</Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Signin;
