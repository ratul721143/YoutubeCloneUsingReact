import React from 'react'
import './Sidebar.css';
import SidebarItems from './SidebarItems';
import SidebarDatafirst from '../Data/SidebarData/SidebarDatafirst';
import SidebarDatasecond from '../Data/SidebarData/SidebarDatasecond';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar() {
    return (
        <div className="sidebar"> 
            {SidebarDatafirst.map((barmenu,index)=><SidebarItems key={index} Icon={barmenu.icon} menuName={barmenu.menuName} />)}
            <hr className="sidebar__hr"/>
            {SidebarDatasecond.map((barmenu,index)=><SidebarItems key={index} Icon={barmenu.icon} menuName={barmenu.menuName} />)}
            <SidebarItems Icon={ExpandMoreIcon} menuName="see more"/>
            <hr className="sidebar__hr"/>
        </div>
    )
}

export default Sidebar;
