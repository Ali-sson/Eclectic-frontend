
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const RequestBooking = () => {
  const location = useLocation();

  const selectedDesign = location.state?.design;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    outfitType: "",
    preferredDate: "",
    description: "",

    // Measurements
    unit: "inches",
    height: "",
    bust: "",
    waist: "",
    hip: "",
    shoulder: "",
    sleeveLength: "",
    armhole: "",
    outfitLength: "",
    trouserLength: "",

        // Selected design
    selectedDesign: selectedDesign || "",
  });
  

  const [designFile, setDesignFile] = useState(null);
  const [noMeasurements, setNoMeasurements] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setDesignFile(file);
    }
  };

  const handleNoMeasurements = (e) => {
    const checked = e.target.checked;

    setNoMeasurements(checked);

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        height: "",
        bust: "",
        waist: "",
        hip: "",
        shoulder: "",
        sleeveLength: "",
        armhole: "",
        outfitLength: "",
        trouserLength: "",
      }));
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("Customer Information:", formData);
  //   console.log("Design File:", designFile);

  //   alert("Your design request has been submitted successfully!");
  // };

 const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("========== SUBMIT BUTTON CLICKED ==========");
  console.log("Form data:", formData);
  console.log("Design file:", designFile);

  try {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("outfitType", formData.outfitType);
    data.append("preferredDate", formData.preferredDate);
    data.append("description", formData.description);

    data.append("unit", formData.unit);
    data.append("height", formData.height);
    data.append("bust", formData.bust);
    data.append("waist", formData.waist);
    data.append("hip", formData.hip);
    data.append("shoulder", formData.shoulder);
    data.append("sleeveLength", formData.sleeveLength);
    data.append("armhole", formData.armhole);
    data.append("outfitLength", formData.outfitLength);
    data.append("trouserLength", formData.trouserLength);

    if (selectedDesign) {
      data.append("selectedDesign", selectedDesign.title);
    }

    if (designFile) {
      data.append("designFile", designFile);
    }

    console.log("Sending request to backend...");

    const response = await fetch(
      "https://eclectic-backend.onrender.com/api/request-booking",
      {
        method: "POST",
        body: data,
      }
    );

    console.log("Backend response status:", response.status);

    const result = await response.json();

    console.log("Backend response:", result);

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong.");
    }

    alert(result.message);

  } catch (error) {
    console.error("========== SUBMISSION ERROR ==========");
    console.error(error);

    alert(
      error.message ||
        "Unable to send your request. Please try again."
    );
  }
};

  return (

    <>

    <Navbar/>
    
   
    <section className="min-h-screen bg-champagne text-white pt-32 pb-20 px-6">

      <div className="max-w-5xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">

          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
            Custom Design
          </p>

          <h1 className="text-4xl md:text-6xl mb-6 text-black">
            Request a Design
          </h1>

          <p className="text-black max-w-2xl mx-auto leading-relaxed">
            Have a design in mind? Tell us what you are looking for,
            provide your measurements and upload your inspiration.
          </p>

        </div>


        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="bg-warm p-6 md:p-10 rounded-lg"
        >

          {/* ================= PERSONAL INFORMATION ================= */}
          <div className="mb-12">

            <h2 className="font-display text-2xl mb-2">
              Personal Information
            </h2>

            <div className="w-16 h-[1px] bg-[#D4AF37] mb-6"></div>


            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="form-input text-black"
                />
              </div>


              {/* Email */}
              <div>
                <label className="block text-sm mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="form-input text-black"
                />
              </div>


              {/* Phone */}
              <div>
                <label className="block text-sm mb-2">
                  WhatsApp / Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08012345678"
                  required
                  className="form-input text-black"
                />
              </div>


              {/* Outfit Type */}
              <div>
                <label className="block text-sm mb-2">
                  Outfit Type
                </label>

                <select
                  name="outfitType"
                  value={formData.outfitType}
                  onChange={handleChange}
                  required
                  className="form-input text-black"
                >
                  <option value="">Select outfit type</option>
                  <option value="Dress">Dress</option>
                  <option value="Native Wear">Native Wear</option>
                  <option value="Two Piece">Two Piece</option>
                  <option value="Jumpsuit">Jumpsuit</option>
                  <option value="Bridal Wear">Bridal Wear</option>
                  <option value="Corporate Wear">Corporate Wear</option>
                  <option value="Trouser">Trouser</option>
                  <option value="Skirt">Skirt</option>
                  <option value="Other">Other</option>
                </select>

              </div>

            </div>

          </div>


          {/* ================= DESIGN INFORMATION ================= */}
          <div className="mb-12">

            <h2 className="font-display text-2xl mb-2">
              Design Information
            </h2>

            <div className="w-16 h-[1px] bg-[#D4AF37] mb-6"></div>


            {/* Preferred Date */}
            <div className="mb-6">

              <label className="block text-sm mb-2">
                Preferred Completion Date
              </label>

              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="form-input text-black"
              />

            </div>


            {/* Description */}
            <div className="mb-6">

              <label className="block text-sm mb-2">
                Tell Us About Your Design
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                placeholder="Describe the design, fabric, colour, occasion or any other requirements..."
                required
                className="form-input resize-none text-black"
              />

            </div>


          {/* ================= SELECTED DESIGN ================= */}

{selectedDesign && (
  <div className="mb-8">

    <label className="block text-sm mb-3">
      Selected Design
    </label>

    <div className="border border-[#D4AF37] rounded-lg p-4">

      <div className="grid md:grid-cols-[220px_1fr] gap-6 items-center">

        {/* Design Image */}
        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#E8E2D7]">
          <img
            src={selectedDesign.image}
            alt={selectedDesign.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Design Details */}
        <div>

          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-2">
            Selected Design
          </p>

          <h3 className="text-2xl mb-3">
            {selectedDesign.title}
          </h3>

          <p className="text-sm text-gray-400">
            You selected this design from our collection.
            You can request this design or upload another
            reference image below.
          </p>

        </div>

      </div>

    </div>

  </div>
)}


{/* ================= UPLOAD ANOTHER DESIGN ================= */}

<div>

  <label className="block text-sm mb-2">
    {selectedDesign
      ? "Upload Another Reference (Optional)"
      : "Upload Your Design"}
  </label>

  <div className="border border-dashed border-gray-600 rounded-lg p-8 text-center">

    <input
      type="file"
      accept="image/png, image/jpeg, image/webp, application/pdf"
      onChange={handleFileChange}
      required={!selectedDesign}
      className="w-full text-sm text-gray-400"
    />

    <p className="text-xs text-gray-500 mt-3">
      JPG, PNG, WEBP or PDF
    </p>

    {designFile && (
      <p className="text-[#D4AF37] text-sm mt-3">
        Selected: {designFile.name}
      </p>
    )}

  </div>

</div>

          </div>


          {/* ================= MEASUREMENTS ================= */}
          <div className="mb-12">

            <h2 className="font-display text-2xl mb-2">
              Body Measurements
            </h2>

            <div className="w-16 h-[1px] bg-[#D4AF37] mb-4"></div>

            <p className="text-white text-sm mb-6">
              Please provide your measurements as accurately as possible.
              If you don't have your measurements yet, you can skip this section.
            </p>


            {/* Unit Selection */}
            <div className="mb-8">

              <label className="block text-sm mb-3">
                Measurement Unit
              </label>

              <div className="flex gap-6">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="radio"
                    name="unit"
                    value="inches"
                    checked={formData.unit === "inches"}
                    onChange={handleChange}
                    disabled={noMeasurements}
                  />

                  <span>Inches</span>

                </label>


                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="radio"
                    name="unit"
                    value="cm"
                    checked={formData.unit === "cm"}
                    onChange={handleChange}
                    disabled={noMeasurements}
                  />

                  <span>Centimeters</span>

                </label>

              </div>

            </div>


            {/* Measurement Fields */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${
                noMeasurements ? "opacity-40 pointer-events-none" : ""
              }`}
            >

              {/* Height */}
              <div>
                <label className="block text-sm mb-2">
                  Height
                </label>

                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder={`Height (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>


              {/* Bust */}
              <div>
                <label className="block text-sm mb-2">
                  Bust / Chest
                </label>

                <input
                  type="number"
                  name="bust"
                  value={formData.bust}
                  onChange={handleChange}
                  placeholder={`Bust (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>


              {/* Waist */}
              <div>
                <label className="block text-sm mb-2">
                  Waist
                </label>

                <input
                  type="number"
                  name="waist"
                  value={formData.waist}
                  onChange={handleChange}
                  placeholder={`Waist (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>


              {/* Hip */}
              <div>
                <label className="block text-sm mb-2">
                  Hip
                </label>

                <input
                  type="number"
                  name="hip"
                  value={formData.hip}
                  onChange={handleChange}
                  placeholder={`Hip (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>


              {/* Shoulder */}
              <div>
                <label className="block text-sm mb-2">
                  Shoulder
                </label>

                <input
                  type="number"
                  name="shoulder"
                  value={formData.shoulder}
                  onChange={handleChange}
                  placeholder={`Shoulder (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>


              {/* Sleeve */}
              <div>
                <label className="block text-sm mb-2">
                  Sleeve Length
                </label>

                <input
                  type="number"
                  name="sleeveLength"
                  value={formData.sleeveLength}
                  onChange={handleChange}
                  placeholder={`Sleeve (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>


              {/* Armhole */}
              <div>
                <label className="block text-sm mb-2">
                  Armhole
                </label>

                <input
                  type="number"
                  name="armhole"
                  value={formData.armhole}
                  onChange={handleChange}
                  placeholder={`Armhole (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>


              {/* Outfit Length */}
              <div>
                <label className="block text-sm mb-2">
                  Outfit Length
                </label>

                <input
                  type="number"
                  name="outfitLength"
                  value={formData.outfitLength}
                  onChange={handleChange}
                  placeholder={`Outfit (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>


              {/* Trouser Length */}
              <div>
                <label className="block text-sm mb-2">
                  Trouser / Skirt Length
                </label>

                <input
                  type="number"
                  name="trouserLength"
                  value={formData.trouserLength}
                  onChange={handleChange}
                  placeholder={`Length (${formData.unit})`}
                  className="form-input text-black"
                  min="0"
                />
              </div>

            </div>


            {/* No Measurements */}
            <div className="mt-8">

              <label className="flex items-start gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={noMeasurements}
                  onChange={handleNoMeasurements}
                  className="mt-1"
                />

                <span className="text-sm text-white">
                  I don't have my measurements yet. I will provide them
                  later or contact the designer for assistance.
                </span>

              </label>

            </div>


            {/* Measurement Help */}
            <div className="mt-6 p-4 border border-gray-700 rounded">

              <p className="text-sm text-white">
                <span className="text-[#D4AF37]">
                  Need help with your measurements?
                </span >{" "}
                Contact us on WhatsApp and we'll guide you through the
                measurement process.
              </p>

            </div>

          </div>


          {/* ================= SUBMIT ================= */}
          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black py-4 uppercase tracking-[0.2em] font-semibold hover:bg-[#E8C766] transition duration-300"
          >
            Send Design Request
          </button>

        </form>

      </div>

    </section>

     </>
  );
};

export default RequestBooking;
