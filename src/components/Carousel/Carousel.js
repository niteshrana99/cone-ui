import React, {useEffect} from 'react'
import M from 'materialize-css';

const Carousel = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, {duration:200, interval:3000});
    })
    return (
        <div class="slider">
    <ul class="slides">
      <li>
        <img src="https://rajwalstores.s3.amazonaws.com/home/img_bg_1.jpg" />
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://rajwalstores.s3.amazonaws.com/home/img_bg_2.jpg" />
        <div class="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="https://rajwalstores.s3.amazonaws.com/home/Banner-Mobile.png" />
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
    </ul>
  </div>
    )
}

export default Carousel
