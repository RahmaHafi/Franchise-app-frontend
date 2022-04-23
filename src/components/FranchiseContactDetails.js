import React from 'react'

function FranchiseContactDetails({ formData, setFormData }) {
  return (
    <div className='step-container'>
      <input
        type="text"
        placeholder='Adress'
        value={formData.contactDetails.adress}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, contactDetails: { ...prevFormData.contactDetails,adress: e.target.value }  }))

        } />
      <input
        type="text"
        placeholder='Country'
        value={formData.contactDetails.country}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, contactDetails: { ...prevFormData.contactDetails,country: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Phone'
        value={formData.contactDetails.phone}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, contactDetails: { ...prevFormData.contactDetails,phone: e.target.value }  }))
        } />
      <input
        type="email"
        placeholder='Email'
        value={formData.contactDetails.email}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, contactDetails: { ...prevFormData.contactDetails,email: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Website Url'
        value={formData.contactDetails.webSiteUrl}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, contactDetails: { ...prevFormData.contactDetails,webSiteUrl: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Capital'
        value={formData.contactDetails.capital}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, contactDetails: { ...prevFormData.contactDetails,capital: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Commercial Registerl'
        value={formData.contactDetails.commercialRegister}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, contactDetails: { ...prevFormData.contactDetails,commercialRegister: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Year Of Creation Of The Network'
        value={formData.contactDetails.yearOfCreationOfTheNetwork}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, contactDetails: { ...prevFormData.contactDetails,yearOfCreationOfTheNetwork: e.target.value }  }))
        } />
    </div>

  )
}

export default FranchiseContactDetails