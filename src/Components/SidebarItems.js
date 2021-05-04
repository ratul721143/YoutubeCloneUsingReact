import React from 'react'
import './SidebarItems.css'

function SidebarItems({Icon,menuName}) {
    return (
        <div className="sidebar__item">
            <Icon className="sidebar__icon" />
            <h2 className="sidebar__item__menu">{menuName}</h2>
        </div>
    )
}

export default SidebarItems;
