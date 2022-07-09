import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'



function Explore() {
  return (
    <div className='explore navTab'>
    <ul> 
      <li><a><Link to='/sign-in'>Sign In</Link></a></li>
      <li><a><Link to='/sign-up'>Sign Up</Link></a></li>
    </ul>
    <p className='pageHeader'>Explore</p>

    <main>
      <Slider />

      <p className='exploreCategoryHeading'>Categories</p>
      <div className='exploreCategories'> 
        <Link to='/category/rent'>       {/* path: /category/:categoryName */}
          <img
            src={rentCategoryImage}
            alt='rent'
            className='exploreCategoryImg'
          />
          <p className='exploreCategoryName'>Places for rent</p>
        </Link>
        <Link to='/category/sale'>
          <img
            src={sellCategoryImage}
            alt='sell'
            className='exploreCategoryImg'
          />
          <p className='exploreCategoryName'>Places for sale</p>
        </Link>
      </div>
    </main>
  </div>
  )
}

export default Explore