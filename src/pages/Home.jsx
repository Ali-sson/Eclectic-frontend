import Navbar from "../components/Navbar"
import HeroImage from "../assets/hero.jpg"
import Services from "../components/services"
import FeaturedDesigns from "../components/FeaturedDesigns"
import AboutDesigner from "../components/AboutDesigner"
import CustomCTA from "../components/CustomCTA"
import Footer from "../components/Footer"




function Home() {
  return (
  <>
  <Navbar />

  
   {/* Hero Section */}

   <section className="md:h-screen overflow-hidden relative ">
    <img src={HeroImage} alt="Hero Image" 
    className="w-full h-full object-cover object-[center_20%]" />

    <div className="absolute inset-0 bg-black/55"></div> 


    <div className="absolute inset-0 flex flex-col items-left max-w-7xl mx-auto py-40 px-4">
      <h1 className="text-soft tracking-widest mb-2 md:mb-2 px-6 md:px-0">Elcetic Fashion Design & Tailoring Services</h1>
        <h1 className="tracking-widest px-6 md:px-0 md:py-4 md:p-0 text-4xl md:text-7xl text-white italic">
            Crafted With Vision. <br/>
            <span className="text-venma-gold mt-4 text-4xl md:text-7xl text-gold italic">Designed For You.</span>
        </h1>
        <p className="text-white text-sm italic font-medium-bold px-6 md:px-0 py-4 md:py-0 max-w-3xl leading-[2]">
       At ECLECTIC, we create timeless pieces tailored to your style and personality. <br className="hidden md:block"/> 
       Exceptional craftsmanship, refined details, and a fit made just for you.
        </p>

          <div className="flex flex-col md:flex-row gap-6 px-6 md:px-0 mt-2 md:mt-6">
        <a href="/work" className="inline-flex items-center justify-center text-black border w-60 md:w-1/4 text-sm px-4 py-2 font-semibold bg-white hover:bg-gold hover:text-black transition duration-300 ease-in-out">Explore Our Designs</a>
        <a href="/requestBooking" className="inline-flex items-center justify-center border w-60 md:w-1/4 text-sm px-3 py-2 font-semibold bg-gold transition duration-300 ease-in-out hover:bg-white hover:text-gold text-black">Request a Custom Design</a>
    </div>
    </div>

  
   </section>

   <Services/>

   <FeaturedDesigns/>

   <AboutDesigner/>

   <CustomCTA/>

   <Footer/>
  </>
  )
}

export default Home