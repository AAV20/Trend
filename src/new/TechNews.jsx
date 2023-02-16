import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './new.module.css'


export default function TechNews() {
    const {id}= useParams()
    const [techno,setTechno]=useState({})
    useEffect(()=>{
        fetch(`https://retoolapi.dev/1PXm8e/news/${id}`)
        .then(respons=>respons.json())
        .then(clots=>setTechno(clots))
    },[id])
  return (
    <div  className={style.newblock} key={techno.id}>
        <img className={style.newimg} src={techno.img} alt='img'/>
        <h2 className={style.newtitletwo}>{techno.title}</h2>
        <p className={style.newdescr}>{techno.description}</p>
    </div>
  )
}
