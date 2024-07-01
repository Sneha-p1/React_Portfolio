import React from 'react'
import Mail from '../theme_files/image/Mail.jpeg'
import Net from '../theme_files/image/Net.jpeg'
import Phone from '../theme_files/image/Phone.jpeg'

const Bottumdiv = () => {
  return (
    <>
    <div className="flex gap-10 mb-10 ml-3">
      <img src={Mail} className="w-9 rounded-3xl animate-bounce"/>snehaparambadan@gmail.com
      <img src={Phone} className="w-9 rounded-3xl animate-bounce"/>9746990966
      <img src={Net} className="w-9 rounded-3xl animate-bounce"/>linkedin.com/in/sneha-parambadan-b1aaa5215
    </div>  
    </> 
  )
}

export default Bottumdiv