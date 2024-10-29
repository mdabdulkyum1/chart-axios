
import Navbar from './components/Navbar/Navbar';
import PriceOptions from './components/PriceOptions/PriceOptions';
import Chart from './components/Chart/Chart';
import Phone from './components/PhoneData/Phone';


function App() {
  return (
    <>
      <Navbar />
      <PriceOptions></PriceOptions>
      <Chart></Chart>
      <Phone></Phone>
    </>
  )
}

export default App