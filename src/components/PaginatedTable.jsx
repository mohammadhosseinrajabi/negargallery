import React, { useEffect, useState } from "react";


const PaginatedTable = ({children, data, dataInfo,numOfPage, additionField,searchParams }) => {
  const [initData,setinitData] = useState(data)
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // صفحه‌ای که کاربر وارد می‌کند
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setsearchChar] = useState("");


  useEffect(() => {
    let pCount = Math.ceil(initData.length / numOfPage); 
    setPageCount(pCount);
    let pArr = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, [initData]);

  useEffect(() => {
    let start = (currentPage - 1) * numOfPage;
    let end = currentPage * numOfPage;
    setTableData(initData.slice(start, end));
  }, [currentPage,initData]); 


  //سرچ
  useEffect(()=>{
    setinitData(data.filter(d=>d[searchParams.searchField].includes(searchChar)))
    setCurrentPage(1)
  },[searchChar])
  return (
    <div>
          <div className="row justify-content-between">
          <div className="col-10 col-md-6 col-lg-4">
            <div className="input-group mb-3" dir="ltr">
              <input
                type="text"
                className="form-control"
                placeholder={searchParams.placeholder}
                onChange={(e)=>setsearchChar(e.target.value)}
              />
              <span className="input-group-text">{searchParams.title}</span>
            </div>
          </div>
          <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
            {children}
            {/* <Addcategory /> */}
          </div>
        </div>

      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((i) => (
              <th key={i.field}>{i.title}</th>
            ))}
            {additionField ? <th>{additionField.title}</th> : null}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr key={d.id}>
              {dataInfo.map((i) => (
                <td key={`${i.field}_${d.id}`}>{d[i.field]}</td>
              ))}
              {additionField ? <td>{additionField.elements()}</td> : null}
            </tr>
          ))}
        </tbody>
      </table>
    {pages.length>1 ? (
          <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center"
        >
          <ul className="pagination dir_ltr">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <span
                className="page-link"
                aria-label="Previous"
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </span>
            </li>
            {pages.map((page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <span
                  className="page-link"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </span>
              </li>
            ))}
            <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
              <span
                className="page-link"
                aria-label="Next"
                onClick={() => currentPage < pageCount && setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </span>
            </li>
          </ul>
        </nav>
    ):null}
    </div>
  );
};

export default PaginatedTable;
