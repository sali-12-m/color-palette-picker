import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Card from './Components/Card'
import ColorButton from './Components/colorButton'
import ColorPreview from './Components/colorPreview'

function App() {
  const colors = ['Red','Blue','Green','Yellow','Purple'];
  const [selectedColor , setSelectedColor]= useState("");
 return(
  <Card>
    <h1>🎨 Color Palette Picker</h1>
    <div>
    {colors.map((color) => (
      <ColorButton
      key={color}
      color={color}
      isSelected={selectedColor === color}
      onClick={()=>setSelectedColor(color)}
      />
    ))}
    </div>
    {selectedColor ? (<ColorPreview color={selectedColor}/>) : (<p>No Color Selected</p>)}
    <button onClick={()=> setSelectedColor("")}>Reset</button>
  </Card>

 )
}

export default App
