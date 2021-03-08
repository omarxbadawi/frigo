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
        <Carousel autoplay>
              <div>
              <img src={Img1} style={{height:"300px", width:"350px"}}></img>
                <p> food1</p>
              </div>
              <div>
              <img src={Img1} style={{height:"300px", width:"350px"}}></img>
                <p> food2</p>
              </div>
              <div>
              <img src={Img1} style={{height:"300px", width:"350px"}}></img>
                <p> food3</p>
              </div>
              <div>
              <img src={Img1} style={{height:"300px", width:"350px"}}></img>
               <p> food4</p>
              </div>
              </Carousel>
        <p>Our gourp numbers are ...</p>
      </div>

    );
  }
}

