import React from 'react'
import style from './footer.module.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div className={style.footercontainer}>
        <div className={style.footercontent}>
            <div className={style.footertext} data-aos="fade-up"
     data-aos-duration="700">
              <div>
                  <h2 className={style.firsttitle}>We make creative<span className={style.sp6}><br></br>brands </span>only.</h2>
              </div>
              <div>
                <ul>
                  <h4 className={style.footertitle}>CONTACT INFO</h4>
                  <li className={style.liLink}>
                    <LocalPhoneIcon className={style.tel2}/>
                    +99 080 070 4224
                  </li>
                  <li className={style.liLink}>
                    <EmailIcon className={style.email}/>
                    hello@company.com
                  </li>
                </ul>
              </div>
              <div>
                  <ul className={style.liLink}>
                      <h4 className={style.footertitle}>OUR STUDIO</h4>
                      <li className={style.houselink}>
                        <HouseIcon className={style.house}/>
                         Av. Lúcio Costa - Barra da<br></br>Tijuca, Rio de Janeiro - RJ,<br></br>Brazil
                      </li>
                  </ul>                
              </div>
            </div>
            <div className={style.footertwoblock}data-aos="fade-up"
     data-aos-duration="700">
                <div  className={style.endcontent}>
                   <div className={style.endtext}>
                    <span className={style.sp7}>Copyright © 2020 Your Company<br></br>
  Design: TemplateMo</span>
                   </div>
                   <div>
                      <ul className={style.anotherlink}>
                        <li>
                            <Link className={style.links} to='stories'>
                              Stories
                            </Link>
                        </li>
                        <li>
                          <Link className={style.links} to='/video'>
                            Video
                          </Link>
                        </li>
                        <li>
                          <Link className={style.links} to='privacy'>
                            Privacy
                          </Link>
                        </li>
                      </ul>
                   </div>
                   <div className={style.iconline}>
                      <InstagramIcon className={style.icon}/>
                      <TwitterIcon className={style.icon}/>
                      <SportsBasketballIcon className={style.icon}/>
                      
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
