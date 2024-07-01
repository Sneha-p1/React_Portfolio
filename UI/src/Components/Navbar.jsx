import React from 'react'

const Navbar = () => {
  return (
    <div className="no-underline font-serif text-lg float-right mt-3 mr-4">
    <a href="home" className="hover:text-white ">Home</a> &nbsp;&nbsp;
    <a href="About" className="hover:text-white " >About</a> &nbsp;&nbsp;
    <a href="Project" className="hover:text-white ">Projects</a>&nbsp;&nbsp;
    <a href="contact" className="hover:text-white ">Contact</a>
</div>
  )
}

export default Navbar