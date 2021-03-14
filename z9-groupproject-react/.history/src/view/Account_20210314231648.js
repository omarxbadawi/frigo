import React from 'react';
import '.././index.css';
import { Layout, Menu,Breadcrumb} from 'antd';


export default class Account extends React.Component {

  render() {
    return (
        <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
          <Breadcrumb style={{ margin: '10px 0' }}>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>FRIGO</Breadcrumb.Item>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>Accounts</Breadcrumb.Item>
          </Breadcrumb>

          {/* react php connection testing here... */}
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />


          <label>Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          <input type="submit" value="Submit" />
       <p>History</p>
      </div>
    );
  }
}

