import React from 'react';
import '.././index.css';
import axios from 'axios';
import { Layout, Menu,Breadcrumb} from 'antd';
// php files run oon apache server port 80
const API_PATH = 'http://localhost/index.php';

export default class Account extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })

  };
  render() {
    return (
        <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
          <Breadcrumb style={{ margin: '10px 0' }}>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>FRIGO</Breadcrumb.Item>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>Accounts</Breadcrumb.Item>
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


          <label>Message</label>
          <textarea id="message" name="message" placeholder="Write something.."
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
          ></textarea>
          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
       <p>History</p>
      </div>
    );
  }
}

