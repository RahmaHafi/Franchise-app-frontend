import React from 'react'

function TypicalFranchisee({ formData, setFormData }) {
  return (
    <div className='step-container'>
      <input
        type="text"
        placeholder='Population Of Catchment'
        value={formData.populationOfCatchment}
        onChange={(e) =>
          setFormData({ ...formData, populationOfCatchment: e.target.value })
        } />
      <input
        type="text"
        placeholder='Location Quality'
        value={formData.locationQuality}
        onChange={(e) =>
          setFormData({ ...formData, locationQuality: e.target.value })
        } />
      <input
        type="text"
        placeholder='Average Store Area'
        value={formData.averageStoreArea}
        onChange={(e) =>
          setFormData({ ...formData, averageStoreArea: e.target.value })
        } />
      <input
        type="text"
        placeholder='Annual Turnover'
        value={formData.annualTurnover}
        onChange={(e) =>
          setFormData({ ...formData, annualTurnover: e.target.value })
        } />
      <input
        type="text"
        placeholder='Personal Contribution'
        value={formData.personalContribution}
        onChange={(e) =>
          setFormData({ ...formData, personalContribution: e.target.value })
        } />
      <input 
      type="text" 
      placeholder='Investment'
      value={formData.investment}
        onChange={(e) =>
          setFormData({ ...formData,investment: e.target.value })
        } />
      <textarea 
      type="text" 
      placeholder='profile'
      value={formData.profile}
      onChange={(e) =>
        setFormData({ ...formData,profile: e.target.value })
      } />
    </div>

  )
}

export default TypicalFranchisee