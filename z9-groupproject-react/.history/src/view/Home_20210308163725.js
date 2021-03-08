import React from 'react';
import '.././index.css';
import './../assets/css/index.css';
import { Layout, Menu, Breadcrumb,Carousel } from 'antd';
import Img1 from "../assets/img/Homepage1.jpg"
import Img2 from "../assets/img/Homepage2.jpg"
import Img3 from "../assets/img/Homepage3.jpg"
import Img4 from "../assets/img/Homepage4.jpg"

const contentStyle = {
  height: '500px',
  lineHeight: '500px'
};

export default class Home extends React.Component {

  render() {
    return (
      <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
        <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item style={{ color: "#fa8c16" }}>FRIGO</Breadcrumb.Item>
          <Breadcrumb.Item style={{ color: "#fa8c16" }}>HOME</Breadcrumb.Item>
        </Breadcrumb>

        <image src={Img1} style={{height:"150px", width:"150px"}}></image>
        <h1>This is our HomePage</h1>
        <Carousel autoplay>
              <div>
                <image src={Img1} style={{height:"150px", weight:"150px"}}></image>
                {/* <h3 style={contentStyle}>1</h3> */}
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

