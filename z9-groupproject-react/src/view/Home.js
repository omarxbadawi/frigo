import React from 'react';
import '.././index.css';
import { Layout, Menu,Breadcrumb} from 'antd';


export default class Home extends React.Component {

  render() {
    return (
        <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
          <Breadcrumb style={{ margin: '10px 0' }}>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>FRIGO</Breadcrumb.Item>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>HOME</Breadcrumb.Item>
          </Breadcrumb>
          <h1>This is our HomePage</h1>
          <p>Our gourp numbers are ...</p>
        </div>
       
    );
  }
}

