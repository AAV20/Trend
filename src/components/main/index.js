import React from 'react'
import About from './about/About'
import Maingreen from './Maingreen'
import Project from './project/Project'
import Testimonial from './Testimonial'



export default function Parent() {
  return (
    <div>
        <Maingreen/>
        <About/>
        <Project/>
        <Testimonial/>
    </div>
  )
}
