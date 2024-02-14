import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './ProductPopular.css'
export default function ProductPopular() {
  return (
    <div className='ProductPopular'>
        <h2 className='ProductPopular__title'>محصول پرفروش</h2>
        <p className='ProductPopular__subtitle'>پرفروش ترین محصول ماه</p>
        <h2 className='ProductPopular__title'>میزان فروش</h2>
        <p className='ProductPopular__subtitle'>$15,595.015</p>
        <div className="ProductPopular__img">
            <img src="./img/product.jpg" alt="img" />
        </div>
       <div className="ProductPopular__links">
        <button className='ProductPopular__btn'>
          <KeyboardArrowLeftIcon />
          مشاهده اطلاعات
          </button>
        <button className='ProductPopular__btn'>
          <EditNoteIcon />
          ویرایش
        </button>
       </div>
    </div>
  )
}
