import style from './contact.module.css'



export default function Contact() {

  return (
    <section className={style.contactsection}>
        <div className={style.contactcontent} data-aos="fade-up"
     data-aos-duration="700">
            <div className={style.contactstart}>
            <h2 className={style.contacttitle}>Hey there, Let's <span className={style.sp10}>talk</span> about <br></br><span className={style.sp11}>creative</span> projects</h2>
            <p className={style.contacttext}>or email us at hello@company.com<br></br>

Please follow our contact page to <span className={style.sp11}>setup</span> the contact form.</p>
            </div>
            <div className={style.registrblock}>
                <form action=''>
                    <div className={style.registration}>
                        
                        <input className={style.registrinp1} type='text' placeholder='name'/>
                        <input className={style.registrinp2} type='email' placeholder='email'/>

                    </div>
                    <div className={style.messageblock}>
                        <textarea className={style.registrmessage} placeholder='Message'></textarea>
                    </div>
                    <div className={style.registbtnblock}>
                        <button className={style.registrbtn} type='submit'>Send Message</button>
                    </div>
                </form>
            </div>
            <iframe className={style.map} data-aos="zoom-in-up" title='map' src="https://maps.google.com/maps?q=medical%20center%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no"></iframe>
        </div>
    </section>
  )
}
