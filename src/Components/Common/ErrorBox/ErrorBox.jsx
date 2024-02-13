import React from 'react'
import Alert from 'react-bootstrap/Alert';
import './ErrorBox.css'
import ErrorIcon from '@mui/icons-material/Error';
export default function ErrorBox({msg}) {
  return (
    <Alert className='ErrorBox'  variant={'danger'}>
        <ErrorIcon />
        <div className="ErrorBox__text">
        <h2 className='ErrorBox__title'>{msg}</h2>
        <p>خطایی در دریافت اطلاعات رخ داده است !! </p>
        </div>
  </Alert>
  )
}
