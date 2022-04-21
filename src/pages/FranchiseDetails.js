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
                    <>
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
                                <div className="frachise-creation">
                                    <h1>{selectedFranchise.basicFranchiseInfo.yearOfCreation}</h1>
                                    <h4>Année de création</h4>
                                </div>
                                <div className="franchise-unities">
                                    <h1>{selectedFranchise.basicFranchiseInfo.numberOfUnities} </h1>
                                    <h4>Unités franchisées ou affiliées</h4>
                                </div>
                            </div>
                            <Table borderless>
                                <h2>Contacter l'enseigne</h2>
                                <tbody>
                                    <tr><td>Adresse	:</td><td>{selectedFranchise.contactDetails.adress}</td></tr>
                                    <tr><td>Pays d'origine :</td><td>{selectedFranchise.contactDetails.country}</td></tr>
                                    <tr><td>Téléphone :</td><td>{selectedFranchise.contactDetails.phone}</td></tr>
                                    <tr><td>Email :</td><td>{selectedFranchise.contactDetails.email}</td></tr>
                                    <tr><td>Site web :</td><td>{selectedFranchise.contactDetails.webSiteUrl}</td></tr>
                                    <tr><td>Capital :</td><td>{selectedFranchise.contactDetails.capital}</td></tr>
                                    <tr><td>Registre du commerce :</td><td>{selectedFranchise?.contactDetails?.commercialRegister}</td></tr>
                                    <tr><td>Année de creation du reseaux :</td><td>{selectedFranchise.contactDetails.yearOfCreationOfTheNetwork}</td></tr>
                                </tbody>
                                <h2>Le franchisé type</h2>
                                <tbody>
                                    <tr><td>Population de la zone de chalandise :</td><td>{selectedFranchise.typicalFranchisee.populationOfCatchment}</td></tr>
                                    <tr><td>Qualité de l'emplacement :</td><td>{selectedFranchise.typicalFranchisee.locationQuality}</td></tr>
                                    <tr><td>Superficie moyenne du magasin :</td><td>{selectedFranchise.typicalFranchisee.averageStoreArea}</td></tr>
                                    <tr><td>CA annuel en DNT :</td><td>{selectedFranchise.typicalFranchisee.annualTurnover}</td></tr>
                                    <tr><td>Apport personnel :</td><td>{selectedFranchise.typicalFranchisee.personalContribution}</td></tr>
                                    <tr><td>Investissement :</td><td>{selectedFranchise.typicalFranchisee.investment}</td></tr>
                                    <tr><td>Profil :</td><td>{selectedFranchise.typicalFranchisee.profile}</td></tr>
                                </tbody>
                                <h2>L'accès au réseau</h2>
                                <tbody>
                                    <tr><td>Durée du contrat (en années) :</td><td>{selectedFranchise.accessToTheNetwork.contractDuration}</td></tr>
                                    <tr><td>Droits d'entrée :</td><td>{selectedFranchise.accessToTheNetwork.entranceFees}</td></tr>
                                    <tr><td>Redevances directes :</td><td>{selectedFranchise.accessToTheNetwork.directRoyalties}</td></tr>
                                    <tr><td>Redevances indirectes :</td><td>{selectedFranchise.accessToTheNetwork.indirectRoyalties}</td></tr>
                                    <tr><td>Autres obligations :</td><td>{selectedFranchise.accessToTheNetwork.otherBonds}</td></tr>
                                    <tr><td>Formation proposée :</td><td>{selectedFranchise.accessToTheNetwork.offeredTrainingDuration}</td></tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="message-to-send">
                            <h2>Envoie de message pour plus d'information</h2>
                            <MessageForm franchiseId={id} />
                        </div>

                    </>
                ) : (
                    <p>Loading</p>
                )
            }

        </>
    )
}

export default FranchiseDetails