import React from 'react'
import "../../styles/card.css"

const Card = (props) => {
  return (

    <div className="card" >
        <img src={props.img_url} className="card-img-top" alt="..."/>
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
        </div>
        <div className='card-footer bg-light'>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>



  )
}

export default Card