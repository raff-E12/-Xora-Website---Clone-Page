import './App.css'
import Navbar from './Navbar'
import Herosc from './Hero_sc'
import Features from './assets/Features'
import Pricing from './Pricing_sc'
import FAQsc from './FAQ_sc'
import Testimonial from './Testimonial'
import Downloads from './Downloads'
import Footer from './Footer'
import Company from './assets/Company'

function App() {
  return (
    <main className='overflow-hidden'>
      <Navbar/>
      <Herosc />
      <Features/>
      <Pricing/>
      <FAQsc/>
      <Testimonial/>
      <Downloads/>
      <Company/>
      <Footer/>
    </main>
  )
}

export default App
