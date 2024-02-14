import React from "react";
import Form from "react-bootstrap/Form";
import AddIcon from "@mui/icons-material/Add";
import "./AddNewProduct.css";
export default function AddNewProduct() {
  return (
    <div className="AddNewProduct">
      <h2 className="AddNewProduct__title">اضافه کردن محصول جدید</h2>
      <p className="AddNewProduct__subtitle">
        لطفا اطلاعات محصول جدید را وارد کنید
      </p>

      <Form className="AddNewProduct__Form">
        <div className="AddNewProduct__Form-left">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="inputPassword5">نام محصول</Form.Label>
            <Form.Control
              className="AddNewProduct__Form-input"
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="inputPassword5">موجودی محصول</Form.Label>
            <Form.Control
              className="AddNewProduct__Form-input"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="inputPassword5">محبوبیت</Form.Label>
            <Form.Control
              className="AddNewProduct__Form-input"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="inputPassword5">تعداد رنگ بندی</Form.Label>
            <Form.Control
              className="AddNewProduct__Form-input"
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Form.Group>
        </div>
        <div className="AddNewProduct__Form-right">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="inputPassword5">قیمت محصول</Form.Label>
            <Form.Control
              type="text"
              className="AddNewProduct__Form-input"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="inputPassword5">آدرس عکس محصول</Form.Label>
            <Form.Control
              type="text"
              className="AddNewProduct__Form-input"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="inputPassword5">میزان فروش محصول</Form.Label>
            <Form.Control
              className="AddNewProduct__Form-input"
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Form.Group>
          <button type="submit" className="app__btn AddNewProduct__Form-submit">
            <AddIcon />
            ثبت محصول
          </button>
        </div>
      </Form>
    </div>
  );
}
