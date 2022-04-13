import React from 'react'
import SideBar from '../components/SideBar'

function InsideLayouts(props) {
    return (
        <div className='style-content'>
            <SideBar />
            <div>
                {props.children}
            </div>
        </div>
        
    )
}

export default InsideLayouts