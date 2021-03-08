import React, { useState, useEffect } from 'react';
import '.././index.css';
import { Input, Descriptions, Avatar, message, Button,Breadcrumb } from 'antd';
import { StarOutlined, HeartOutlined } from '@ant-design/icons';

function Cookbook() {
    /* star state */
    const [starstate, setstarstate] = useState(false);
    /* collect state */
    const [colletstate, setcolletstate] = useState(false);
    /* detail data */
    const [detail, setdetail] = useState({

        "meals": [
            {
                "idMeal": "53013",
                "strMeal": "Big Mac",
                "strDrinkAlternate": null,
                "strCategory": "Beef",
                "strArea": "American",
                "strInstructions": "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.\r\n2. To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each. Place each onto a square of baking paper and flatten to form into four x 15cm circles. Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through. Remove from heat and keep warm. Repeat with remaining two patties.\r\n3. Carefully slice each burger bun into three acrossways, then lightly toast.\r\n4. To assemble the burgers, spread a little Big Mac sauce over the bottom base. Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices. Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce. Top with burger lid to serve.\r\n5. After waiting half an hour for your food to settle, go for a jog.",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
                "strTags": null,
                "strYoutube": "https://www.youtube.com/watch?v=C5J39YnnPsg",
                "strIngredient1": "Minced Beef",
                "strIngredient2": "Olive Oil",
                "strIngredient3": "Sesame Seed Burger Buns",
                "strIngredient4": "Onion",
                "strIngredient5": "Iceberg Lettuce",
                "strIngredient6": "Cheese",
                "strIngredient7": "Dill Pickles",
                "strIngredient8": "Mayonnaise",
                "strIngredient9": "White Wine Vinegar",
                "strIngredient10": "Pepper",
                "strIngredient11": "Mustard",
                "strIngredient12": "Onion Salt",
                "strIngredient13": "Garlic Powder",
                "strIngredient14": "Paprika",
                "strIngredient15": "",
                "strIngredient16": "",
                "strIngredient17": "",
                "strIngredient18": "",
                "strIngredient19": "",
                "strIngredient20": "",
                "strMeasure1": "400g",
                "strMeasure2": "2 tbs",
                "strMeasure3": "2",
                "strMeasure4": "Chopped",
                "strMeasure5": "1/4 ",
                "strMeasure6": "2 sliced",
                "strMeasure7": "2 large",
                "strMeasure8": "1 cup ",
                "strMeasure9": "2 tsp",
                "strMeasure10": "Pinch",
                "strMeasure11": "2 tsp",
                "strMeasure12": "1 1/2 tsp ",
                "strMeasure13": "1 1/2 tsp ",
                "strMeasure14": "1/2 tsp",
                "strMeasure15": " ",
                "strMeasure16": " ",
                "strMeasure17": " ",
                "strMeasure18": " ",
                "strMeasure19": " ",
                "strMeasure20": " ",
                "strSource": "https://www.delicious.com.au/recipes/finally-recipe-worlds-top-selling-burger-big-mac/5221ee4a-279e-4a0b-8629-f442dc46822e",
                "strImageSource": null,
                "strCreativeCommonsConfirmed": null,
                "dateModified": null
            }
        ]
    })
    useEffect(() => {
        const url = window.location.href.split('?uid=')[1];

        detaillist(url)
    }, []);

    /* list detail */
    function detaillist(params) {
        fetch(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${params}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then(response => response.json())//Parses to scale data      解析为可读数据
            .then(data => {
                console.log(data)
                if (data.meals == null) {
                    setdetail({ 'meals': [] })
                } else {
                    setdetail(data)
                }



            })//If the result of enforcement is resolve, call 'then' method ,    执行结果是 resolve就调用then方法
            .catch(err => { 
                message.info("Oh, error", err)
            })//If the result of enforcement is reject, call 'catch' method ,   执行结果是 reject就调用catch方法
    }
    /* change  starstate*/
    function changestarstate() {
        setstarstate(!starstate);
    }
    function changecollet() {
        setcolletstate(!colletstate)
    }
    return (
        
        <div className="site-layout-background" style={{ padding: 10, minHeight: 300 }}>
        <Breadcrumb style={{ margin: '10px 0' }}>
                <Breadcrumb.Item style={{color:"#fa8c16"}}>FRIGO</Breadcrumb.Item>
                <Breadcrumb.Item style={{color:"#fa8c16"}}>Customize Recipes</Breadcrumb.Item>
                <Breadcrumb.Item style={{color:"#fa8c16"}}>Recipe Details</Breadcrumb.Item>
        </Breadcrumb>
        <div className='fn-clear'><Button href='./#/SelectIngredients' className='rightbtn' type='primary' >back</Button></div>
        <p className="btnline">
            {/* collect */}

            add collect&nbsp;&nbsp;
            {starstate ? <StarOutlined className='star' style={{ fontSize: '24px', color: '#ff7a04' }} onClick={() => { changestarstate() }} />
                : <StarOutlined className='star' style={{ fontSize: '24px', color: '#333' }} onClick={() => { changestarstate() }} />
            }
            &nbsp;
            &nbsp;
            &nbsp;
            {/* give a like */}
            give a like&nbsp;&nbsp;
            {colletstate ? <HeartOutlined className='collect' style={{ fontSize: '24px', color: '#ff7a04' }} onClick={() => { changecollet() }} />
                : <HeartOutlined className='collect' style={{ fontSize: '24px', color: '#333' }} onClick={() => { changecollet() }} />
            }

        </p>
        <br></br>
        <br></br>
        <Descriptions title="detail" bordered size="small">
                <Descriptions.Item label="idMeal">{detail.meals[0].idMeal}</Descriptions.Item>
                <Descriptions.Item label="Meal">{detail.meals[0].strMeal}</Descriptions.Item>
                <Descriptions.Item label="strCategory">{detail.meals[0].strCategory}</Descriptions.Item>
                <Descriptions.Item label="strMealThumb">
                    <Avatar size={64} shape="square" src={detail.meals[0].strMealThumb} />
                </Descriptions.Item>
                {detail.meals[0].strYoutube != null ? <Descriptions.Item label="strYoutube" >
                    <Button type='primary' onClick={() => { window.open(detail.meals[0].strYoutube) }}>go to Youtube</Button>
                </Descriptions.Item> : ''}
                <Descriptions.Item label="strIngredient1">{detail.meals[0].strIngredient1 == null ? '' : detail.meals[0].strIngredient1}</Descriptions.Item>
                <Descriptions.Item label="strIngredient2">{detail.meals[0].strIngredient2 == null ? '' : detail.meals[0].strIngredient2}</Descriptions.Item>
                <Descriptions.Item label="strIngredient3">{detail.meals[0].strIngredient3 == null ? '' : detail.meals[0].strIngredient3}</Descriptions.Item>
                <Descriptions.Item label="strIngredient4">{detail.meals[0].strIngredient4 == null ? '' : detail.meals[0].strIngredient4}</Descriptions.Item>
                <Descriptions.Item label="strMeasure1">{detail.meals[0].strMeasure1 == null ? '' : detail.meals[0].strMeasure1}</Descriptions.Item>
                <Descriptions.Item label="strMeasure2">{detail.meals[0].strMeasure2 == null ? '' : detail.meals[0].strMeasure2}</Descriptions.Item>
                <Descriptions.Item label="strMeasure3">{detail.meals[0].strMeasure3 == null ? '' : detail.meals[0].strMeasure3}</Descriptions.Item>
                <Descriptions.Item label="strMeasure4">{detail.meals[0].strMeasure4 == null ? '' : detail.meals[0].strMeasure4}</Descriptions.Item>
                <Descriptions.Item label="strInstructions">
                    {detail.meals[0].strInstructions}
                </Descriptions.Item>
            </Descriptions>
        </div>


    );
}
export default Cookbook
