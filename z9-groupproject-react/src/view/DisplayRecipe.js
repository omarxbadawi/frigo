import React from 'react';
import '.././index.css';
import { Layout, Menu,Breadcrumb} from 'antd';

export default class myRecipe extends React.Component {

  render() {
    return (
        <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
          <Breadcrumb style={{ margin: '10px 0' }}>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>FRIGO</Breadcrumb.Item>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>Customize Recipes</Breadcrumb.Item>
                  <Breadcrumb.Item style={{color:"#fa8c16"}}>Display Recipes</Breadcrumb.Item>
          </Breadcrumb>
           <p> this is your selected Recipe.</p>
        </div>
    );
  }
}

