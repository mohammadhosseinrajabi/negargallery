import React from 'react'
import TableUsersAdmin from './TableUsersAdmin'
import AddUsersAdmin from './AddUsersAdmin'

export default function UsersAdmin() {
  return (
    <div id="manage_user_section" className="manage_user_section main_section">
    <h4 className="text-center my-3">مدیریت کاربران</h4>
    <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
            <div className="input-group mb-3" dir='ltr'>
                <input type="text" className="form-control" placeholder="قسمتی از نام یا نام خانوادگی را وارد کنید"/>
                <span className="input-group-text" >جستجو</span>
            </div>
        </div>
        <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_user_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
        </div>
    </div>
<TableUsersAdmin/>
<AddUsersAdmin/>
</div>
  )
}
