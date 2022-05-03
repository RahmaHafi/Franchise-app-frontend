import React from 'react'
import SideBar from '../components/SideBar'

function InsideLayouts(props) {
    return (
        <div className='style-content' >
            <SideBar />
            <div style={{ flex: 1, display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
                {props.children}
            </div>
        </div>
        
    )
}

export default InsideLayouts