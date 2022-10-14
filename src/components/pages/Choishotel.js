import React from 'react'
import"./Choishotel.js"
import"./Choishotel.css"
import Vector from'./image/Vector.png'
import Group from'./image/Group.png'
import menu from'./image/menu.png'


function Choishotel() {
  return (
    <div>
      <body>
      <div className='image1'>
        
        <div className="menu"><img src={menu} alt="" /></div></div>
      <div className='hotel'> 
        <h1>Hotel Bambou</h1> 
        <div description> <div className="image-vector"><img src={Vector} alt="" /></div>; <h3>Abela, quartier Sobraga</h3> </div>
        <div className="text">Au calme, idéalement situé dans le triangle aéroport, port, centre ville. Studios et chambres meublés. Location au mois et à la journée. TV, wifi</div>
        <div className="icons"><img src={Group} alt="" /></div>
        <div className="map">
            <button className='reservation'>Reserver</button>
        </div>
      </div>
      </body>
    </div>
  )
}

export default Choishotel



