import React from 'react'
import Header from './Header'


export default function Headindex() {
 const menuButton = document.querySelector('.burgermenu');
 const navbarLinks = document.querySelector('.navigation');

menuButton.addEventListener('click',()=>{
  navbarLinks.classList.toggle('open');
  menuButton.classList.toggle('open');
})

  return (
    <div>
        <Header/>
    </div>
  )
}
