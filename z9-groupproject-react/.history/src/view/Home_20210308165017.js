import React from 'react';
import '.././index.css';
import './../assets/css/index.css';
import { Layout, Menu, Breadcrumb,Carousel } from 'antd';
import Img1 from "../img/Homepage1.jpeg"
import Img2 from "../img/Homepage2.jpg"
import Img3 from "../img/Homepage3.jpg"
import Img4 from "../img/Homepage4.jpg"


export default class Home extends React.Component {

  render() {
    return (
      <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
        <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item style={{ color: "#fa8c16" }}>FRIGO</Breadcrumb.Item>
          <Breadcrumb.Item style={{ color: "#fa8c16" }}>HOME</Breadcrumb.Item>
        </Breadcrumb>

        <h1>This is our HomePage</h1>
        <img src={Img1} style={{height:"150px", weight:"150px"}}></img>
        <image src={Img2} style={{height:"150px", weight:"150px"}}></image>
        <image src={Img3} style={{height:"150px", weight:"150px"}}></image>
        <image src={Img4} style={{height:"150px", weight:"150px"}}></image>
        <Carousel autoplay>
              <div>
                <p> food1</p>
              </div>
              <div>
                <p> food2</p>
              </div>
              <div>
                <p> food3</p>
              </div>
              <div>
               <p> food4</p>
              </div>
              </Carousel>
        <p>Our gourp numbers are ...</p>
      </div>

    );
  }
}

