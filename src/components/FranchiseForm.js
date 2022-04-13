import React, { useState } from 'react';
import {useDispatch}from 'react-redux'
import {useHistory} from 'react-router-dom'
import BasicFranchiseInfo from './BasicFranchiseInfo';
import FranchiseContactDetails from './FranchiseContactDetails';
import TypicalFranchisee from './TypicalFranchisee';
import AccessToTheNetwork from './AccessToTheNetwork';
import {requestCreatingFranchise} from '../redux/actionsCreators/franchiseActionCreators'

function FranchiseForm() {

  const dispatch = useDispatch()
  const history = useHistory()
  const [page, setPage] = useState(0)
  const franchiseFormTitles = ["Basic Franchise Information", "Contact Details", "Typical Franchisee", "Access to the Network"]
  const [formData, setFormData] = useState({
    franchiseLogoUrl: "",
    franchiseName: "",
    sector: "",
    yearOfCreation: "",
    numberOfUnities: "",
    adress: "",
    country: "",
    phone: "",
    email: "",
    webSiteUrl: "",
    capital: "",
    commercialRegisterl: "",
    yearOfCreationOfTheNetwork: "",
    populationOfCatchment: "",
    locationQuality: "",
    averageStoreArea: "",
    annualTurnover: "",
    personalContribution: "",
    investment: "",
    profile: "",
    contractDuration: "",
    entranceFees: "",
    directRoyalties: "",
    indirectRoyalties: "",
    otherBonds: "",
    offeredTrainingDuration: ""
  })
  const pageDisplay = () => {
    if (page === 0) {
      return <BasicFranchiseInfo formData={formData} setFormData={setFormData} />
    }
    if (page === 1) {
      return <FranchiseContactDetails formData={formData} setFormData={setFormData} />
    }
    if (page === 2) {
      return <TypicalFranchisee formData={formData} setFormData={setFormData} />
    }
    if (page === 3) {
      return <AccessToTheNetwork formData={formData} setFormData={setFormData} />
    }
  }

  return (

    <div className='franchise-form'>
      <div className="progressbar">
        <div style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
      </div>
      <div className="form-container">

        <div className="form-header">
          <h1>{franchiseFormTitles[page]}</h1>
        </div>

        <div className="form-body">{pageDisplay()} </div>

        <div className="form-footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage(currPage => currPage - 1)
            }}>
            Prev Step
          </button>
          <button
            
            onClick={() => {
              if (page === franchiseFormTitles.length - 1) {
                console.log(formData)
                dispatch(requestCreatingFranchise(formData,history))
              } else {
                setPage(currPage => currPage + 1)
              }

            }}>
            {page === franchiseFormTitles.length - 1 ? 'Submit' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FranchiseForm