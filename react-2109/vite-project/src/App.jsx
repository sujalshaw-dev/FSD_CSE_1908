import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import StateHandling from './components/StateHandling'
import changecolour from './components/ChangeColour'

function App() {
 
 

  return (
    <div>
   {/* <ICardGallery /> */}
   <StateHandling />
    
    </div>
  )
}

export default App