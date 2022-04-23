import React from 'react'

function BasicFranchiseInfo({ formData, setFormData }) {
  return (
    <div className='step-container'>
      <input
        type="text"
        placeholder='franchise Logo Url'
        value={formData.basicFranchiseInfo.franchiseLogoUrl}
        onChange={(e) =>
          // setFormData({ ...formData, franchiseLogoUrl: e.target.value })
          setFormData(prevFormData => ({ ...prevFormData, basicFranchiseInfo: { ...prevFormData.basicFranchiseInfo, franchiseLogoUrl: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='franchise Name'
        value={formData.basicFranchiseInfo.franchiseName}
        onChange={(e) =>
          // setFormData({ ...formData, franchiseName: e.target.value })
          setFormData(prevFormData => ({ ...prevFormData, basicFranchiseInfo: { ...prevFormData.basicFranchiseInfo, franchiseName: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Sector'
        value={formData.basicFranchiseInfo.sector}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, basicFranchiseInfo: { ...prevFormData.basicFranchiseInfo, sector: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Year of creation'
        value={formData.basicFranchiseInfo.yearOfCreation}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, basicFranchiseInfo: { ...prevFormData.basicFranchiseInfo, yearOfCreation: e.target.value }  }))
        } />
      <input 
      type="text" 
      placeholder='Number of unities'
       value={formData.basicFranchiseInfo.numberOfUnities}
       onChange={(e) =>
         setFormData(prevFormData => ({ ...prevFormData, basicFranchiseInfo: { ...prevFormData.basicFranchiseInfo, numberOfUnities: e.target.value }  }))
       } />
    </div>
  )
}

export default BasicFranchiseInfo