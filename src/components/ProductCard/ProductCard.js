import React from "react";
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className="card curson-pointer">
      <div className="card-image position-relative">
        <img src="https://colorlib.com/preview/theme/divisima/img/product/6.jpg" />
        <span className={styles.discountFlash}>50% Off</span>
        
      </div>
      
      <div className={`card-content ${styles.prodcutDetails}`}>
        <p>Espirit Rufallo Shirt</p>
        <p className={styles.priceContainer}><span>&#x20B9;2000 </span><span className="strikeThrough">&#x20B9;5000</span> Save &#x20B9;3000(40%)</p>
      </div>
    </div>
  );
};

export default ProductCard;
