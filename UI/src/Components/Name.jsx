import React from 'react'
import Portfolioimg from '../theme_files/image/img.jpeg'

const Name= () => {
  return (
    <>
    <div className="flex text-justify">
        <div><img src={Portfolioimg} class="ml-5 w-44 h-72 shadow-lg rounded-lg mt-6"/></div>
 
        <div className="mt-32 text-center mx-auto font-serif text-lg w-96">
             <h3 className="text-4xl text-orange-100">Hello,</h3>
             <br></br>
             <h2  className="text-5xl  text-amber-900 " >I'm <span className="text-orange-50">Sneha P</span></h2>
         </div>
</div>
</>
  )
}

export default Name