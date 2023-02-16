import React, { useEffect, useState } from 'react'
import style from './project.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slideItem from '../slide.json' 
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ClipLoader } from 'react-spinners'



export default function Project() {
   
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2200,
        responsive: [
            
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const [loading, setLoading]=useState(false)

      useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },1000)
      },[])
      return (
        
        <div className={style.parentblock} data-aos="fade-up"
        data-aos-duration="700">
            <h2 className={style.slidetitle}>Please take a look through our <span className={style.sp7}>featured Digital Trends</span></h2>
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
            <Slider className={style.projectblock} {...settings}>
           
           {slideItem.map((itam)=>(
               <div className={style.caruselblock} key={itam.id}>
                   <img className={style.imagecarusel} src={require(`${itam.image}`)} alt="g"/>
                   <div className={style.projectInfo}>
                      <div className={style.projectminblock}>
                          <Link className={style.projectInfolinks} to='/agency'>
                              <ChevronRightIcon className={style.right}/>
                          </Link>
                      </div>
                   </div>
               </div>
               
           ))}
            
       </Slider>
}
        </div>
       
      )
    }
    
  