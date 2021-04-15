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
import p1 from "../img/p1.jpeg"
import p2 from "../img/p2.jpeg"
import p3 from "../img/p3.jpeg"
import logo from "../img/logo.jpg"

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
            <TabPane tab="Nutrition Notes" key="1">
            <div>
            <div style={{display:"inline-block"}}><img src={p3} 
                  style={{height:"250px", width:"400px", marginLeft:"20px", marginRight:"40px"}}></img></div>
            <div style={{display:"inline-block",marginLeft:"20px", marginRight:"20px", fontSize: 18, fontFamliy:"Arial, sans-serif"}}>
            Eating good food, especially with family and friends, is one of the pleasures of life. We all know that people who eat healthy, balanced diets are likely to have:
            </div>
            </div>
            <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
              •	plenty of energy to work and enjoy themselves.
              •	fewer infections and other illnesses.
            </Paragraph>
            <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 18, fontFamliy:"Arial, sans-serif"}}>
            Children who eat well usually grow well. Women who eat well are likely to produce healthy babies. That is why it is important to know which combinations of foods make good meals and what the different food needs of different members of the family are.
            Foods and nutrients
            A food is something that provides nutrients. Nutrients are substances that provide:
            </Paragraph>
            <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>

              •	energy for activity, growth, and all functions of the body such as breathing, digesting food, and keeping warm.
              •	materials for the growth and repair of the body, and for keeping the immune system healthy.

           </Paragraph>

            </TabPane>
            <TabPane tab="Gym Meal Plan" key="2">
            
            <div style={{display:"inline-block"}}><img src={p1} 
                  style={{height:"250px", width:"350px", marginLeft:"20px", marginRight:"40px"}}></img></div>
            <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif"}}>
            Bodybuilding is centered around building your body’s muscles through weightlifting and nutrition. Whether recreational or competitive, bodybuilding is often referred to as a lifestyle, as it involves both the time you spend in and outside the gym. In order to maximize your results from the gym, you must focus on your diet.

          </Paragraph>
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 18, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Foods to Focus On
          </Paragraph>
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Meats, poultry and fish: 
          </Paragraph>
          Sirloin steak, ground beef, pork tenderloin, venison, chicken breast, salmon, tilapia and cod.
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Dairy: 
          </Paragraph>
          Yogurt, cottage cheese, low-fat milk and cheese.
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Grains ;
          </Paragraph>
          Bread, cereal, crackers, oatmeal, popcorn and rice.
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Fruits: 
          </Paragraph>
          Oranges, apples, bananas, grapes, pears, peaches, watermelon and berries.
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Starchy vegetables:
          </Paragraph>
          Potatoes, corn, green peas, green lima beans and.
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Vegetables:
          </Paragraph>
          Broccoli, spinach, leafy salad greens, tomatoes, green beans, cucumber, zucchini, asparagus, peppers and mushrooms.
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Seeds and nuts: 
          </Paragraph>
          Almonds, walnuts, sunflower seeds, and flax seeds.
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Beans and legumes: 
          </Paragraph>
          Chickpeas, lentils, kidney beans, black beans and pinto beans.
          <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif",color:"#fa8c16"}}>
          Oils: 
          </Paragraph>
          Olive oil, flaxseed oil and avocado oil.
         


            </TabPane>
            <TabPane tab="Vegetarian" key="3">
            <div style={{display:"inline-block"}}><img src={p2} 
                  style={{height:"250px", width:"350px", marginLeft:"20px", marginRight:"40px"}}></img></div>
            <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 18, fontFamliy:"Arial, sans-serif"}}>
            Vegetarian cuisine is based on food that meets vegetarian standards by not including meat and animal tissue products. 
            </Paragraph>
           
            
            
            
            
            <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif"}}>
            Here is a famous recipe of stir-fried vegetables.
            How to make vegetable stir fry?
            </Paragraph>
            <Paragraph style={{ marginLeft:"20px", marginRight:"20px", fontSize: 16, fontFamliy:"Arial, sans-serif"}}>
            The first step is to cook up your veggies. I used a combination of red and yellow peppers, snow peas, broccoli, carrots and mushrooms. I also added some baby corn and water chestnuts into the mix for variety. While the veggies are cooking, I make a simple garlic and ginger sauce. The sauce gets poured over the veggies then is simmered until thickened. You can enjoy your veggie stir fry as-is, or over rice.
            </Paragraph>
            <Text strong style={{ color: "#fa8c16",fontSize: 18,}}>•	Sauté:</Text> 
            In a wok or large skillet add 1 Tablespoon olive oil over medium high heat. Add bell pepper, peas, carrots, mushrooms, broccoli, baby corn, and water chestnuts. Sauté 2-3 minutes until veggies are almost tender.
            <Text strong  style={{ color: "#fa8c16",fontSize: 18}}>•	Whisk:</Text> 
            In a small bowl, whisk together soy sauce, garlic, brown sugar, sesame oil, chicken broth, and cornstarch.
            <Text strong  style={{ color: "#fa8c16",fontSize: 18}}>•	Mix:</Text> 
            Pour over veggies and cook until the sauce has thickened.
            <Text strong style={{ color: "#fa8c16",fontSize: 18}}>•	Garnish:</Text> 
            add chopped green onions and sesame seeds if desired.
          
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
                {/* <Link href="/signup"></Link> */}
              </li>
              
            </ul>
          </Paragraph>
          
          <Divider />
        </Typography>
        
      </div>
    )
  }
}