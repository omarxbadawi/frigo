import React from 'react';
import '.././index.css';
import './../assets/css/index.css';
import { Layout, Menu, Breadcrumb,Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
  background: '#364d79',
};

export default class Home extends React.Component {

  render() {
    return (
      <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
        <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item style={{ color: "#fa8c16" }}>FRIGO</Breadcrumb.Item>
          <Breadcrumb.Item style={{ color: "#fa8c16" }}>HOME</Breadcrumb.Item>
        </Breadcrumb>
        <h1>This is our HomePage</h1>
        <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
              </Carousel>
        <p>Our gourp numbers are ...</p>
      </div>

    );
  }
}

