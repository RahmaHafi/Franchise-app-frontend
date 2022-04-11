import React, {useEffect, useState} from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LINKS = [
    {
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'th-large'
    },
    {
        path: '/profile',
        label: 'Profile',
        icon: 'sticky-note'
    },
]

const SideBar = () => {
    const [links, setLinks] = useState(LINKS)
    const userRoles = useSelector(state => state.users.info.roles)
    useEffect(() => {
        if (userRoles.includes("franchisor")) {
            setLinks(prevLinks => ([...prevLinks, { path: "/create-franchise", label: "Create Franchise", icon: "fa fa-plus" }]))
        }
        if (userRoles.includes("admin")) {
            setLinks(prevLinks => ([...prevLinks, { path: "/experts", label: "Manage experts", icon: "fa fa-user" }, { path: "/franchises", label: "Manage franchises", icon: "fa fa-home" }]))
        }
    }, [userRoles])
    return (
        <CDBSidebar style={{ height: '100vh', position: 'sticky', top: 0 }}>
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    {/* <NavLink to="/dashboard">
                        <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink to="/profile">
                        <CDBSidebarMenuItem icon="sticky-note">Profile</CDBSidebarMenuItem>
                    </NavLink> */}
                    {
                        links.map((link, index) => (
                            <NavLink key={index} to={link.path}>
                                <CDBSidebarMenuItem icon={link.icon}>{link.label}</CDBSidebarMenuItem>
                            </NavLink>
                        ))
                    }
                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{ padding: '20px 5px' }}
                >
                    Sidebar Footer
                </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default SideBar;