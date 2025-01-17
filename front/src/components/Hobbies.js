import React from 'react'
import ContainerMin from '../containers/ContainerMin.js'
import './Hobbies.css'

const Hobbies = () => {
  return (
    <ContainerMin>
      <div id='hobbies'>
        <h4><u>CENTRES D'INTERET</u></h4>
        <div className='ligne' />
        <ul>
          <li><img src="https://png.icons8.com/ios/90/D2EFEF/star-wars.png" alt='starwars'/>
            <figcaption> Univers Star Wars</figcaption></li>

          <li><img src="https://png.icons8.com/metro/90/D2EFEF/batman-old.png" alt='comics'/>
            <figcaption>Comic Book</figcaption></li>

          <li><img src="https://png.icons8.com/ios/90/D2EFEF/planet.png" alt='espace'/>
            <figcaption>L'astrophotographie</figcaption></li>

          {/* <li><img src="https://png.icons8.com/ios/90/D2EFEF/budapest-filled.png" alt='Wes'/> */}
            {/* <figcaption>Univers Wes Anderson</figcaption></li> */}

        </ul>
        <ul>
          <li><img src="https://png.icons8.com/metro/90/D2EFEF/autopilot.png" alt='pilote' />
            <figcaption> Aviation</figcaption></li>

          <li><img src="https://png.icons8.com/ios/90/D2EFEF/scuba-diving-filled.png" alt='plongee'/>
            <figcaption>Plongée sous marine</figcaption></li>

           <li><img src="https://png.icons8.com/wired/90/D2EFEF/airport.png" alt='avion' />
            <figcaption>Les Voyages (Amériques Centrale et Sud)</figcaption></li>
          
          {/* <li><img src="https://png.icons8.com/ios-glyphs/90/D2EFEF/equestrian.png" alt='equitation'/> */}
            {/* <figcaption>Equitation</figcaption></li> */}

        </ul>
        <ul>
         
          {/* <li><img src="https://png.icons8.com/dotty/90/D2EFEF/museum.png" alt='musee'/> */}
            {/* <figcaption>Musée & Archéologie</figcaption></li> */}

        </ul>
      </div>
    </ContainerMin>
  )
}

export default Hobbies
