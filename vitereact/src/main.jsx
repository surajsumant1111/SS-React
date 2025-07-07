import React from 'react'
import ReactDom from 'react-dom/client'

import App from './App.jsx'
import Chai from './chai.jsx'

const Anothervariable=" Variable printing"



/*
//this one is also a custom element but it wont working because of custom render
const reactElement={
    type : 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'click me to visit google'
}*/




//this one is custom element
const AnotherElement=(
  <a href="https://google.com">visit google</a>
)




//this one is element by react and this one is working bcz we are using react render
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',target:'_blank'
  },
  'click here to visit google',
  Anothervariable
)



//function creation

// function MyApp()
// {
//   return(
//     <div>
//       <h1>Hello</h1>
//     </div>
//   )
// }


ReactDom.createRoot(document.getElementById('root')).render(

    // <div>
    //   <Chai />
      // <App />
    //   <MyApp/>
    // </div>

    //this one is custom element calling
    // AnotherElement
    
    //this one is react element calling
    reactElement


)
