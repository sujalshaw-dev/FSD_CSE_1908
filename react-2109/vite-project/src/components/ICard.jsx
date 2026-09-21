import React from 'react'

function ICard({data}) {
  return (
    <div style={{border:'10px solid red', height:'300px', width:'300px'}}>
     <img src={data.pic} height={130} width={100} ></img>
     <h2>Roll:{data.roll}</h2>
     <h2>Name:{data.name}</h2>
     <h2>Branch:{data.branch}</h2>
     <h2>College:{data.college}</h2>

    </div>
  )
}

export default ICard