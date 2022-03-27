import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestAllFranchise } from '../redux/actionsCreators/franchiseActionCreators';
import FranchiseCard from '../components/FranchiseCard';


function Home() {
  const dispatch = useDispatch()
  const franchises = useSelector(state => state.franchises.all)
  useEffect(() => {
    dispatch(requestAllFranchise())
  },[dispatch])
  return (
    <div>
      <h1>Franchises List</h1>
      {
        franchises.map((f) => (
          <div key={f._id }>
            <FranchiseCard franchise={f} />
          </div>
        ))
      }

    </div>
  )
}

export default Home