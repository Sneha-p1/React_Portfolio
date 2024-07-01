import React from 'react'
import Navbar from './Components/Navbar'
import Name from './Components/Name'
import Aboutme from './Components/Aboutme'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Interest from './Components/Interest'
import Contact from './Components/Contact'
import Bottumdiv from './Components/Bottumdiv'

const App = () => {
  return (
    <>
  <body className="bg-gradient-to-r from-violet-400 to-fuchsia-400">

  <Navbar/>
<br></br>
 
<Name/>
<br></br>
       <Aboutme/>
<br></br>
            <Education/>
        
      <Projects/>
         <br></br>
       <Interest/>

<Contact/>
  
      <br></br>
<Bottumdiv/>
    

</body>
</>
  )
}

export default App