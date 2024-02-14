import React from "react";
import Table from "react-bootstrap/Table";
import "./ProductTable.css";
export default function ProductTable() {
  return (
    <div className="ProductTable">
      <h1 className="ProductTable__ttile">لیست محصولات</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>کد محصول</th>
            <th>نام محصول</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>گوشی</td>
            <td>120.000$</td>
            <td>40</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
