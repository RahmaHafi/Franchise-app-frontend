import React from 'react'

function FranchiseContactDetails({ formData, setFormData }) {
  return (
    <div className='step-container'>
      <input
        type="text"
        placeholder='Adress'
        value={formData.adress}
        onChange={(e) =>
          setFormData({ ...formData, adress: e.target.value })
        } />
      <input
        type="text"
        placeholder='Country'
        value={formData.country}
        onChange={(e) =>
          setFormData({ ...formData, country: e.target.value })
        } />
      <input
        type="text"
        placeholder='Phone'
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        } />
      <input
        type="email"
        placeholder='Email'
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        } />
      <input
        type="text"
        placeholder='Website Url'
        value={formData.webSiteUrl}
        onChange={(e) =>
          setFormData({ ...formData, webSiteUrl: e.target.value })
        } />
      <input
        type="text"
        placeholder='Capital'
        value={formData.capital}
        onChange={(e) =>
          setFormData({ ...formData, capital: e.target.value })
        } />
      <input
        type="text"
        placeholder='Commercial Registerl'
        value={formData.commercialRegisterl}
        onChange={(e) =>
          setFormData({ ...formData, commercialRegisterl: e.target.value })
        } />
      <input
        type="text"
        placeholder='Year Of Creation Of The Network'
        value={formData.yearOfCreationOfTheNetwork}
        onChange={(e) =>
          setFormData({ ...formData, yearOfCreationOfTheNetwork: e.target.value })
        } />
    </div>

  )
}

export default FranchiseContactDetails