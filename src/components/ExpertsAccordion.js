import React, { useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { requestAllExpert } from '../redux/actionsCreators/expertActionCreators';

function ExpertsAccordion() {
    const dispatch = useDispatch()
    const experts = useSelector(state => state.experts.all)
    useEffect(() => {
        dispatch(requestAllExpert())
    }, [dispatch])

    return (
        <div>
            {experts && experts.map((e) => (
                <Accordion style={{ width: "50vw" }}>
                    <Accordion.Item key={e._id}>
                        <Accordion.Header>
                            <div className="expert-accordion-header">
                                <h5>{e.fullName}</h5>
                                <h6>{e.title}</h6>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="expert-accordion-content">
                                <Table   >
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold" >Téléphone :</td>
                                            <td>{e.phone} </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Email : </td>
                                            <td> {e.email} </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Site web :</td>
                                            <td> {e.webSite} </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Adresse :</td>
                                            <td> {e.adress} </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Activités :</td>
                                            <td> {e.activities} </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Structure du bureau :</td>
                                            <td> {e.structureOfTheOffice} </td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Description :</td>
                                            <td> {e.description} </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}

        </div>
    )
}

export default ExpertsAccordion