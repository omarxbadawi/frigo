import React from 'react';
import '.././index.css';
import axios from 'axios';
import { Layout, Menu,Breadcrumb} from 'antd';
import Password from 'antd/lib/input/Password';
// php files run oon apache server port 80
const API_PATH = 'logIn.php';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      Password: '',
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
          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
       <p>SignupPage</p>
      </div>
    );
  }
}

