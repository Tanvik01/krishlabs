import { Mail, MapPin, PhoneIcon, MessageCircle } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050109]">
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#f4921e]/5 via-[#070212] to-transparent"></div>

      <main className="relative">
        {/* Header Section */}
        <div className="py-10 px-8 md:px-20 relative overflow-hidden">
          <div className="flex flex-col justify-center items-center my-24">
            {/* Gradient blobs */}
            <div className="absolute w-80 h-80 bg-[#f4921e]/10 rounded-full -mt-32 blur-2xl"></div>
            <div className="absolute w-64 h-64 bg-[#ff5500]/10 rounded-full -mr-40 -mb-32 blur-2xl"></div>
            <div className="absolute w-64 h-64 bg-[#f4921e]/10 rounded-full -ml-48 -mb-32 blur-2xl"></div>

            <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold text-white text-center leading-tight animate-fade-in animate-delay-200">
              Get in Touch
            </h1>
            <p className="text-gray-300 mt-6 md:text-2xl text-lg text-center max-w-2xl animate-fade-in animate-delay-200">
              Start the conversation to establish a great relationship and create something amazing together.
            </p>
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="md:px-20 px-8 pb-20">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="animate-fade-in animate-delay-300 space-y-8">
              <div>
                <h2 className="text-[#f4921e] text-xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="bg-black/20 backdrop-blur-sm border border-white/5 px-8 py-6 rounded-2xl hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-full bg-[#f4921e]/10">
                        <PhoneIcon size={24} className="text-[#f4921e]" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Phone</p>
                        <a href="tel:+918977217554" className="text-gray-300 hover:text-[#f4921e] transition-colors">
                          +91 8977 217554
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm border border-white/5 px-8 py-6 rounded-2xl hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-full bg-[#f4921e]/10">
                        <MessageCircle size={24} className="text-[#f4921e]" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">WhatsApp</p>
                        <a href="https://wa.me/918977217554" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#f4921e] transition-colors">
                          +91 8977 217554
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm border border-white/5 px-8 py-6 rounded-2xl hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-full bg-[#f4921e]/10">
                        <Mail size={24} className="text-[#f4921e]" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Email</p>
                        <a href="mailto:hello@krishlabs.in" className="text-gray-300 hover:text-[#f4921e] transition-colors">
                          hello@krishlabs.in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm border border-white/5 px-8 py-6 rounded-2xl hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-full bg-[#f4921e]/10">
                        <MapPin size={24} className="text-[#f4921e]" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Head Office- Bengaluru</p>
                        <p className="text-gray-300">
                          KrishLabs #56/47, R K BUILDING,<br />
                          Dr. Bendre Layout,<br />
                          Bengaluru  - 560077
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/20 backdrop-blur-sm border border-white/5 px-8 py-6 rounded-2xl hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                    <div className="flex items-center gap-5">
                      <div className="p-3 rounded-full bg-[#f4921e]/10">
                        <MapPin size={24} className="text-[#f4921e]" />
                      </div>
                      <div>
                        <p className="text-white font-medium mb-1">Branch Office- Hindupur</p>
                        <p className="text-gray-300">
                          #26/4/866, PVS Mansion,<br />
                          Balaji Nagar, Hindupur,<br />
                          AP - 515201
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
              <h2 className="text-[#f4921e] text-xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Name <span className="text-[#f4921e]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-5 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f4921e]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email <span className="text-[#f4921e]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-5 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f4921e]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Contact Number<span className="text-[#f4921e]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-full px-5 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f4921e]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message <span className="text-[#f4921e]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-5 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#f4921e]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 text-white font-medium rounded-xl bg-gradient-to-r from-[#f4921e] to-[#ff5500] hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20 rounded-2xl overflow-hidden border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4894708448696!2d77.64507837829939!3d13.068135654397084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19f919b41c45%3A0x8038a637768f962c!2sDR%20Bendre%20Layout%2C%20Narayanapura%2C%20Bengaluru%2C%20Karnataka%20560077!5e0!3m2!1sen!2sin!4v1742619755755!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;