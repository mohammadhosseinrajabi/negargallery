import React, { useContext } from 'react'
import { AdminContext } from '../../../context/adminLayoutContext';
import Avatar from './Avatar';
import SidebarGroupTitle from './SidebarGroupTitle';
import SidebarItem from './SidebarItem';


 const  Sidbar=()=> {
  const {showSidebar} = useContext(AdminContext)
  return (
    <section id="sidebar_section">
    <div className={`mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? "expanded" : null}`}>
      <div className="p-0 m-0">
    <Avatar name="محمدحسین رجبی" imagepath="/assets/images/profile pic.jpg"/>
     
    <SidebarItem targetpath="/admin/dashboard" title="داشبورد" icon="fas fa-tachometer-alt"/>
          
          <SidebarGroupTitle title="فروشگاه" />
          <SidebarItem targetpath="/admin/categoryAdmin" title="مدیریت گروه محصول" icon="fas fas fa-stream"/>
          <SidebarItem targetpath="/admin/productAdmin" title="مدیریت محصول" icon="fas fa-cube"/>


       
        <SidebarItem targetpath="/admin/Brands" title="مدیریت برندها" icon="fas fa-copyright"/>

      
      
       

        {/* <!-- =================================== --> */}
        <SidebarGroupTitle title="سفارشات و سبد" />
     
        <SidebarItem targetpath="/admin/basketAdmin" title="مدیریت سبد ها" icon="fas fa-shopping-basket"/>

       
        <SidebarItem targetpath="/admin/OrderAdmin" title="مدیریت سفارشات" icon="fas fa-luggage-cart"/>

      
        

        {/* <!-- =================================== --> */}
        <SidebarGroupTitle title="کاربران و همکاران" />
       
        <SidebarItem targetpath="/admin/Addusers" title="مدیریت  کاربران" icon="fas fa-users"/>

       
        <SidebarItem targetpath="/admin/ManageRole" title="نقش ها  " icon="fas fa-user-tag"/>

       
        {/* <SidebarItem targetpath="*" title="مجوز ها  " icon="fas fa-shield-alt"/> */}

        {/* <!-- =================================== --> */}
        <SidebarGroupTitle title="ارتباطات" />
      
        <SidebarItem targetpath="/admin/QuestionAdmin" title="سوال ها  " icon="fas fa-question-circle"/>


      </div>
    </div>
  </section>
  )
}
export default Sidbar;