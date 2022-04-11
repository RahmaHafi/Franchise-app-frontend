import React, { useEffect, useState } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import{ logout } from '../redux/actionsCreators/userActionCreators';

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
    const dispatch = useDispatch()
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
                <CDBSidebarMenuItem icon="fa fa-lock" onClick={() => dispatch(logout())}>Log Out</CDBSidebarMenuItem>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default SideBar;