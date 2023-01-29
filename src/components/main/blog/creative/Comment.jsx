import React, { useEffect, useState } from 'react'
import stylee from './creative.module.css'
import { ClipLoader } from 'react-spinners'




export default function Comment() {
    const [comment, setComment]= useState([])
    const [loading, setLoading]=useState(false)
    const [seeindex, setSeeindex]=useState(2)

    const fetchData = () => {
        return fetch("https://retoolapi.dev/msF9Bw/creativ")
              .then((response) => response.json())
              .then((data) => setComment(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])


      useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },1000)
      },[])

      
  return (
   
    <div>
       {
      loading?
      
      <ClipLoader
          color={'#f1c111'}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        :
        <div>
          
          {comment.slice(0,seeindex).map((itam)=>(
            <div className={stylee.commentblock} key={itam.id}>
                <img src={itam.img} alt=''/>
                <h2  className={stylee.commenttitle}>{itam.name}</h2>
                <p  className={stylee.commenttext}>{itam.message}</p>
            </div>
        ))}
        { seeindex <= 2 ? <button className={stylee.see} onClick={()=>setSeeindex(comment.length)}>See more</button>: <button className={stylee.see} onClick={()=>setSeeindex(2)}>See less</button>}
         
        </div>
}
    </div>
        
  )
}
