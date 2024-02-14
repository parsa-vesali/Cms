import React from 'react'
import './Comments.css'
import ErrorBox from "../../Common/ErrorBox/ErrorBox";
import DeletModal from '../../Common/Modals/DeletModal/DeletModal';
export default function Comments() {
  return (
    <div>
       <ErrorBox msg={'نظرات یافت نشد'} />
       <DeletModal />
    </div>
  )
}
