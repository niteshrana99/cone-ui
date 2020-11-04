import React, { Fragment, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Filter from "../../../components/Filter/Filter";
import Pagination from "../../../components/Pagination/Pagination";
import ProductCard from "../../../components/ProductCard/ProductCard";
import network from '../../../utils/network';

const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ProductList = () => {
  const {search} = useLocation();
  console.log(search)

  // const getProducts = async () => {
  //   try {
  //     const products = await network.getData("products/" + search).next().value;
  //     console.log(products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    // getProducts()
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col s12 m12">
          <div className="col s3 m3">
            <Filter />
          </div>
          <div className="col s9 m9">
          {cardList.map((card) => (
          <div key={card} className="col s12 m3">
            <ProductCard />
          </div>
        ))}
        </div>
        </div>
        
      </div>
      {/* <Pagination /> */}
    </Fragment>
  );
};

export default ProductList;
