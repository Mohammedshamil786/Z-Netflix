import React,{useState} from 'react'
import './Nav.css'

function Nav() {
    const [show,setShow]=useState(false)
    window.addEventListener('scroll',()=>{
        if(window.scrollY>600){
            setShow(true)
        }
        else{
            setShow(false)
        }
    })
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" width={'130px'} alt="Logo" />
    </div>
  )
}

export default Nav