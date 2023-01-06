import React from 'react'
const Card = (props) => {

  return (
    <>
        <div className="movieCard" style={{width:"275px", height:"185px", display:"flex"}}>
            <img src={props.img} alt="" className="cardImg"/>  
        </div>
    </>
  )
}

export default Card