import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFranchiseById } from '../redux/actionsCreators/franchiseActionCreators';
import { useParams } from 'react-router-dom';
import MessageForm from '../components/MessageForm';

function FranchiseDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const selectedFranchise = useSelector(state => state.franchises.selected)
    console.log(selectedFranchise);

    useEffect(() => {
        dispatch(fetchFranchiseById(id))
    }, [dispatch, id])
    return (
        <>
            {
                selectedFranchise ? (
                    <div className="franchise-details-container">
                        <div className="header">
                            <div className="franchise-logo">
                                <img src={selectedFranchise.basicFranchiseInfo.franchiseLogoUrl} alt="Franchise Logo" />
                            </div>
                            <div className="frachise-header" >
                                <h1>{selectedFranchise.basicFranchiseInfo.franchiseName}</h1>
                                <h2>{selectedFranchise.basicFranchiseInfo.sector} </h2>
                            </div>
                        </div>
                        <div className="franchise-body">
                            <div className="franchise-data">
                                <div id="frachise-creation">
                                    <h1>{selectedFranchise.basicFranchiseInfo.yearOfCreation}</h1>
                                    <h4>Année de création</h4>
                                </div>
                                <div id="frachise-creation">
                                    <h1>{selectedFranchise.basicFranchiseInfo.numberOfUnities} </h1>
                                    <h4>Unités franchisées ou affiliées</h4>
                                </div>
                            </div>
                            <Table borderless>
                                <h2>Contacter l'enseigne</h2>
                                <tbody>
                                    <tr><td className="fw-bold">Adresse	:</td><td>{selectedFranchise.contactDetails.adress}</td></tr>
                                    <tr><td className="fw-bold">Pays d'origine :</td><td>{selectedFranchise.contactDetails.country}</td></tr>
                                    <tr><td className="fw-bold">Téléphone :</td><td>{selectedFranchise.contactDetails.phone}</td></tr>
                                    <tr><td className="fw-bold">Email :</td><td>{selectedFranchise.contactDetails.email}</td></tr>
                                    <tr><td className="fw-bold">Site web :</td><td>{selectedFranchise.contactDetails.webSiteUrl}</td></tr>
                                    <tr><td className="fw-bold">Capital :</td><td>{selectedFranchise.contactDetails.capital}</td></tr>
                                    <tr><td className="fw-bold">Registre du commerce :</td><td>{selectedFranchise?.contactDetails?.commercialRegister}</td></tr>
                                    <tr><td className="fw-bold">Année de creation du reseaux :</td><td>{selectedFranchise.contactDetails.yearOfCreationOfTheNetwork}</td></tr>
                                </tbody>
                                <h2>Le franchisé type</h2>
                                <tbody>
                                    <tr><td className="fw-bold">Population de la zone de chalandise :</td><td>{selectedFranchise.typicalFranchisee.populationOfCatchment}</td></tr>
                                    <tr><td className="fw-bold">Qualité de l'emplacement :</td><td>{selectedFranchise.typicalFranchisee.locationQuality}</td></tr>
                                    <tr><td className="fw-bold">Superficie moyenne du magasin :</td><td>{selectedFranchise.typicalFranchisee.averageStoreArea}</td></tr>
                                    <tr><td className="fw-bold">CA annuel en DNT :</td><td>{selectedFranchise.typicalFranchisee.annualTurnover}</td></tr>
                                    <tr><td className="fw-bold">Apport personnel :</td><td>{selectedFranchise.typicalFranchisee.personalContribution}</td></tr>
                                    <tr><td className="fw-bold">Investissement :</td><td>{selectedFranchise.typicalFranchisee.investment}</td></tr>
                                    <tr><td className="fw-bold">Profil :</td><td>{selectedFranchise.typicalFranchisee.profile}</td></tr>
                                </tbody>
                                <h2>L'accès au réseau</h2>
                                <tbody>
                                    <tr><td className="fw-bold">Durée du contrat (en années) :</td><td>{selectedFranchise.accessToTheNetwork.contractDuration}</td></tr>
                                    <tr><td className="fw-bold">Droits d'entrée :</td><td>{selectedFranchise.accessToTheNetwork.entranceFees}</td></tr>
                                    <tr><td className="fw-bold">Redevances directes :</td><td>{selectedFranchise.accessToTheNetwork.directRoyalties}</td></tr>
                                    <tr><td className="fw-bold">Redevances indirectes :</td><td>{selectedFranchise.accessToTheNetwork.indirectRoyalties}</td></tr>
                                    <tr><td className="fw-bold">Autres obligations :</td><td>{selectedFranchise.accessToTheNetwork.otherBonds}</td></tr>
                                    <tr><td className="fw-bold">Formation proposée :</td><td>{selectedFranchise.accessToTheNetwork.offeredTrainingDuration}</td></tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="message-to-send">
                            <h2>Envoie de message pour plus d'information</h2>
                            <MessageForm franchiseId={id} />
                        </div>

                    </div>
                ) : (
                    <p>Loading</p>
                )
            }

        </>
    )
}

export default FranchiseDetails