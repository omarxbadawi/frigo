import React, { useState, useEffect } from 'react';
import '.././index.css';
import { Input, Breadcrumb, List, Avatar, message, Tag } from 'antd';
import { Link, useHistory, HashRouter, Route, Switch } from 'react-router-dom';
const { Search } = Input;

function Cookbook() {
    const [searchstate, setsearchstate] = useState(false);
    const [name, setname] = useState(['Eggs']);
    /* list data */
    const [data, setData] = useState([
        {
            'name': ['Eggs'],
            'data': [
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
            ]
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
        var datas = value.split(' ');
        var searchlist = [];
        for (var i = 0; i < datas.length; i++) {
            var result = new Promise(function (resolve, reject) {
                fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${datas[i]}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                }).then(response => response.json())// Parses to scale data  (解析为可读数据)
                    .then(data => {
                        resolve(data);
                        setsearchstate(false)
                        console.log(data)
                    })//If the result of enforcement is resolve, call 'then' method ,     (执行结果是 resolve就调用then方法)
                    .catch(err => {
                        reject(err)
                    })//If the result of enforcement is reject, call 'catch' method ,      (执行结果是 reject就调用catch方法)
            })
            searchlist.push(result)
        }
        Promise.all([...searchlist]).then(function (arr) {
            arr.map((ele) => {
                if (ele.meals == null) { ele.meals = [] };
            })
            var mydata = [];
            // console.log(arr);
            if (arr.length != 1) {
                if (arr.length == 2) {
                    console.log(mydata);
                    /* 如果只有2项，则处理2项数据检索合并 */
                    var result = [...new Set(showsum(arr))];
                    mydata.push({ 'name': datas, 'data': result })
                    setData([...mydata]);
                } else {
                    /* 3项或者3项以上 */
                    /* 先显示3项全部满足 */
                    var result1 = showsum(arr);
                    mydata.push({ 'name': datas, 'data': result1 })
                    console.log(mydata);
                    // setData([...mydata]);

                    /* 寻找所有2项的公共元素进行组合 */
                    /* 数组重构 */
                    var arr = sums(arr);
                    console.log(arr)
                    var names = sums(datas);

                    console.log(names)

                    /* 查询检索合并 */
                    for (var i = 0; i < arr.length; i++) {
                        var result = { 'name': names[i], 'data': [...new Set(showsum(arr[i]))] };
                        // console.log(result)
                        mydata.push(result);
                    }
                    console.log(mydata)
                    var result = [];
                    /* 去除空值 */
                    mydata.forEach((ele) => {
                        if (ele.data.length != 0) {
                            result.push(ele);
                        }
                    })
                    setData([...result]);
                    // var result = [...new Set(mydata.data.flat(Infinity))]/* 去重 */
                    // setData({ 'name': datas, 'data': [...new Set(mydata.data.flat(Infinity))] });
                    // console.log([...new Set(mydata.flat(Infinity))]);
                }

                /* Take Common Elements */
            } else {
                /* 只搜一个食材 */
                arr.forEach((ele) => {
                    if (ele.meals != null) {
                        /* Eliminate duplicate */
                        mydata.push({ 'name': datas, 'data': ele.meals })
                    } else {
                    }
                })
                console.log(mydata)
                setData([{ 'name': mydata[0].name, 'data': [...new Set(mydata[0].data)] }]);
                console.log(data);
            };



        }, function (err) {
            setsearchstate(true)
            message.info("Oh, error", err)
        });

    }
    /* 数组2项2项拼接组合 */
    function sums(data) {
        var result = [];
        for (var i = 0; i < data.length; i++) {
            for (var m = i + 1; m < data.length; m++) {
                if (m != i) {
                    result.push([data[i], data[m]]);
                    // result.push({'meals':[...data[i],...data[m]]});
                }
            }
        }
        console.log(result);
        return result;
    }
    /* 返回所有两项一样的元素结果 */
    function showsum(arr) {
        console.log(arr);
        var mydata = [];
        /* 寻找2项的公共元素 */
        for (var i = 0; i < arr.length - 1; i++) {
            var leftaim = i;
            var rightaim = arr.length - 1;
            var leftdata = arr[leftaim].meals;
            var rightdata = arr[rightaim].meals;
            for (var m = 0; m < leftdata.length; m++) {
                for (var n = 0; n < rightdata.length; n++) {
                    if (leftdata[m].idMeal == rightdata[n].idMeal) {
                        if (i == 0) {
                            mydata.push(leftdata[m])
                        } else {
                            if (mydata.indexOf(leftdata[m]) != -1) {
                                mydata.push(leftdata[m])
                            }
                        }

                    }
                }
            }
        }
        return mydata;
    }
    return (
        <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }} id='cookbook'>
            <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item style={{ color: "#fa8c16" }}>FRIGO</Breadcrumb.Item>
                <Breadcrumb.Item style={{ color: "#fa8c16" }}>Select Ingredients</Breadcrumb.Item>
            </Breadcrumb>
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
            {data.map((item, index) => {

                return (

                    <div key={index}>

                        <div className='tagline'>
                            {
                                item.name.map((ele, i) => {
                                    return <Tag key={i} color="#f50">{ele}</Tag>
                                })
                            }

                            {/* <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag> */}
                        </div>
                        <div className='resultlist'>
                            <List
                                itemLayout="horizontal"
                                dataSource={item.data}
                                renderItem={(items, i) => (
                                    <List.Item
                                    >
                                        <List.Item.Meta
                                            avatar={<Link to={'/detail?uid=' + items.idMeal} ><Avatar size={64} shape="square" src={items.strMealThumb} /></Link>}
                                            title={<Link to={'/detail?uid=' + items.idMeal} >{items.strMeal}</Link>}
                                            description={`dMeal:` + items.idMeal}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>

                    </div>
                )
            })
            }


        </div>

    );
}
export default Cookbook
