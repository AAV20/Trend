import React,{useEffect,useState} from 'react'
import style from '../main.module.css'
import { ClipLoader } from 'react-spinners'

export default function About() {
    const [locationimg,setLocation]=useState([])
    useEffect(()=>{
        fetch('https://retoolapi.dev/KoHq9U/location')
        .then(respons=>respons.json())
        .then(clots=>setLocation(clots))

    },[])

    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
  return (
    <section className={style.aboutcont}>
        <div className={style.content}data-aos="fade-up"
     data-aos-duration="700">

       
            <div className={style.titlewidth}>
            <h2 className={style.conttitle}>the best<span className={style.sp1}> Digital Marketing<br></br></span><span className={style.sp2}> agency</span> in Rio de Janeiro</h2>
            <p>Total 5 HTML pages are included in this template from TemplateMo website. Please check 2 blog pages, project page, and contact page.
            <br></br>
            <br></br>
            <br></br>

You are<span className={style.sp3}> allowed </span> to use this template for commercial or non-commercial purpose. You are NOT allowed to redistribute the template ZIP file on template collection websites.</p>
        
            </div>
        
        </div>
         {
            loading?
            <ClipLoader className={style.circle} 
                color={'#f1c111'}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              :
              
        <div  className={style.imgfluidblock}>
            {locationimg.length && locationimg.map((itam)=>(
            <div className={style.oficelocation} key={itam.id} data-aos="fade-up"
            data-aos-duration="700">
                <img className={style.imgfluid} src={itam.locationimg} alt='img'/>
            </div>
        ))}
        </div>
        }
        
    </section>
  )
}