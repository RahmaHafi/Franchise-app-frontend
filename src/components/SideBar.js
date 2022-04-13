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
import { logout } from '../redux/actionsCreators/userActionCreators';

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
    const userRoles = useSelector(state => state.user.info.roles)
    useEffect(() => {
        if (userRoles.includes("franchisor")) {
            setLinks(prevLinks => ([...prevLinks,
            { path: "/create-franchise", label: "Create Franchise", icon: "fa fa-plus" },
            { path: "/add-job", label: "Add Job", icon: "fa-solid fa-address-card" },
            { path: "/experts", label: "Experts List", icon: "fa-solid fa-list" },
            { path: "/message", label: "Messages", icon: "fa-solid fa-envelope-open-text" }

            ]))
        }
        if (userRoles.includes("admin")) {
            setLinks(prevLinks => ([...prevLinks,
            { path: "/franchises", label: "Manage franchises", icon: "fa fa-home" },
            { path: "/experts", label: "Manage experts", icon: "fa fa-user" },
            { path: "/jobs", label: "Manage jobs", icon: "fa-solid fa-address-card" },
            { path: "/messges", label: "Manage messages", icon: "fa-solid fa-envelope-open-text" }
            ]))
        }
        if (userRoles.includes("franchisee")) {
            setLinks(prevLinks => ([...prevLinks,
            { path: "/franchises", label: "Franchises List ", icon: "fa fa-home" },
            { path: "/experts", label: "experts List ", icon: "fa-solid fa-list" },
            { path: "/messages", label: "Send messages ", icon: "fa-solid fa-paper-plane" },
            { path: "/jobs", label: "Jobs List", icon: "fa-solid fa-address-card" }
            ]))
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