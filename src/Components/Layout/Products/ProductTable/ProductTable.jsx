import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import DeletModal from "../../../Common/Modals/DeletModal/DeletModal";
import DetailsModal from "../../../Common/Modals/DetailsModal/DetailsModal";
import "./ProductTable.css";
export default function ProductTable() {
  const [isShowModal, setisShowModal] = useState(false);
  const deletModalCancelAction = () => {
    setisShowModal(false);
  };
  const deletModalSubmitAction = () => {
    setisShowModal(false);
  };
  return (
    <>
      <div className="ProductTable">
        <h1 className="ProductTable__ttile">لیست محصولات</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>کد محصول</th>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th colSpan={2}>موجودی</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>گوشی</td>
              <td>120.000$</td>
              <td>40</td>
              <td>
                <div className="ProductTable__btns">
                  <Badge
                    bg="warning"
                    text="dark"
                    className="ProductTable__badge"
                    onClick={() => setisShowModal(true)}
                  >
                    حذف
                  </Badge>
                  <Badge bg="info" text="dark" className="ProductTable__badge">
                    ویرایش
                  </Badge>
                  <Badge bg="success" className="ProductTable__badge">
                    جزیات
                  </Badge>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      {isShowModal && (
        <DeletModal
          submit={deletModalSubmitAction}
          cancel={deletModalCancelAction}
        />
      )}
    </>
  );
}
