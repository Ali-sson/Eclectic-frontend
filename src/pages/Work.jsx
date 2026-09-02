import Design1 from "../assets/female1.jfif";
import Design2 from "../assets/female2.jpeg";
import Design3 from "../assets/suit1.jpeg";
import Design4 from "../assets/suit2.jpeg";
import Design5 from "../assets/female3.jpeg";
import Design6 from "../assets/female4.jpeg";


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CustomCTA from "../components/CustomCTA";
import Footer from "../components/Footer";

const works = [
  {
    id: 1,
    image: Design1,
    title: "Female Dress",
    category: "Women's",
    label:"Request Design"
  },
  {
    id: 2,
    image: Design2,
    title: "Elegant Gown",
    category: "Women's",
    label:"Request Design"
  },
  {
    id: 3,
    image: Design3,
    title: "Men's Suit",
    category: "Men's",
     label:"Request Design"
  },
  {
    id: 4,
    image: Design4,
    title: "Classic Suit",
    category: "Men's",
    label:"Request Design"
  },
  {
    id: 5,
    image: Design5,
    title: "Female Gown",
    category: "Women's",
     label:"Request Design"
  },
  {
    id: 6,
    image: Design6,
    title: "Short Gown",
    category: "Women's",
     label:"Request Design"
  },


];

const categories = ["All", "Men's", "Women's", "Occasion"];

const OurWork = () => {
    const navigate = useNavigate();


  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Number of designs displayed per page
  const designsPerPage = 6;

  // Filter by category
  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  // Calculate total pages
  const totalPages = Math.ceil(
    filteredWorks.length / designsPerPage
  );

  // Get designs for current page
  const startIndex = (currentPage - 1) * designsPerPage;

  const currentWorks = filteredWorks.slice(
    startIndex,
    startIndex + designsPerPage
  );

  // Change category
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // handle function 

    const handleRequestDesign = (work) => {
  navigate("/requestBooking", {
    state: {
      design: work,
    },
  });
};

  // Next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
    
    <Navbar/>
    
 
    <main className="min-h-screen bg-[#F8F5EE] px-6 py-28 md:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-[#8A6F20]">
            Our Work
          </p>

          <h1 className="font-display text-5xl leading-tight text-[#0B0B0B] md:text-6xl">
            Crafted to make
            <span className="block italic">
              an impression.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#526070]">
            Explore some of our recent designs and carefully tailored pieces,
            created with attention to detail and a focus on your unique style.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition duration-300 ${
                activeCategory === category
                  ? "bg-[#1A1A1A] text-white"
                  : "border border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

          {currentWorks.map((work) => (
            <article
              key={work.id}
              className="group cursor-pointer"
            >

              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-[#E8E2D7]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                
              </div>

              {/* Details */}
              <div className="mt-5">
                <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#8A6F20]">
                  {work.category}
                </p>

                <h2 className="mb-6 text-xl text-[#1A1A1A]">
                  {work.title}
                </h2>

                <button
                 onClick={() => handleRequestDesign(work)}
                 className="bg-black text-white p-3 px-5"
               >
               {work.label}
              </button>
              </div>

            </article>
          ))}

        </div>

        {/* No Results */}
        {currentWorks.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-[#526070]">
              No designs available in this category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-2">

            {/* Previous */}
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-3 text-[10px] uppercase tracking-[0.2em] transition ${
                currentPage === 1
                  ? "cursor-not-allowed text-[#1A1A1A]/30"
                  : "text-[#1A1A1A] hover:text-[#8A6F20]"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className={`flex h-10 w-10 items-center justify-center text-[10px] transition ${
                  currentPage === page
                    ? "bg-[#1A1A1A] text-white"
                    : "text-[#1A1A1A] hover:bg-[#E8E2D7]"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-3 text-[10px] uppercase tracking-[0.2em] transition ${
                currentPage === totalPages
                  ? "cursor-not-allowed text-[#1A1A1A]/30"
                  : "text-[#1A1A1A] hover:text-[#8A6F20]"
              }`}
            >
              Next →
            </button>

          </div>
        )}

      </div>
    </main>

    <CustomCTA/>

    <Footer/>
       </>
  );
};

export default OurWork;