import React from 'react'

export default function SidebarGroupTitle({title}) {
  return (
    <div className="py-1 text-start d-flex justify-content-center no_pointer no_hover sidebar-items">
    <span className="hiddenable no_wrap group_sidebar_title">
     {title}
    </span>
    </div>
  )
}
