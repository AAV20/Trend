import React, {useEffect,useState} from 'react' 
import style from './main.module.css' 
import { Link } from 'react-router-dom' 
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'; 

 
 
export default function Maingreen() { 
  const [maingirl,setMaingirl]=useState([]) 
    useEffect(()=>{ 
        fetch('https://api-generator.retool.com/Qwh9Kp/datagirl') 
        .then(respons=>respons.json()) 
        .then(clots=>setMaingirl(clots)) 
 
    },[]) 
  return ( 
   <section className={style.heroBg}> 
   

              { Boolean(maingirl.length) &&  
                <div className={style.maincontainer} data-aos="fade-up" data-aos-duration="700"> 
                  
              <div className={style.heroText}>
                     <div className={style.herotitle}> 
                        <h2 className={style.marketing}>We are ready for your digital marketing</h2> 
                        <div  className={style.btnblock} > 
                        <Link className={style.btn} to='/contact'> 
                            Let us discuss together 
                        </Link> 
                        </div> 
                     </div> 
                     <div className={style.phone} > 
                        <LocalPhoneIcon className={style.tel}/> 
                        <p>+ 99 080 070 4224</p> 
           
                     </div> 
                  </div>
             
                 { maingirl.map((itam)=>( 
                  <div className={style.girlblock} key={itam.id}> 
                    <div className={style.heroImg}> 
                      <img className={style.imgGirl} src={itam.image1} alt='img'/> 
                    </div> 
                </div> 
                ))}
                </div>}
   </section> 
    
  ) 
}