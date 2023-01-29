import style  from './agency.module.css'
import React from 'react'
import image  from '../images/process.jpg'
import image2 from '../images/website.png'
import avatar from '../images/another.png'




export default function Agency() {
  return (
    <section className={style.agencysection}>
        <div className={style.agencyblock}>
            <div className={style.agencycontent}>
                <div className={style.agencytitle}  data-aos="fade-up"
        data-aos-duration="700">
                    <h3>DIGITAL MARKETING AGENCY</h3>
                    <h2>127+ Duis sollicitudin urna id elit pulvinar<br></br>placerat</h2>
                </div>
                <div className={style.agencyimageblock} data-aos="zoom-in-down">
                    <img className={style.agencyimage} src={image} alt='a'/>
                </div>
            </div>
            <div className={style.agencyconttwo}  data-aos="fade-up"
        data-aos-duration="700">
                <div className={style.agencyimgblocktwo}>
                    <img className={style.anotherimg} src={image2} alt='i2'/>
                </div>
                <div className={style.anothercont}  data-aos="fade-up"
        data-aos-duration="700">
                    <h2>Pellentesque pretium<br></br>interdum</h2>
                    <p>Nunc sapien nulla, interdum at diam non, aliquam<br></br>vestibulum leo. Fusce laoreet malesuada ante,<br></br>consectetur consequat.</p>
                    <ul className={style.anotherlist}>
                        <li><span>Curabitur commodo a sapien non</span></li>
                        <li><span>Sed facilisis convallis turpis</span></li>
                        <li><span>Quisque placerat augue neque</span></li>
                        <li><span>Nullam fringilla arcu a tortor</span></li>
                    </ul>
                </div>
            </div>
            <div className={style.videoblock} data-aos="fade-up"
        data-aos-duration="700">
                <iframe width="1080" height="703" src="https://www.youtube.com/embed/myVN26Vx4MU" title="Landing Page HTML CSS Templates for FREE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
                
            </div>
            <div className={style.texts} data-aos="fade-up"
        data-aos-duration="700">
                    <p>Curabitur egestas mollis tellus sit amet porttitor. Sed leo nisl, posuere at<br></br>molestie ac, suscipit auctor mauris. Etiam quis metus elementum,<br></br>tempor risus vel.</p>
                    <div className={style.creativimagetwo} data-aos="fade-up"
        data-aos-duration="700">
                        <img className={style.avatarimg} src={avatar} alt="avatar"/>
                        <span className={style.textavatar}>Angelo Sharp, Creative Director</span>
                     </div>
                </div> 
        </div>
        
    </section>
  )
}
