import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Eclectic.jpeg'
import {Menu, X} from 'lucide-react'




const nav = [
    { to: '/', label: 'Home' },
      { to: '/#about', label: 'About' },
     { to: '/', label: 'Services' },
    { to: '/work', label: ' Our Work' },
    { to: '/', label: 'Contact' },
    //  { to: '/requestBooking', label: 'Custom-Outfit' }

]

function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <header className='fixed top-0 w-full z-50 p-4 bg-black/80 '>

        <div className='flex max-w-7xl mx-auto items-center justify-between'>
            {/* Logo */}
            <div className='flex '>
            <Link to='/' className='flex items-center p-0'>
               <img src={Logo} alt="VenMa Logo" className='h-10 w-20'/>
               <div className='font-bold text-lg'>
               </div>
            </Link>
            </div>

            {/* Menu */}
                            <nav className="flex flex-1 items-center text-[12px] uppercase tracking-wide">

                {/* Navigation Links */}
                <div className="flex items-center justify-center gap-6 mx-auto">

                    {nav.map((item) =>
                    ["About", "Services", "Contact"].includes(item.label) ? (
                        <a
                        key={item.label}
                        href={`#${item.label.toLowerCase()}`}
                        onClick={() => setOpen(false)}
                        className="hidden md:block text-white font-semibold hover:text-gold"
                        >
                        {item.label}
                        </a>
                    ) : (
                        <Link
                        key={item.label}
                        to={item.to}
                        className="hidden md:block text-white font-semibold hover:text-gold"
                        >
                        {item.label}
                        </Link>
                    )
                    )}

                </div>

                {/* Custom Design */}
                <Link
                    to="/requestBooking"
                    className="hidden font-semibold md:block ml-auto border bg-gold hover:bg-white hover:text-gold px-6 py-2 font-jost text-[14px]"
                >
                    Custom Design
                </Link>

                </nav>
            {/* Hamburger Menu */}

            <button onClick={()=> setOpen(!open)} 
            className='md:hidden text-white 
            hover:text-venma-soft-gold transition'
            >

                {open ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </div>

        {/* Mobile Menu */}

 {open && (
        <div className="md:hidden bg-charcoal flex flex-col text-center text-white space-y-4 p-4 border-t border-gold absolute top-full right-0 w-full  z-50 ">
         
                        {nav.map((item) =>
                        ["About", "Services", "Contact"].includes(item.label) ? (
                            <a
                            key={item.label}
                            href={`#${item.label.toLowerCase()}`}
                            onClick={() => setOpen(false)}
                            className="text-white hover:text-gold"
                            >
                            {item.label}
                            </a>
                        ) : (
                            <Link
                            key={item.label}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="text-white hover:text-gold"
                            >
                            {item.label}
                            </Link>
                        )
                        )}


              {/* Custom Design */}
    <Link
      to="/requestBooking"
      onClick={() => setOpen(false)}
      className="block border bg-gold px-4 py-2 font-jost text-[14px] text-black hover:bg-soft-gold transition"
    >
      Custom Design
    </Link>

        </div>


        )}
    
    </header>

  )
}



export default Navbar