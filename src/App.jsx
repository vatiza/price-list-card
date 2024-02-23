
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Nav from './Components/Nav/Nav'
import Prices from './Components/Prices/Prices'

function App() {


  return (
    <>
      <Nav></Nav>
      <h1 className='text-7xl font-bold text-purple-800'>Price list of Cards</h1>
      <Prices></Prices>
      <Dashboard></Dashboard>
    </>
  )
}

export default App
