import React from 'react'
import About from './about/About'
import Main from './Main'
import Project from './project/Project'
import Testimonial from './Testimonial'



export default function Parent() {
  return (
    <div>
        <Main/>
        <About/>
        <Project/>
        <Testimonial/>
    </div>
  )
}
