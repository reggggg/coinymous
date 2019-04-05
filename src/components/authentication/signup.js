import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Config from '../../config';
import history from '../../js/history';
import { getFromStorage, setInStorage } from '../../utils/storage';

import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

import '../../css/authentication/signup.css';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      alertVisible: false,
      alertMessage: '',
      alertType: '',
      submitDisable: false,
      submitName: 'SIGN UP'
    }
  }

  pressEnter = async e => {
    if(e.key == 'Enter'){
      this.validateSignup();
    }
  }

  popAlert = async () => {
    await this.setState({ alertVisible: !this.state.alertVisible })
  }

  signupOnChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateSignup = () => {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword
    } = this.state;

    if(!email || !firstName || !lastName || !password || !confirmPassword){
      this.setState({
        alertVisible: !this.state.alertVisible,
        alertMessage: 'All Fields are Required',
        alertType: 'warning'
      })
    }else if(password !== confirmPassword){
      this.setState({
        alertVisible: !this.state.alertVisible,
        alertMessage: 'Password and confirm password should be the same',
        alertType: 'danger'
      })
    }
    else {
      this.submitSignup();
    }
  }

  submitSignup = () => {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword
    } = this.state;

    this.setState({
       isLoading: true,
       submitDisable: true,
       submitName: 'SIGNING UP...'
     })

    fetch(Config.url + '/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
    }).then(res => res.json())
    .then(json => {
      if(json.success){
        setInStorage('coinymous', { token: json.token });
        this.setState({
          isLoading: false,
          submitDisable: false,
          submitName: 'SIGN UP',
          token: json.token
        });
        history.replace('/');
      }else {
        this.setState({
          alertVisible: true,
          alertMessage: json.message,
          alertType: 'danger',
          isLoading: false,
          submitName: 'SIGN UP',
          submitDisable: false
        });
        this.refsClear();
      }
    })
  }

  refsClear = () => {
    this.setState({
      email: '',
      password: '',
      confirmPassword: ''
    });
    document.getElementById('id_email').value = '';
    document.getElementById('id_password').value = '';
    document.getElementById('id_confirmPassword').value = '';
    document.getElementById('id_email').focus();
  }

  render(){

    const {
      isLoading
    } = this.state;


    return (
      <div className="signup">
        <Container>
          <div className="signupContent">
            <Row>
              <Col sm="12" md={{ size: 4, offset: 4 }}>
                <Alert className="alert" color={this.state.alertType} isOpen={this.state.alertVisible} toggle={this.popAlert}>
                  {this.state.alertMessage}
                </Alert>
                <Form className="form">
                  <FormGroup>
                    <Label>Email</Label>
                      <Input type="email"
                             id="id_email"
                             name="email"
                             placeholder="Email"
                             ref="emailRef"
                             onChange={this.signupOnChange}
                             onKeyPress={this.pressEnter}
                      />
                  </FormGroup>
                  <FormGroup>
                    <Label>First name</Label>
                      <Input type="text"
                             id="id_firstName"
                             name="firstName"
                             placeholder="First name"
                             ref="firstNameRef"
                             onChange={this.signupOnChange}
                             onKeyPress={this.pressEnter}
                      />
                  </FormGroup>
                  <FormGroup>
                    <Label>Last name</Label>
                      <Input type="text"
                             id="id_lastName"
                             name="lastName"
                             placeholder="Last name"
                             ref="lastNameRef"
                             onChange={this.signupOnChange}
                             onKeyPress={this.pressEnter}
                      />
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                      <Input type="password"
                             id="id_password"
                             name="password"
                             placeholder="Password"
                             ref="passwordRef"
                             onChange={this.signupOnChange}
                             onKeyPress={this.pressEnter}
                      />
                  </FormGroup>
                  <FormGroup>
                    <Label>Confirm Password</Label>
                      <Input type="password"
                             id="id_confirmPassword"
                             name="confirmPassword"
                             placeholder="Confirm Password"
                             ref="confirmPasswordRef"
                             onChange={this.signupOnChange}
                             onKeyPress={this.pressEnter}
                      />
                  </FormGroup>
                  <Button onClick={this.validateSignup} disabled={this.state.submitDisable} color="primary" size="sm" block>{this.state.submitName}</Button>
                  <p>Already a member? <Link to="/signin">Sign in</Link></p>
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
export default Signup;
