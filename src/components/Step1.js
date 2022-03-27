import React from 'react'

import { CDBInput, CDBContainer } from 'cdbreact';


function Step1() {
    return (
        <CDBContainer>
            <CDBInput type="text" placeholder="Text" color="primary" />
            <CDBInput type="number" placeholder="Numbers" />
            <CDBInput type="email" placeholder="Email" />
            <CDBInput type="password" placeholder="Password" />
            <CDBInput type="date" placeholder="Date" />
            <CDBInput type="textarea" placeholder="TextArea" />
        </CDBContainer>
    )
}

export default Step1