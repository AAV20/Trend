import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import style from './header.module.css'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react';




export default function Header() {
let [open, setOpen] = useState(false)
// const nav = useRef()
// function scroll() {
//     if(window.scrollY > 70) {
//         nav.current.style.color = 'red'
//     }else{
//         nav.current.style.color = 'white'}
// }
//   useEffect(() => {
//     window.addEventListener("scroll", scroll)
//     return () => {
//       window.removeEventListener('scroll',scroll)
//     }
//   },[]);
  return (
    <div className={style.headerblock}>
            
              <div className={style.headerwidth} data-aos="fade-left">
              <div className={style.logo}>
                  <Link className={style.iconlink} to='/'>
                      <TrendingUpIcon className={style.trend}/>
                      <h1>Digital Trend</h1>
                  </Link>
              </div>
              <div className={`${open ? style.navbar : style.navigation }`} >
                  <NavLink className={({isActive})=>(isActive? style.active :"")} to='/about'>
                      Studio
                  </NavLink>
                  <NavLink className={({isActive})=>(isActive? style.active :"")} to='/project'>
                      Our Works
                  </NavLink>
                  <NavLink className={({isActive})=>(isActive? style.active :"")} to='/blog'>
                      Blog
                  </NavLink>

                  <NavLink className={({isActive})=>(isActive? style.active :"")} to='/new'>
                      New
                  </NavLink>
                  
                  <NavLink className={({isActive})=>(isActive? style.activecont :"")} to='/contact'>
                    Contact
                  </NavLink>
                  
                 
              </div>
              <div className={style.burger} onClick={() => {
                        setOpen(!open)
                      }}>
                         {/* ref={nav} */}
                      <Hamburger className={style.burgermenu} />
                  </div>
          </div>
            
       
    
   </div> 
     
  );
}

