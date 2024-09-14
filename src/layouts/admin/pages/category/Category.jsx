import React from "react";
import CategoryTable from "./CategoryTable";
import Addcategory from "./Addcategory";

const Category = () => {
  return (
    <div>
      <div
        id="manage_product_category"
        className="manage_product_category main_section"
      >
        <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>

        <CategoryTable />
      </div>
    </div>
  );
};
export default Category;
