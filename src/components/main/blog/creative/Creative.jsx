import React, { useEffect, useState } from 'react'
import style from '../../contact/contact.module.css'
import stylee from './creative.module.css'
import avatarImage from './creativ.json'
import image from './avatarca/blogimage1.jpg'
import Comment from './Comment'
import { ClipLoader } from 'react-spinners'



export default function Creative() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const send = {
        "img": "https://i.postimg.cc/2yQSMQCB/admin-Icon.png",
        "name": `${name}`,
        "email": `${email}`,
        "message": `${message}`,
       
    }


    const sendMessage = (e)=>{
        e.preventDefault()
        fetch('https://retoolapi.dev/msF9Bw/creativ',{
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

    
    const [loading, setLoading]= useState(false)
    
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

  return (
    <section className={stylee.creativesection}>
        <div className={stylee.creativeblock}>
            <div className={stylee.creativecontent}>
                <div className={stylee.creativtext}>
                     <div className={stylee.creativtitle}>
                        <h3>CREATIVE WORK</h3>
                        <h2>9 useful things to learn and practice for<br></br>your digital marketing</h2>
                     </div>
                     {
            loading?
            <ClipLoader className={style.circl}
                color={'#f1c111'}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              :
                     <div className={stylee.creativloop}>

                        {avatarImage.map((itam)=>(
                            <div className={stylee.creativloopimg} key={itam.id}>
                                <img className={stylee.avimg} src={require(`${itam.avatar}`)} alt="avatar"/>
                                <span className={stylee.text}>{itam.text}</span>
                            </div>
                        ))}
                        
                     </div>
}
                </div>
            </div>
        </div>
        <div className={stylee.anotherimgblock} data-aos="zoom-in-down">
            <img className={stylee.anotherimg} src={image} alt='i'/>
        </div>
        <div className={stylee.textblock}>
            <div className={stylee.row}  data-aos="fade-up"
     data-aos-duration="700">
                <h2 className={stylee.rowtitle1}>Etiam quis metus elementum, tempor risus vel, condimentum orci.</h2>
                <p className={stylee.rowparagraph1}>Mauris in convallis nunc, non facilisis arcu. Nunc sapien nulla, interdum at diam non, aliquam vestibulum leo. Fusce laoreet malesuada ante, consectetur consequat ante tempor et. Quisque ac risus ligula.</p>
                <p className={stylee.rowparagraph2}>Suspendisse bibendum tortor at est placerat auctor. Phasellus tortor est, bibendum eu ex eu, tincidunt efficitur nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <ul className={stylee.rowlist}>
                    <li><span>Quisque at condimentum est. Duis sollicitudin urna id elit pulvinar placerat. Ut ac dui in ex vulputate dictum.</span></li>
                    <li><span>Mauris vitae tellus nisi. Morbi rutrum lacus sit amet volutpat viverra.</span></li>
                    <li><span>Integer maximus sem ut ipsum blandit elementum. Nullam sollicitudin accumsan commodo.</span></li>
                </ul>
                <p className={stylee.rowparagraph3}>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci.</p>
                <h2 className={stylee.rowtitle2}>Curabitur tempus vel libero lobortis feugiat</h2>
                <p className={stylee.rowparagraph4}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris in convallis nunc, non facilisis arcu. Nunc sapien nulla, interdum at diam non, aliquam vestibulum leo.</p>
                <blockquote>
                Phasellus dapibus ex sed dolor blandit, efficitur iaculis ipsum scelerisque. Cras elementum nibh id felis sagittis, sit amet pellentesque ligula porttitor. Fusce laoreet malesuada ante, consectetur consequat ante tempor et. Quisque ac risus ligula.
                </blockquote>

            </div>
                
            <div className={style.registrblock} data-aos="fade-up"
     data-aos-duration="700">
          
                    <Comment/>
                    <div className={stylee.registrtitle}  data-aos="fade-up"
     data-aos-duration="700">
                    <h3>Leave a comment</h3>
                </div>
                    <form  className={stylee.formblock}  action='' onSubmit={sendMessage}>
                        <div className={style.registration}>
                            <input onBlur={(e)=>setName(e.target.value)} className={style.registrinp1} type='text' placeholder='name'/>
                            <input  onBlur={(e)=>setEmail(e.target.value)} className={style.registrinp2}  type='email' placeholder='email'/>
                        </div>
                        <div className={style.messageblock}>
                            <textarea onBlur={(e)=>setMessage(e.target.value)} className={style.registrmessage} placeholder='Message'></textarea>
                        </div>
                        <div className={style.registbtnblock}>
                            <button className={style.registrbtn} type='submit'>Send Comment</button>
                        </div>
                    </form>
                
            </div>
        </div>
    </section>
  )
}
