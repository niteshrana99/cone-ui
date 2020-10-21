import React, { useEffect } from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import CategoryCard from '../../../components/CategoryCard/CategoryCard';
import network from '../../../utils/network';
import styles from './Home.module.css';


const Home = () => {
    const categoriesArr = [
        {
            imageUrl:"https://rajwalstores.s3.amazonaws.com/home/img_bg_3.jpg",
            caption:"Shop Men's Collection"
        },
        {
            imageUrl:"https://rajwalstores.s3.amazonaws.com/home/women.jpg",
            caption:"Shop Women's Collection"
        },
        {
            imageUrl:"https://rajwalstores.s3.amazonaws.com/home/mob_cover.jpg",
            caption:"Shop Mobile Covers"
        }
    ];

    const getInitData = async() => {
        const res = await network.getData("getHomePageData").next().value;
        console.log(res);
    }

    useEffect(() => {
        getInitData()
    }, [])
    return (
        <div>
            <Carousel />
            <br />
            <div className="center-align container">
            <h4 className={styles.intro}>It started with a simple idea: Create quality, well-designed products that I wanted myself.</h4>
            </div>
            <br />
            <div className="row">
                {categoriesArr.map((category, index)=> (
                    <div className="col s12 m4" key={index}>
                    <CategoryCard {...category} />
                    </div>
                ))}
            </div>
            <br />
            <div className="row">
            <div className="center-align container">
            <p className={styles.brandIntro}>Fastest selling Brands</p>
            </div>
            </div>
            <div className="row">
            <div className="col m3 s12">
                <img height="200px" width="99%" src="https://rajwalstores.s3.amazonaws.com/home/brand-1.jpg" />
                </div>
                <div className="col m3 s12">
                    <img height="200px" width="99%" src="https://rajwalstores.s3.amazonaws.com/home/brand-2.jpg" />
                </div>
                <div className="col m3 s12">
                <img height="200px" width="99%" src="https://rajwalstores.s3.amazonaws.com/home/brand-3.jpg" />
                </div>
                <div className="col m3 s12">
                <img height="200px" width="99%" src="https://rajwalstores.s3.amazonaws.com/home/brand-4.jpg" />
                </div>
               
            </div>
        </div>
    )
}

export default Home
