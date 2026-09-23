import React from 'react'
import ICard from './ICard'
import studentimage from '../images/student.jpg'
import studentimage1 from '../images/student.webp'

function ICardGallery() {

    const student=[
    {
        pic:studentimage,
        roll:"1234",
        name:"Sujal Shaw",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
       
        roll:"73456",
        name:"Sameer Shaw",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:studentimage1,
        roll:"783456",
        name:"rana Shaw",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:studentimage,
        roll:"712278",
        name:"Sumit Shaw",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:studentimage,
        roll:"7878",
        name:"Sunil Shaw",
        branch:"CSE",
        college:"ABES Engineering College"
    }
  ]


  return (
    <div style={{height:'400px', display:'flex',justifyContent:'space-evenly', border:'2px solid black'}}>
{/* <ICard pic={studentimage} roll="1132" name="Sujal Kumar" branch="CSE" college="ABES Engineering College" />
<ICard roll="34365" name="Rahul" branch="CSE" college="ABES Engineering College" />
<ICard roll="876788" name="Amit Tomer" branch="CSE" college="ABES Engineering College" /> */}
   
  {/* <ICard data={student[1]} />  */}
  {
    student.map((ele)=>(
      <ICard data={ele} />
    ))
  }
   
    </div>
  )
}

export default ICardGallery