import React from 'react'

function TypicalFranchisee({ formData, setFormData }) {
  return (
    <div className='step-container'>
      <input
        type="text"
        placeholder='Population Of Catchment'
        value={formData.typicalFranchisee.populationOfCatchment}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, typicalFranchisee: { ...prevFormData.typicalFranchisee,populationOfCatchment: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Location Quality'
        value={formData.typicalFranchisee.locationQuality}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, typicalFranchisee: { ...prevFormData.typicalFranchisee, locationQuality: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Average Store Area'
        value={formData.typicalFranchisee.averageStoreArea}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, typicalFranchisee: { ...prevFormData.typicalFranchisee, averageStoreArea: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Annual Turnover'
        value={formData.typicalFranchisee.annualTurnover}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, typicalFranchisee: { ...prevFormData.typicalFranchisee, annualTurnover: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Personal Contribution'
        value={formData.typicalFranchisee.personalContribution}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, typicalFranchisee: { ...prevFormData.typicalFranchisee, personalContribution: e.target.value }  }))
        } />
      <input 
      type="text" 
      placeholder='Investment'
      value={formData.typicalFranchisee.investment}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, typicalFranchisee: { ...prevFormData.typicalFranchisee, investment: e.target.value }  }))
        } />
      <textarea 
      type="text" 
      placeholder='profile'
      value={formData.typicalFranchisee.profile}
      onChange={(e) =>
        setFormData(prevFormData => ({ ...prevFormData, typicalFranchisee: { ...prevFormData.typicalFranchisee, profile: e.target.value }  }))

      } />
    </div>

  )
}

export default TypicalFranchisee