import React,{useEffect, useState} from 'react'
import style from './blog.module.css'
import  imagGalery  from '../blog.json'
import image from './picture/blogimage1.jpg'
import image2 from './picture/newsletter.png'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'



export default function Blog() {
    const [email, setEmail] = useState('')
  
    const send = {
        "email": `${email}`
    }

    const sendInfo = (e)=>{
        e.preventDefault()
        fetch('https://retoolapi.dev/DGPwrK/responses',{
            method:'POST',
            body:JSON.stringify(send),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }


    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
  return (
    <section className={style.blogsection}>
        <div  data-aos="fade-down" data-aos-duration="700">
            <h2 className={style.blogtitle}>Digital Trend Blog</h2>
        </div>
        <div className={style.textinfo}  data-aos="fade-up" data-aos-duration="700">
                        <h4 className={style.creative}>CREATIVE</h4>
                        <h3 className={style.imaglink}>
                            <Link className={style.text}>
                                The Key to Creative Work is Knowing<br></br>When to Walk Away
                            </Link>
                        </h3>
                    </div>
        <div className={style.blogcontent}  data-aos="fade-up" data-aos-duration="700">
            <div className={style.oficeparent}>
                <div className={style.oficeblock}>
                    <img className={style.oficegirl} src={image} alt='img' />
                    </div>
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
                    <div className={style.loopblock}>
             
                        {imagGalery.map((itam)=>(
                                
                        <div className={style.blogimages} key={itam.id}   data-aos="fade-up" data-aos-duration="700">
                            
                            <img className={style.blogimg} src={require(`${itam.img}`)} alt="img"/>
                            <div className={style.description}>
                                <h4 className={style.design}>{itam.design}</h4>
                                <h3 className={style.benefits}>
                                    <Link className={style.benefitslink} to="/creative">
                                        {itam.benefits}
                                    </Link>
                                    </h3>
                                <h4 className={style.lifestyle}>{itam.lifestyle}</h4>
                                <h3 className={style.humble}>
                                    <Link className={style.humblelink} to="/creative">
                                        {itam.humble}
                                    </Link>
                                </h3>
                                <h4 className={style.coding}>{itam.coding}</h4>
                                <h3 className={style.accessible}>
                                    <Link className={style.accessiblelink} to="/creative">
                                        {itam.accessible}
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        ))}
                        
                </div>
}
            </div>
            
        </div>
        <div className={style.envelopblock}>
            <div className={style.envelopcontent}>
                <div className={style.envelopwidth}  data-aos="fade-up"
    data-aos-duration="700">
                    <img className={style.envelopimg} src={image2} alt='img2'/> 
                </div>
                <div className={style.envelopflex}  data-aos="fade-up"
    data-aos-duration="700">
                    <h3 className={style.emailplace}>EMAIL NEWSLETTER</h3>
                    <h2 className={style.emailptitle}>Let’s stay up-to-date. We'll<br></br>share you all good stuffs.</h2>
                    <form action='' onSubmit={sendInfo}>
                        <input onBlur={(e)=>setEmail(e.target.value)} className={style.emailpinput} type='email' placeholder='please enter your email'/>
                        <span className={style.sp8}>We'll NOT share your email address to anyone else.</span>
                        <div  data-aos="fade-up"
        data-aos-duration="700">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                        <label for="vehicle1" className={style.emailopcheck}> Please send me a monthly newsletter.</label>
                        </div>
                        <div className={style.emailopbtnblock}  data-aos="fade-up"
        data-aos-duration="700">
                            <button className={style.emailopbtn} type='submit'>Sign up</button>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    </section>
  )
}
