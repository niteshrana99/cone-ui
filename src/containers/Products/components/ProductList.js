import React, { Fragment } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ProductList = () => {
  return (
    <Fragment>
      <div class="row">
        {cardList.map((card) => (
          <div class="col s12 m3">
            <ProductCard />
          </div>
        ))}
      </div>
      <ul class="pagination">
        <li class="disabled">
          <a href="#!">
            <i class="material-icons">chevron_left</i>
          </a>
        </li>
        <li class="active">
          <a href="#!">1</a>
        </li>
        <li class="waves-effect">
          <a href="#!">2</a>
        </li>
        <li class="waves-effect">
          <a href="#!">3</a>
        </li>
        <li class="waves-effect">
          <a href="#!">4</a>
        </li>
        <li class="waves-effect">
          <a href="#!">5</a>
        </li>
        <li class="waves-effect">
          <a href="#!">
            <i class="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default ProductList;
