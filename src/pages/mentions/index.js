import React from 'react'
import DropDown from '../../components/dropdown/DropDown'

import './index.css'

const Mentions = () => {
  return (
    <div className='mentions'>
      <h4 className='mentions-title'>Mentions Légales</h4>
      <p className='mentions-text'>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site https://www.cafedufrancais.fr/ l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi : Le présent site est édité par : Au café du français, micro-entreprise ayant pour numéro de SIRET 52017052300044 et qui est domiciliée au 10 rue Monge 75005 Responsable de la publication : Pierre Chazal, joignable par téléphone au 0682183721 et par email pierre@cafedufrancais.fr Webmaster du site: Freelance, joignable par téléphone au 0625172339 Hébergeur du site: Netlify, qui est domicilié 2325 3rd Street, Suite 296, San Francisco, California 94107. et joignable par téléphone au +1 844-899-7312</p>
    </div>
  )
}

export default Mentions;