import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
  return (
  <>
    <footer>
    <footer className="footer">
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <NavLink to="/*"></NavLink>

                    <h5 className="text-dark">Texto</h5>
                    <h5 className="text-dark">fsfsf@gmail.com</h5>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <h5 class="text-dark">Redes</h5>
                    <NavLink to="/*" className="nav-link text-dark">Facebook</NavLink>
                    <NavLink to="/*" className="nav-link text-dark mx-3">Instagram</NavLink>
                    <NavLink to="/*" className="nav-link text-dark">TiKTok</NavLink>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">

                    <h5 className="text-dark">Texto</h5>
                   
                    
                </div>
            </div >
        </div >
    </footer >
</footer >
  </>
  )
}

export default Footer
