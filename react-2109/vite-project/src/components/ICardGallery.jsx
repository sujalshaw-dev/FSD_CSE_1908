import React from 'react'
import ICard from './ICard'
import studentimage from '../images/studentimage.jpg'
function ICardGallery() {

    const student={
        pic:{studentimage},
        roll:"787878",
        name:"Rahul Kumar",
        branch:"CSE",
        college:"ABES Engineering College"
    }


  return (
    <div style={{height:'400px', display:'flex',justifyContent:'space-evenly', border:'2px solid black'}}>
{/* <ICard pic={studentimage} roll="8808" name="Ankit Kumar" branch="CSE" college="ABES Engineering College" />
<ICard roll="34365" name="Rahul" branch="CSE" college="ABES Engineering College" />
<ICard roll="876788" name="Amit Tomer" branch="CSE" college="ABES Engineering College" /> */}
   
  <ICard data={student} /> 
   
    </div>
  )
}

export default ICardGallery