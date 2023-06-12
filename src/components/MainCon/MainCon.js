import React from 'react'
import './_main-con.scss';
import SideCon from '../SideCon/SideCon';
import Product from '../Products/Product';

const MainCon = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 col-md-3 col-sm-4'>
              <SideCon/>    
            </div>
            <div className='col-lg-10 col-md-9 col-sm-8'>
              <Product/>
            </div>
          </div>   
        </div>
    </div>
  )
}

export default MainCon