import React from 'react'
import NavBar from '../components/NavBar'

function OutsideLayouts(props) {
    return (
        <>
            <NavBar/>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default OutsideLayouts