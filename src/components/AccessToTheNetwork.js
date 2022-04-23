import React from 'react'

function AccessToTheNetwork({ formData, setFormData }) {
  return (
    <div className='step-container'>
      <input
        type="text"
        placeholder='Contract Duration'
        value={formData.accessToTheNetwork.contractDuration}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, accessToTheNetwork: { ...prevFormData.accessToTheNetwork,contractDuration: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Entrance Fees'
        value={formData.accessToTheNetwork.entranceFees}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, accessToTheNetwork: { ...prevFormData.accessToTheNetwork,entranceFees: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Direct Royalties'
        value={formData.accessToTheNetwork.directRoyalties}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, accessToTheNetwork: { ...prevFormData.accessToTheNetwork,directRoyalties: e.target.value }  }))
        } />
      <input
        type="text"
        placeholder='Indirect Royalties'
        value={formData.accessToTheNetwork.indirectRoyalties}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, accessToTheNetwork: { ...prevFormData.accessToTheNetwork,indirectRoyalties: e.target.value }  }))
        } />
      <textarea
        type="text"
        placeholder='Other Bonds'
        value={formData.accessToTheNetwork.otherBonds}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, accessToTheNetwork: { ...prevFormData.accessToTheNetwork,otherBonds: e.target.value }  }))
        } />
      <textarea
        type="text"
        placeholder='Offered Training Duration'
        value={formData.accessToTheNetwork.offeredTrainingDuration}
        onChange={(e) =>
          setFormData(prevFormData => ({ ...prevFormData, accessToTheNetwork: { ...prevFormData.accessToTheNetwork,offeredTrainingDuration: e.target.value }  }))
        } />

    </div>
  )
}

export default AccessToTheNetwork