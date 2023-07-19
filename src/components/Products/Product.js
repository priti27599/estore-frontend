import React, { useEffect } from 'react';
import './_products.scss';
import { useDispatch, useSelector } from 'react-redux';
import productSlice from '../../Redux/Product/productSlice';
import { getProducts } from '../../Redux/Product/action';
import { addCartItem } from '../../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';

const Product = () => {

    const productData = useSelector(state => state.pr.products);
    const cart = useSelector(state => state.cr);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    const addToCart = (itemData) => {
        const payload = { ...itemData, quantity: 1 };
        dispatch(addCartItem(payload));
    }

    console.log(cart)
    

  return (
      <div className='prod'>
          {
              productData.map((product, key) => {
                  return (
                      <div className='mx-5 p-3 product-card'>
                          <Link
                              to="/productDetails"
                              state={product}
                             >
                            <div className='product-image-container'>
                              <img src={require('../../assets/images/'+ product.product_img)} />
                            </div>
                          </Link>
                          <div className='product-info'>
                              <h5>
                                  <Link
                                    to="/productDetails"
                                    state={product}  
                                  >
                                    {product.product_name}
                                  </Link>
                              </h5>
                              <p className='product-price'> Rs {product.price}</p>
                              <div className='product-rating'>
                                  <i className='fa fa-star' />
                                  <i className='fa fa-star' />
                                  <i className='fa fa-star' />
                                  <i className='fa fa-star' />
                                  <i className='fa fa-star' />
                              </div>
                          </div>
                          <div className='my-3' onClick={()=>addToCart(product)}>
                              <div className='cart-button'>
                                  {/* <div className='cart-icon-container'>
                                     <i className='fa fa-shopping-cart' />
                                  </div> */}
                                  <div className='cart-text-container'>
                                     <p>Add to Cart</p>
                                  </div>
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