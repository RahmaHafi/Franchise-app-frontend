import React from 'react'
import SideBar from '../components/SideBar'

function InsideLayouts(props) {
    return (
        <>
            <SideBar />
            <div>
                {props.children}
            </div>
        </>
    )
}

export default InsideLayouts