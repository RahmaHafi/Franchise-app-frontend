import React from 'react'

function BasicFranchiseInfo({ formData, setFormData }) {
  return (
    <div className='step-container'>
      <input
        type="text"
        placeholder='franchise Logo Url'
        value={formData.franchiseLogoUrl}
        onChange={(e) =>
          setFormData({ ...formData, franchiseLogoUrl: e.target.value })
        } />
      <input
        type="text"
        placeholder='franchise Name'
        value={formData.franchiseName}
        onChange={(e) =>
          setFormData({ ...formData, franchiseName: e.target.value })
        } />
      <input
        type="text"
        placeholder='Sector'
        value={formData.sector}
        onChange={(e) =>
          setFormData({ ...formData, sector: e.target.value })
        } />
      <input
        type="text"
        placeholder='Year of creation'
        value={formData.yearOfCreation}
        onChange={(e) =>
          setFormData({ ...formData, yearOfCreation: e.target.value })
        } />
      <input 
      type="text" 
      placeholder='Number of unities'
       value={formData.numberOfUnities}
       onChange={(e) =>
         setFormData({ ...formData,numberOfUnities: e.target.value })
       } />
    </div>
  )
}

export default BasicFranchiseInfo