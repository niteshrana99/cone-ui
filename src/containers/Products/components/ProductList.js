import React, { Fragment } from "react";
import Filter from "../../../components/Filter/Filter";
import Pagination from "../../../components/Pagination/Pagination";
import ProductCard from "../../../components/ProductCard/ProductCard";

const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ProductList = () => {
  return (
    <Fragment>
      <div class="row">
        <div className="col s12 m12">
          <div className="col s3 m3">
            <Filter />
          </div>
          <div className="col s9 m9">
          {cardList.map((card) => (
          <div class="col s12 m3">
            <ProductCard />
          </div>
        ))}
        </div>
        </div>
        
      </div>
      <Pagination />
    </Fragment>
  );
};

export default ProductList;
