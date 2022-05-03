import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { requestAllFranchise, requestDeleteFranchise } from '../redux/actionsCreators/franchiseActionCreators';
import { useHistory } from 'react-router-dom';


function Dashboard() {
  const history = useHistory()
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this franchise?")){
      dispatch(requestDeleteFranchise(id))
    }
  }
  // const userRoles = useSelector(state => state.user.info.roles)
  const dispatch = useDispatch()
  const franchises = useSelector(state => state.franchises.all)
  useEffect(() => {
    dispatch(requestAllFranchise())
  }, [dispatch])

  return (
    <div className='franchise-table'>
      <h1 className='dashbord-title'>Liste des enseignes</h1>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Ensigne</th>
            <th>Secteur</th>
            <th>Apport Minimum</th>
            <th>Action</th>
          </tr>
        </thead>
        {
          franchises && franchises.map((f) => (

            <tbody key={f._id}>
              <tr>
                <td>
                  <img src={f.basicFranchiseInfo.franchiseLogoUrl} alt="franchise lofo" style={{ width: "200px", height: "100px" }} />
                </td>
                <td>{f.basicFranchiseInfo.franchiseName}</td>
                <td>{f.basicFranchiseInfo.sector}</td>
                <td>{f.contactDetails.webSiteUrl}</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      variant="danger"
                      className="me-1"
                      onClick={() => handleDelete(f._id)}
                    >Delete
                    </Button>
                    <Button variant="warning" className="me-1"onClick={()=> history.push(`/update-franchise/${f._id}`)}>Update</Button>
                    
                    <Button variant="success" onClick={()=> history.push(`/franchises/${f._id}`)}>Details</Button>
                  </ButtonGroup>
                    
                </td>
              </tr>

            </tbody>
          ))
        }

      </Table>
    </div >
  )
}

export default Dashboard