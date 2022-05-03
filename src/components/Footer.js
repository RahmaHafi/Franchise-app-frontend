import React from 'react'

function Footer() {
    return (

        <div className="footer-content">
            <div className="footer-items">
                <div className='footer-item'>
                    <h5>Franchise</h5>
                    <ul>
                        <li> <a href="/">Les fondamentaux</a> </li>
                        <li> <a href="/">Les avantages et exigences</a> </li>
                        <li> <a href="/">Les chiffres clés</a> </li>
                        <li> <a href="/">Le cadre reglementaire</a> </li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <h5>Enseignes</h5>
                    <ul>
                        <li> <a href="/">Les réseaux adérents</a> </li>
                        <li> <a href="/">Les experts adérents</a> </li>
                        <li> <a href="/">Les services dédiés</a> </li>

                    </ul>
                </div>
                <div className='footer-item'>
                    <h5>Franchiseur</h5>
                    <ul>
                        <li> <a href="/">Les étapes de construction</a> </li>
                        <li> <a href="/">Adérer</a> </li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <h5>Franchisé</h5>
                    <ul>
                        <li> <a href="/">Les étapes de construction</a> </li>
                        <li> <a href="/">Adérer</a> </li>
                    </ul>
                </div>
                <div className='footer-item'>
                    <h5>Contacter nous sur </h5>
                    <div className="media">
                        <a href="/"> <i class="bi bi-facebook"></i></a>
                        <a href="/"> <i class="bi bi-twitter"></i></a>
                        <a href="/"> <i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p >Copyright © </p>
            </div>
        </div>

    )
}

export default Footer