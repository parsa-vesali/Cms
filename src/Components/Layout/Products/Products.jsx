import React from "react";
import ProductBox from "./ProductBox/ProductBox";
import ProductPopular from "./ProductPopular/ProductPopular";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import ProductTable from "./ProductTable/ProductTable";
import ErrorBox from "../../Common/ErrorBox/ErrorBox";
import "./Products.css";
export default function Products() {
  return (
   <>
    <div className="Products">
      <div className="Products__right">
        <div className="ProductsBox__container">
          <ProductBox />
          <ProductBox />
        </div>
        <AddNewProduct />
      </div>
      <div className="Products__left">
        <ProductPopular />
      </div>
    </div>
    <ProductTable />
   </>
  );
}
