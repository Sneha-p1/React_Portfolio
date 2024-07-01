import React from 'react'

const Education = () => {
  return (
    <>
    <h2  className="font-serif text-2xl ml-3"> <span className="text-white">E</span>ducation</h2>
    <br></br>
            
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <div className="bg-slate-300 w-96 h-28 text-center rounded-2xl ml-44">
                <p  className=""><b>Post Graduate Diploma, Blockchain&nbsp; (2024-25)</b></p>
                <p  className="">Kerala Blockchain Academy</p>
                <p  className="">in Certified Program in Blockchain Architect</p>
            </div>

            <div className="bg-slate-300 w-96 h-28 text-center rounded-2xl ml-16">
                <p  className=""><b>B.tech&nbsp; (2019-23)</b></p>
                <p  className="">Government Engineering College Sreekrishnapuram Palakkad</p>
                <p  className="">in Computer Science and Engineering</p>
            </div>

            <div className="bg-slate-300 w-96 h-28 text-center rounded-2xl ml-44">
                <p  className=""><b>PlusTwo &nbsp; (2017)</b></p>
                <p  className="">GGovt.HSS,Thiruvali </p>
           </div>

           <div className="bg-slate-300 w-96 h-28 text-center rounded-2xl ml-16">
            <p  className=""><b>SSLC &nbsp; (2015)</b></p>
            <p  className="">GGovt.HSS,Thiruvali </p>
           </div>
          
        </div>
        </>
  )
}

export default Education