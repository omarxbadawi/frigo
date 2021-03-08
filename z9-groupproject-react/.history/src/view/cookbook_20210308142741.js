import React, { useState, useEffect } from 'react';
import '.././index.css';
import { Input, Breadcrumb, List, Avatar, message } from 'antd';
import { Link, useHistory, HashRouter, Route, Switch } from 'react-router-dom';
const { Search } = Input;

function Cookbook() {
    const [searchstate, setsearchstate] = useState(false);
    /* list data */
    const [data, setData] = useState([
        {
            "strMeal": "demo1",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
            "idMeal": "53013"
        },
        {
            "strMeal": "demo2",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg",
            "idMeal": "52779"
        },
        {
            "strMeal": "demo3",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
            "idMeal": "52978"
        }
    ]);
    useEffect(() => {

    }, []);
    const onSearch = (value) => {
        if (value == '') {
            message.info("pleace input text")
        } else {
            setsearchstate(true)
            console.log(value)
            datadom(value)
        }

    };
    function datadom(value) {
        fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${value}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then(response => response.json())// Parses to scale data  (解析为可读数据)
            .then(data => {
                setsearchstate(false)
                console.log(data)
                if (data.meals == null) {
                    setData([])
                } else {
                    for (let key in data) {
                        setData(data.meals)
                    }
                }

            })//If the result of enforcement is resolve, call 'then' method ,     (执行结果是 resolve就调用then方法)
            .catch(err => {
                setsearchstate(true)
                message.info("Oh, error", err)
            })//If the result of enforcement is reject, call 'catch' method ,      (执行结果是 reject就调用catch方法)
    }
    return (
        <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }} id='cookbook'>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item style={{ color: "#fa8c16" }}>FRIGO</Breadcrumb.Item>
                <Breadcrumb.Item style={{ color: "#fa8c16" }}>Select Ingredients</Breadcrumb.Item>
            </Breadcrumb>
            <h1>cookbook</h1>
            <hr></hr>
            <h1>This is our HomePage</h1>
            <p>for example "Eggs", "Chicken", "Cheese", "Oil", "water"</p>
            <Search
                className='searchline'
                placeholder="input search text"
                allowClear
                enterButton="Search"
                maxLength={200}
                size="large"
                onSearch={onSearch}
                loading={searchstate}
            />
            <br />
            <br />
            <div className='resultlist'>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, i) => (
                        <List.Item
                        >
                            <List.Item.Meta
                                avatar={<Link to={'/detail?uid=' + item.idMeal} ><Avatar size={64} shape="square" src={item.strMealThumb} /></Link>}
                                title={<Link to={'/detail?uid=' + item.idMeal} >{item.strMeal}</Link>}
                                description={`dMeal:` + item.idMeal}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>

    );
}
export default Cookbook
