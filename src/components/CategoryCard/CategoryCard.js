import React from 'react'
import styles from './CategoryCard.module.css'

const CategoryCard = ({imageUrl, caption}) => {
    return (
        <div>
            <div className="card">
        <div className="card-image">
          <img className={styles.image} src={imageUrl} />
         
        </div>
        <div className="card-content center-align">
            <h5>{caption}</h5>
        </div>
      </div>
        </div>
    )
}

export default CategoryCard
