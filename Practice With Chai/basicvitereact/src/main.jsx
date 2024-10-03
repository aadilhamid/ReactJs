import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>Custom Method!</h1>
      </div>
  )
}

const MyElement ={
type:'a',
props:{
          href:'https://google.com',
          target:'_blank'
},
Children:'Click here to Open google'
}
const myvar = " My Variable"
const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com', target:'_blank'
  },
  'Welcome to google',
  myvar
)
const anotherElement=(<a href='https://google.com' targrt='_blank'>Google</a>)

createRoot(document.getElementById('root')).render(
 
  // anotherElement   
reactElement 
    
 
)