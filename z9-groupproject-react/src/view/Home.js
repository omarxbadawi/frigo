import React from 'react';
import '.././index.css';
import './../assets/css/index.css';
import { Layout, Menu, Breadcrumb,Carousel,Typography,Divider, Tabs} from 'antd';
import Img1 from "../img/Homepage1.jpeg"
import Img2 from "../img/Homepage2.jpg"
import Img3 from "../img/Homepage3.jpg"
import Img4 from "../img/Homepage4.jpg"
import Img5 from "../img/Homepage5.jpg"
import Img6 from "../img/Homepage6.jpg"
import Img7 from "../img/Homepage7.jpg"
import Img8 from "../img/Homepage8.jpg"
import Img9 from "../img/Homepage9.jpg"
import Img10 from "../img/Homepage10.jpg"

const { Title, Paragraph, Text, Link} = Typography;
const { TabPane } = Tabs;


export default class Home extends React.Component {

  render() {
    return (
      <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>

        <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item style={{ color: "#fa8c16" }}>FRIGO</Breadcrumb.Item>
          <Breadcrumb.Item style={{ color: "#fa8c16" }}>HOME</Breadcrumb.Item>
        </Breadcrumb>
        
        <Typography>
          <Title level={3} style={{color:"#fa8c16"}}>You Are What You Eat</Title>

          <Carousel autoplay>
              <div>
              <div style={{display:"inline-block"}}><img src={Img5} 
                  style={{height:"300px", width:"450px", marginLeft:"20px", marginRight:"40px"}}></img></div>
              <div style={{display:"inline-block"}}><img src={Img6} style={{height:"300px", width:"450px"}}></img></div>
              </div>

              <div>
              <div style={{display:"inline-block"}}><img src={Img1} 
                  style={{height:"300px", width:"450px", marginLeft:"20px", marginRight:"40px"}}></img></div>
              <div style={{display:"inline-block"}}><img src={Img2} style={{height:"300px", width:"450px"}}></img></div>
              </div>

              <div>
              <div style={{display:"inline-block"}}><img src={Img3} 
                  style={{height:"300px", width:"450px", marginLeft:"20px", marginRight:"40px"}}></img></div>
              <div style={{display:"inline-block"}}><img src={Img4} style={{height:"300px", width:"450px"}}></img></div>
              </div>


              <div>
              <div style={{display:"inline-block"}}><img src={Img7} 
                  style={{height:"300px", width:"450px", marginLeft:"20px", marginRight:"40px"}}></img></div>
              <div style={{display:"inline-block"}}><img src={Img8} style={{height:"300px", width:"450px"}}></img></div>
              </div>

              <div>
              <div style={{display:"inline-block"}}><img src={Img9} 
                  style={{height:"300px", width:"450px", marginLeft:"20px", marginRight:"40px"}}></img></div>
              <div style={{display:"inline-block"}}><img src={Img10} style={{height:"300px", width:"450px"}}></img></div>
              </div>

              </Carousel>
          
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 18, fontFamliy:"Arial, sans-serif"}}>
          Tired of Deliveroo? 
          </Paragraph>
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 19, fontFamliy:"Arial, sans-serif"}}>
          Tired of Microwave meals?
          </Paragraph>
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 20, fontFamliy:"Arial, sans-serif"}}>
          Wanna be Fit and Healthy?
          </Paragraph>
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 21, fontFamliy:"Arial, sans-serif"}}>
          Open you frige now and Let me show you what you can cook! ---> Start customizing your recipes.
          </Paragraph>

          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Recent Populars" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Gym Meal Plan" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Vegetarian" key="3">
            <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 18, fontFamliy:"Arial, sans-serif"}}>
            Caponata pasta
          </Paragraph>
            </TabPane>
          </Tabs>
          <Divider />
          
          <Title level={3} style={{color:"#fa8c16", }}>BACKGROUND</Title>
              
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 18, fontFamliy:"Arial, sans-serif"}}>University represents a key transition into adulthood for many 
            adolescents but there are associated concerns about health and behaviours. 
            One important aspect relates to diet and there is emerging evidence that university 
            students may consume poor quality diets, with potential implications for body weight and 
            long-term health. This research aimed to characterise dietary patterns of university students
            in the UK and their sociodemographic and lifestyle antecedents.</Paragraph>
          
            
          
          <Title level={3} style={{color:"#fa8c16", }}>OUR DESIGNERS</Title>
          <Paragraph>
            
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                Z9 Group
                {/* <Link href="/signup">设计原则</Link> */}
              </li>
              {/* <li>
                <Link href="/docs/spec/overview-cn">设计模式</Link>
              </li>
              <li>
                <Link href="/docs/resources-cn">设计资源</Link>
              </li> */}
            </ul>
          </Paragraph>
          
          <Divider />
        </Typography>
        
      </div>
    )
  }
}