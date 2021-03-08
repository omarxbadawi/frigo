import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import '.././index.css';
import myRecipe from './DisplayRecipe';
import Home from './Home';
import Ingredients from './SelectIngredients';
import Recipes from './GenerateRecipes';
import History from './Account';
import Settings from './Settings';
import Account from './Account';
/* page cookbook */
import cookbook from './cookbook';
/* page detail */
import detail from './detail';
import { Route, Switch, HashRouter, Link } from 'react-router-dom';
import {
  PictureOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  SettingOutlined,
  TeamOutlined,
  CrownOutlined
} from '@ant-design/icons';




const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class HomePage extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <HashRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider theme="light" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />} >
                <Link to="/HomePage" >HomePage</Link>
              </Menu.Item>

              <SubMenu key="2" icon={<CrownOutlined />} title="customize Recipe" >
                <Menu.Item >
                  <Link to="/SelectIngredients" >Select Ingredients</Link>
                </Menu.Item>
                <Menu.Item >
                  <Link to="/RecipesGenerated" >Recipes Generated</Link>
                </Menu.Item>
                <Menu.Item >
                  <Link to="/Your Recipe" >Your Recipe</Link>
                </Menu.Item>
                <Menu.Item >
                  <Link to="/cookbook" >cookbook </Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item icon={<TeamOutlined />}>
                <Link to="/MyAccount" >MyAccount</Link>
              </Menu.Item>
              <Menu.Item icon={<SettingOutlined />}>
                <Link to="/Settings" >Settings</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0, height: "60px" }}>
              {/* <div className="logo">
                  <img src={logo} style={{height: "100px"}}/>
                  <span></span>
                </div> */}
              <div>
                <h1 className="header_Frigo">FRIGO</h1>
              </div>

            </Header>
            <Content style={{ margin: '0 10px', height: "100%" }}>
              <Breadcrumb style={{ margin: '10px 0' }}>

              </Breadcrumb>

              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/HomePage" component={Home}></Route>
                <Route path="/SelectIngredients" component={Ingredients}></Route>
                <Route path="/RecipesGenerated" component={Recipes}></Route>
                <Route path="/Your Recipe" component={myRecipe}></Route>
                <Route path="/MyAccount" component={Account}></Route>
                <Route path="/Settings" component={Settings}></Route>
                {/* add page */}
                <Route path="/cookbook" component={cookbook}></Route>
                <Route path="/detail" component={detail}></Route>
              </Switch>
              {/* <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
                <p>This is the home page</p>
                </div> */}

            </Content>
            <Footer style={{ textAlign: 'center' }}>Z9 ©2020 Created by UoM</Footer>
          </Layout>
        </Layout>
      </HashRouter>

    );
  }
}

