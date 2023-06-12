import React from 'react';
import './_products.scss';

const Product = () => {

    const productData = [
        {
            pName: "Denim Pant",
            price: 2000,
            img: "pant1.jpg"
        },
        {
            pName: "Black Dress",
            price: 1500,
            img: "dress1.jpg"
        },
        {
            pName: "Top",
            price: 900,
            img: "top1.jpg"
        },
        {
            pName: "White Shirt",
            price: 1000,
            img: "shirt1.jpg"
        },
        {
            pName: "Summer Dress",
            price: 2000,
            img: "dress2.jpg"
        }
    ];
  return (
      <div className='prod'>
          {
              productData.map((product, key) => {
                  return (
                      <div className='mx-5 p-3 product-card'>
                          <div className='product-image-container'>
                              <img src={require('../../assets/images/'+ product.img)} />
                          </div>
                          <div className='product-info'>
                              <h5><a href="#">{product.pName }</a></h5>
                              <p className='product-price'> Rs {product.price}</p>
                              <div className='product-rating'>
                                  <i className='fa fa-star' />
                                  <i className='fa fa-star' />
                                  <i className='fa fa-star' />
                                  <i className='fa fa-star' />
                                  <i className='fa fa-star' />
                              </div>
                          </div>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default Product;