import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import DeletModal from "../../../Common/Modals/DeletModal/DeletModal";
import DetailsModal from "../../../Common/Modals/DetailsModal/DetailsModal";
import EditModal from "../../../Common/Modals/EditModal/EditModal";
import "./ProductTable.css";
export default function ProductTable() {
  const [isShowModal, setisShowModal] = useState(false);
  const [isShowDetailsModal, setisShowDetailsModal] = useState(false);
  const [isShowEditModal, setisShowEditModal] = useState(false);

  const deletModalCancelAction = () => {
    setisShowModal(false);
    setisShowDetailsModal(false);
    setisShowEditModal(false);
  };
  const deletModalSubmitAction = () => {
    setisShowModal(false);
    setisShowDetailsModal(false);
    setisShowEditModal(false);
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
                  <Badge
                    bg="info"
                    text="dark"
                    className="ProductTable__badge"
                    onClick={() => setisShowEditModal(true)}
                  >
                    ویرایش
                  </Badge>
                  <Badge
                    bg="success"
                    className="ProductTable__badge"
                    onClick={() => setisShowDetailsModal(true)}
                  >
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
      {isShowDetailsModal && (
        <DetailsModal
          submit={deletModalSubmitAction}
          cancel={deletModalCancelAction}
        />
      )}
      {isShowEditModal && (
        <EditModal
          submit={deletModalSubmitAction}
          cancel={deletModalCancelAction}
        />
      )}
    </>
  );
}
