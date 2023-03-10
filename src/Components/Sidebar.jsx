import React from 'react'
import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-content">
                <div className="user">
                    {/* //avatar and username here later */}
                    <p>Hey user</p>
                </div>
                <nav className="links">
                    <ul>
                        <li>
                            <NavLink exact to='/'>
                                <img src={DashboardIcon} alt="" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'>
                                <img src={AddIcon} alt="" />
                                <span>Add</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
