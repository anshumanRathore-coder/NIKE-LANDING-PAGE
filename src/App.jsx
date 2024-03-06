import Navbar from "./components/Navbar";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import SuperProduct from "./sections/SuperProduct";

function App() {

  return (
  <main className="relative">
    <Navbar/>
    <section className='lg:padding-l wide:padding-r padding-b'>
      <Hero/>
    </section>
    <section className='padding'>
      <Products/>
    </section>
    <section className='padding'>
      <SuperProduct/>
    </section>
    <section className='padding'>
      <Services/>
    </section>
    <section className='padding'>
      <SpecialOffer/>
    </section>
    <section className='padding'>
      <CustomerReviews/>
    </section>
    <section className='padding bg-black'>
      <Footer/>
    </section>

  </main>
  )
}

export default App;
