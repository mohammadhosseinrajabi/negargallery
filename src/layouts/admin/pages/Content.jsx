import React, { useContext } from 'react'

import { AdminContext } from '../../../context/adminLayoutContext'
import Category from './category/Category'

import ProductAdmin from './ProductAdmin/ProductAdmin'
import Dashboard from './dashboard/Dashboard'
import { Outlet, Route, Routes } from 'react-router-dom'


export default function Content() {
    const {showSidebar} = useContext(AdminContext)
  return (
    <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar":null}`}>
       {/* <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/categoryAdmin' element={<Category />} />
        <Route path='/productAdmin' element={<ProductAdmin />} />
      </Routes> */}
      <Outlet />
    {/* <ProductAdmin/> */}
    </section>
  )
}
