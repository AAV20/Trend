// import React, { useEffect, useState } from 'react'
import style from './video.module.css'


export default function Video() {
    // const [video, setVideo] = useState()
     
    // useEffect(()=>{
    //     fetch('')
    //     .then(response=>response.json())
    //     .then(clots=>setVideo(clots))
    // })
  return (
    <section className={style.videosection}>
        <div className={style.videocontent}>
        <h2 className={style.videotitle}>Video</h2>
            <div className={style.videofiles}>
                <iframe width="326" height="351" src="https://www.youtube.com/embed/yVxV3-xqJO0" title="Starlink Mission" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               <div className={style.videodescr}>
                    <h2>How to watch SpaceX’s Starlink launch tomorrow</h2>
                    <p>Tomorrow, Sunday, January 29, SpaceX will launch a further batch of Starlink satellites. The launch will use one of the company’s Falcon 9 rockets, lifting off at 8:47 a.m. PT from Space Launch Complex 4 East (SLC-4E) at Vandenberg Space Force Base in California. As is typical for SpaceX the rocket will be re-using a booster that has flown on several previous missions.</p>
               </div>
            </div>
            <div className={style.videofiles}>
                <iframe width="326" height="351" src="https://www.youtube.com/embed/3sse3xtDgCQ" title="ISOCELL HP2: More pixels. Epic details. | Samsung" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={style.videodescr}>
                    <h2>Samsung Galaxy S23: release date, specs, price, rumors, and news</h2>
                    <p>The Galaxy S23 Ultra is again suggested to get a 200MP primary camera on the back, in addition to a 1TB storage option. It should also get a roomy 6.8-inch screen, while the S23+ and base S23 get 6.6-inch and 6.1-inch displays, respectively. The S23 Ultra should also come with up to 12GB of RAM, while the other two models will get 8GB.</p>
               </div>
            </div>
            <div className={style.videofiles}>
                <iframe width="326" height="351" src="https://www.youtube.com/embed/21X5lGlDOfg" title="NASA Live: Official Stream of NASA TV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={style.videodescr}>
                    <h2>How to watch this week’s spacewalk from the ISS</h2>
                    <p>This Thursday, February 2, two astronauts will be performing a spacewalk from the International Space Station (ISS) to work on installing hardware to the station’s exterior as part of an ongoing project to upgrade the power system.</p>
                </div>
            </div>
            <div className={style.videofiles}>
            <iframe width="326" height="351" src="https://www.youtube.com/embed/reGSemVD-BY" title="Like a Dragon: Ishin! | Trooper Cards Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={style.videodescr}>
                    <h2>Like a Dragon: Ishin’s Trooper Cards are full of cameos, including Rahul Kohli</h2>
                    <p>Players will be able to collect and upgrade Trooper Cards that can give them additional attacks or buffs in a fight. Some of these cards feature characters from the series, while others feature cameos from real-world fans of the franchise. The first cameos to be revealed are AEW’s Kenny Omega, as well as Rahul Kohli, an actor who has appeared in shows like iZombie and The Haunting of Bly Manor. </p>
                </div>
            </div>
            <div className={style.videofiles}>
                <iframe width="326" height="351" src="https://www.youtube.com/embed/H7nBlq-FlXE" title="M2 Mac Mini Teardown / Disassembly (4K - Up Close)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={style.videodescr}>
                    <h2>Here’s why people are saying to avoid the entry-level M2 Pro MacBook Pro</h2>
                    <p>That’s because multiple outlets have confirmed that Macs outfitted with entry-level M2 chips (both the M2 itself and the M2 Pro) come with much slower read and write speeds compared to the previous-generation models. For instance, 9to5Mac benchmarked the new 14-inch MacBook Pro with M2 Pro chip and found its SSD’s read and write speeds dropped by 40% and 20% respectively.</p>
                </div>
            </div>
            
            <div className={style.videofiles}>
                <iframe width="326" height="351" src="https://www.youtube.com/embed/2B-XwPjn9YY" title="The Lost 1984 Video: young Steve Jobs introduces the Macintosh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={style.videodescr}>
                    <h2>40 years ago, Apple’s original Macintosh started a revolution</h2>
                    <p>Nearly 40 years ago, the Apple Macintosh computer came out — a revolutionary machine that changed computing forever. Now’s as good a time as any to look back at what made the Macintosh 128K unique.

In the 1980s, the IBM PC was the computer that overwhelmed every other personal computer design. Before its introduction in 1981, serious computers were massive and costly machines that didn’t belong in a home. Even small businesses resorted to adding machines and calculators for daily use. For more complicated work, accounting firms and businesses that specialized in computer processing were used. </p>
                </div>
            </div>
            <div className={style.videofiles}>
                <iframe width="326" height="351" src="https://www.youtube.com/embed/vnR2Guu3atA" title="Knock At The Cabin - " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className={style.videodescr}>
                    <h2>M. Night Shyamalan explains how he tells stories in Knock at the Cabin featurette</h2>
                    <p>M. Night Shyamalan has been scaring audiences for over 20 years, starting with 1999’s The Sixth Sense. Shyamalan’s psychological thrillers are full of supernatural elements that typically end with a huge plot twist. His latest venture, Knock at the Cabin, combines a home invasion with the apocalypse to tell a story that feels larger than life despite taking place in a secluded location.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
