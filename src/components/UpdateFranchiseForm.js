import React, { useState , useEffect} from 'react';
import {useDispatch, useSelector}from 'react-redux'
import {useHistory,useParams} from 'react-router-dom'
import BasicFranchiseInfo from './BasicFranchiseInfo';
import FranchiseContactDetails from './FranchiseContactDetails';
import TypicalFranchisee from './TypicalFranchisee';
import AccessToTheNetwork from './AccessToTheNetwork';
import {fetchFranchiseById, requestUpdatingFranchise} from '../redux/actionsCreators/franchiseActionCreators'

function UpdateFranchiseForm() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const selectedFranchise= useSelector(state => state.franchises.selected)
  const [page, setPage] = useState(0)
  const franchiseFormTitles = ["Basic Franchise Information", "Contact Details", "Typical Franchisee", "Access to the Network"]
  const [formData, setFormData] = useState({
    basicFranchiseInfo: {
      franchiseLogoUrl: "",
      franchiseName: "",
      sector: "",
      yearOfCreation: "",
      numberOfUnities: "",
    },
    contactDetails: {
      adress: "",
      country: "",
      phone: "",
      email: "",
      webSiteUrl: "",
      capital: "",
      commercialRegister:"",
      yearOfCreationOfTheNetwork: "",
    },
    typicalFranchisee: {
      populationOfCatchment: "",
      locationQuality: "",
      averageStoreArea: "",
      annualTurnover: "",
      personalContribution: "",
      investment: "",
      profile: "",
    },
    accessToTheNetwork: {
      contractDuration: "",
      entranceFees: "",
      directRoyalties: "",
      indirectRoyalties: "",
      otherBonds: "",
      offeredTrainingDuration: ""
    }
  })
  const pageDisplay = () => {
    if (page === 0) {
      return formData ? <BasicFranchiseInfo formData={formData} setFormData={setFormData} /> : <h1>nth</h1>
    }
    if (page === 1) {
      return formData ? <FranchiseContactDetails formData={formData} setFormData={setFormData} /> : null
    }
    if (page === 2) {
      return formData? <TypicalFranchisee formData={formData} setFormData={setFormData} /> : null
    }
    if (page === 3) {
      return formData ? <AccessToTheNetwork formData={formData} setFormData={setFormData} /> : null
    }
  }
  useEffect(()=>{
    if(selectedFranchise){
      setFormData(selectedFranchise) 
    }
  },[selectedFranchise])

  useEffect(()=>{
    dispatch(fetchFranchiseById(id))
  },[dispatch, id])

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
                dispatch(requestUpdatingFranchise(id,formData,history))
              } else {
                setPage(currPage => currPage + 1)
              }

            }}>
            {page === franchiseFormTitles.length - 1 ? 'Update' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateFranchiseForm