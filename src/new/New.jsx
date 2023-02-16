import React, { useEffect, useState } from 'react'
import style from './new.module.css'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'


export default function New() {
    const [imageFile, setImageFile] = useState([])
    const [page, setPage]=useState(1)
    const [totalPage, setTotalPage]= useState(0)
    useEffect(()=>{
       
        fetch("https://retoolapi.dev/1PXm8e/news")
        .then(respons=>respons.json())
        .then(clots=>setTotalPage(clots.length))
        
    },[])

    useEffect(()=>{
        fetch(`https://retoolapi.dev/1PXm8e/news?_page=${page}&&_limit=10`)
        .then(respons=>respons.json())
        .then(clots=>setImageFile(clots))
    },[page])

    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

//     fetch("https://retoolapi.dev/uI2RQV/data/1", {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'foo',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
  return (
    <section className={style.newsection}>
    <div className={style.newcontainer}>
            <div className={style.newcontent}>
            {
            loading?
            <ClipLoader 
                color={'#f1c111'}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                className={style.load}
              />
              :
            <div className={style.newinfocont}>
                <h2 className={style.newtitle}>Tech News</h2>
                    {Boolean.length && imageFile.map((itam)=>(
                        <div className={style.callimg} key={itam.id}>
                            <div className={style.minblocks}>
                                <div className={style.getimgwidth}>
                                    <Link to={`${itam.id}`}>
                                        <img className={style.getimg} src={itam.img} alt='im'/>
                                    </Link>
                                </div>
                                <div className={style.blocktext}>
                                    <Link className={style.newtlink} to={`${itam.id}`}>
                                        <h2>{itam.title}</h2>
                                        <p>{itam.description}</p>
                                    </Link>
                                </div>   
                            </div>  
                        </div>
                    ))}
            </div>
}
            <div className={style.pagination}>{
                totalPage > 10 && [...new Array(Math.ceil(totalPage/10))].map((i,index)=><span className={style.pagnum} key={index} onClick={()=> setPage(index+1)}>{index+1}</span>)
            }</div>
            </div>
        </div>
       
    </section>
        
  )
}
