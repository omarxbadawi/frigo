import React from 'react';
import '.././index.css';
import axios from 'axios';
import { Layout, Menu,Breadcrumb} from 'antd';
// php files run oon apache server port 80
const API_PATH = 'index.php';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      cfpassword:''
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' ,"Access-Control-Allow-Origin": "*"},
      data: this.state
    })
    .then((response) => {
      console.log(response);
    })
   .catch((error)=>{
      console.log(error);
   });

  };
  render() {
    return (
        <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
          <Breadcrumb style={{ margin: '10px 0' }}>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>FRIGO</Breadcrumb.Item>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>Login</Breadcrumb.Item>
          </Breadcrumb>

          {/* react php connection testing here... */}
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."
            value={this.state.fname}
            onChange={e => this.setState({ fname: e.target.value })}
          />

          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."
            value={this.state.lname}
            onChange={e => this.setState({ lname: e.target.value })}
          />


          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          
          <label>Password</label>
          <input type="text" id="password" name="password" placeholder="Your password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />

        <label>Confirm Password</label>
          <input type="text" id="cfpassword" name="cfpassword" placeholder="Confirm Your password"
            value={this.state.cfpassword}
            onChange={e => this.setState({ cfpassword: e.target.value })}
          />


          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
       <p>Login page</p>
      </div>
    );
  }
}

