import React from 'react'
import SouthWestIcon from '@mui/icons-material/SouthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import './ProductBox.css'
export default function ProductBox() {
  return (
    <div className='ProductBox'>
        <span className="ProductBox__icon">
            <SouthWestIcon />
        </span>
        <div className="ProductBox__text">
            <h2 className='ProductBox__title'>تعداد محصولات</h2>
            <h2 className='ProductBox__number'>1,400</h2>
        </div>
        <span className="ProductBox__badg">
            1.29%+
        </span>
    </div>
  )
}
