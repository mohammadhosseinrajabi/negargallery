import React from "react";
import PaginatedTable from "../../../../components/PaginatedTable";
import Addcategory from "./Addcategory";
// import { elements } from "chart.js";

const CategoryTable = () => {
  const data = [
    {
      id: "1",
      category: "نقاشی کوبیسم",
      title: "نقاشی",
      price: "1000,000,0000",
      stock: "8",
      like_count: "4",
      status: "1",
    },
    {
      id: "2",
      category: "نقاشی کوبddddddddddیسم",
      title: "طرح",
      price: "9000,000,0000",
      stock: "8",
      like_count: "4",
      status: "1",
    }, {
      id: "2",
      category: "نقاشی کوبddddddddddیسم",
      title: "طرح",
      price: "9000,000,0000",
      stock: "8",
      like_count: "4",
      status: "1",
    }, {
      id: "2",
      category: "نقاشی کوبddddddddddیسم",
      title: "طرح",
      price: "9000,000,0000",
      stock: "8",
      like_count: "4",
      status: "1",
    }, {
      id: "2",
      category: "نقاشی کوبddddddddddیسم",
      title: "طرح",
      price: "9000,000,0000",
      stock: "8",
      like_count: "4",
      status: "1",
    },
  ];
  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];
  const additionalElements = () => {
    return (
      <>
        <i
          className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
          title="زیرمجموعه"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش دسته"
          data-bs-toggle="modal"
          data-bs-placement="top"
          data-bs-target="#add_product_category_modal"
        ></i>
        <i
          className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
          title="افزودن ویژگی"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_attr_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف دسته"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        ></i>
      </>
    );
  };
  const additionField = {
    title: "عملیات",
    elements: () => additionalElements()
  };
  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  }
  return (
    <PaginatedTable data={data} dataInfo={dataInfo} additionField={additionField} searchParams={searchParams} numOfPage={3}>
      <Addcategory/>
    </PaginatedTable>
    // <div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>عنوان</th>
    //                     <th>وضعیت</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>دسته شماره فلان</td>
    //                     <td>فعال</td>
    //                     <td>
    //                         <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_category_modal"></i>
    //                         <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>دسته شماره فلان</td>
    //                     <td>فعال</td>
    //                     <td>
    //                         <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                         <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-placement="top" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>دسته شماره فلان</td>
    //                     <td>فعال</td>
    //                     <td>
    //                         <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                         <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-placement="top" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>دسته شماره فلان</td>
    //                     <td>فعال</td>
    //                     <td>
    //                         <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                         <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-placement="top" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //               <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                   <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //               </li>
    //               <li className="page-item"><a className="page-link" href="#">1</a></li>
    //               <li className="page-item"><a className="page-link" href="#">2</a></li>
    //               <li className="page-item"><a className="page-link" href="#">3</a></li>
    //               <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                   <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //               </li>
    //             </ul>
    //           </nav>
    // </div>
  );
};
export default CategoryTable;
