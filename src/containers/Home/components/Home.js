import React, { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import network from "../../../utils/network";
import styles from "./Home.module.css";
import Loader from "../../../components/Loader/Loader";
import PropTypes from "prop-types";
import withErrorHandler from '../../../hoc/WithErrorHandler';

const Home = ({ isLoading, setLoading, alertMessages }) => {
  const [homeState, setHomeState] = useState({
    brands: [],
    carousel: [],
    categories: [],
  });
  const { brands, carousel, categories } = homeState;
  const getInitData = async () => {
    try {
      setLoading();
      const res = await network.getData("getHomePageData").next().value;
      setHomeState({
        ...res.data.response[0]
      });
      setLoading();
      
    } catch (error) {
      setLoading();
      alertMessages.error("Something went wrong. Please contact system administrator.")
    }
  };

  useEffect(() => {
    getInitData();
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {carousel.length ? <Carousel carousel={carousel} /> : ""}
      <br />
      <div className="center-align container">
        {carousel.length && (
          <h4 className={styles.intro}>
            It started with a simple idea: Create quality, well-designed
            products that I wanted myself.
          </h4>
        )}
      </div>
      <br />
      <div className="row">
        {categories.map((category, index) => (
          <div className="col s12 m4" key={index}>
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
      <br />
      <div className="row">
        <div className="center-align container">
          {brands.length ? <p className={styles.brandIntro}>Fastest selling Brands</p> : ""}
        </div>
      </div>
      <div className="row">
        {brands.map((brandItem) => (
          <div className="col m3 s12" key={brandItem.brandName}>
            <img height="200px" width="90%" src={brandItem.imgUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

Home.protoTypes = {
  isLoading: PropTypes.string,
  setLoading: PropTypes.func.isRequired,
  alertMessages:PropTypes.object
};

Home.defaultProps = {
  isLoading: false,
};

export default withErrorHandler(Home);
