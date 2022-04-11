import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestAllFranchise } from '../redux/actionsCreators/franchiseActionCreators';
import FranchiseCard from '../components/FranchiseCard';


function Dashboard() {
  
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard