import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function SidebarItem({title,icon,targetpath}) {
  return (
    <NavLink to={targetpath}
    className="py-1 text-start pe-4 sidebar_menu_item sidebar-items">
    <i className={`ms-3 icon ${icon} text-light`}></i>
    <span className="hiddenable no_wrap font_08">{title}</span>
   </NavLink>
  )
}
