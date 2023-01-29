import React,{useEffect,useState} from 'react'
import style from './main.module.css'

export default function Testimonial() {
  const [girl,setGirl]=useState([])
    useEffect(()=>{
        fetch('https://api-generator.retool.com/7XbqYv/girl')
        .then(respons=>respons.json())
        .then(clots=>setGirl(clots))

    },[])
  return (
    <section className={style.testimonial}>
        <div className={style.testimonialcont}data-aos="fade-up"
     data-aos-duration="700">
            {girl.length && girl.map((itam)=>(
                <div className={style.girlblock} key={itam.id}>
                <img className={style.picture} src={itam.girlimg1} alt=''/>
            </div>
            ))}
            <div className={style.text}>
                <h3>CLIENT TESTIMONIALS</h3>
                <p>Lorem ipsum Sed eiusmod esse<br></br>aliqua sed incididunt aliqua<br></br>incididunt mollit id et sit proident<br></br>dolor nulla sed commodo.</p>
                <h4 className={style.another}><span className={style.sp5}>Mary Zoe</span> / Digital Agency (CEO)</h4>
            </div>
        </div>
    </section>
  )
}
