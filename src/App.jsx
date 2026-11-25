
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import ShopDetails from './Pages/ShopDetails'
import NotFound from './Components/404/NotFound'

const App = () => {
  return (
    <div>
      <Routes>
     <Route path="/" element={<Home/>}/> 
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/shopdetails/:id" element={<ShopDetails/>}/>
      <Route path="/404" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
