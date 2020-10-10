import React, { Fragment, useEffect } from "react";
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

const Filter = () => {
  
  useEffect(() => {
    var slider = document.getElementById('test-slider');
    noUiSlider.create(slider, {
     start: [300, 9999],
     connect: true,
     step: 500,
     tooltips: true,
     orientation: 'horizontal', // 'horizontal' or 'vertical'
     range: {
       'min': 300,
       'max': 10000
     },
     
    //  format: wNumb({
    //    decimals: 0
    //  })
    });
  })  
  return (
      <Fragment>
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <h5>Filters</h5>
        </span>
        
      </div>
    </div>
    <ul className="collapsible expandable">
    <li className="active">
      <div className="collapsible-header">CATEGORIES</div>
      <div className="collapsible-body">
      <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
      </div>
    </li>
    <li >
      <div className="collapsible-header">BRAND</div>
      <div className="collapsible-body">
      <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
      </div>
    </li>
    <li>
      <div className="collapsible-header">PRICE</div>
      <div className="collapsible-body">
      <div id="test-slider"></div>
      </div>
    </li>
  </ul>
    </Fragment>
  );
};

export default Filter;
