import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { requestCreatingJob } from '../redux/actionsCreators/jobActionCreators';
import job from '../images/job.svg';

function JobForm() { 
  const dispatch= useDispatch()
  const [jobData, setJobdata] = useState({
    jobTitle: "",
    publishedOn: "",
    company: "",
    city: "",
    postalCode: "",
    contact: "",
    email: "",
    experience: "",
    description: "",
    requiredSkills: ""
  })
  console.log(jobData);
  const handleSubmit = (e) => {
  
      e.preventDefault()
      dispatch(requestCreatingJob(jobData))
   
  }

  return (
    <div className="job-container">
      <div>
      <h1>Ajouter une offre d'emploi </h1>
      <Form onSubmit={handleSubmit} className="job-form">
      <div className="job-form-column" >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Poste :</Form.Label>
          <Form.Control
            type="text"
            value={jobData.jobTitle}
            onChange={(e) => setJobdata({ ...jobData, jobTitle: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Publié le :</Form.Label>
          <Form.Control
            type="text"
            value={jobData.publishedOn}
            onChange={(e) => setJobdata({ ...jobData, publishedOn: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Entreprise :</Form.Label>
          <Form.Control
            type="text"
            value={jobData.company}
            onChange={(e) => setJobdata({ ...jobData, company: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Ville :</Form.Label>
          <Form.Control
            type="text"
            value={jobData.city}
            onChange={(e) => setJobdata({ ...jobData, city: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Code postal :</Form.Label>
          <Form.Control
            type="text"
            value={jobData.postalCode}
            onChange={(e) => setJobdata({ ...jobData, postalCode: e.target.value })}
          />
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Contact :</Form.Label>
          <Form.Control
            type="text"
            value={jobData.contact}
            onChange={(e) => setJobdata({ ...jobData, contact: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Email :</Form.Label>
          <Form.Control
            type="email"
            value={jobData.email}
            onChange={(e) => setJobdata({ ...jobData, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Expérience :</Form.Label>
          <Form.Control
            type="text"
            value={jobData.experience}
            onChange={(e) => setJobdata({ ...jobData, experience: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fw-bold">Description :</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={jobData.description}
            onChange={(e) =>  setJobdata({ ...jobData, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fw-bold">Compétences requises :</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={jobData.requiredSkills}
            onChange={(e) =>  setJobdata({ ...jobData, requiredSkills: e.target.value })}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" type="submit">
            Send message
          </Button>
        </div>
        </div>
      </Form>
      </div>
      <img src={job} alt="offre d'emploi"  style={{width:"40vw"}}/>
    </div>
  )
}

export default JobForm