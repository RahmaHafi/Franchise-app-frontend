import React from 'react'

function AccessToTheNetwork({ formData, setFormData }) {
  return (
    <div className='step-container'>
      <input
        type="text"
        placeholder='Contract Duration'
        value={formData.contractDuration}
        onChange={(e) =>
          setFormData({ ...formData, contractDuration: e.target.value })
        } />
      <input
        type="text"
        placeholder='Entrance Fees'
        value={formData.entranceFees}
        onChange={(e) =>
          setFormData({ ...formData, entranceFees: e.target.value })
        } />
      <input
        type="text"
        placeholder='Direct Royalties'
        value={formData.directRoyalties}
        onChange={(e) =>
          setFormData({ ...formData, directRoyalties: e.target.value })
        } />
      <input
        type="text"
        placeholder='Indirect Royalties'
        value={formData.indirectRoyalties}
        onChange={(e) =>
          setFormData({ ...formData, indirectRoyalties: e.target.value })
        } />
      <textarea
        type="text"
        placeholder='Other Bonds'
        value={formData.otherBonds}
        onChange={(e) =>
          setFormData({ ...formData, otherBonds: e.target.value })
        } />
      <textarea
        type="text"
        placeholder='Offered Training Duration'
        value={formData.offeredTrainingDuration}
        onChange={(e) =>
          setFormData({ ...formData, offeredTrainingDuration: e.target.value })
        } />

    </div>
  )
}

export default AccessToTheNetwork