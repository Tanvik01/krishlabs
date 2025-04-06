import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Offering } from "../components/text/Offering";
import { useEffect } from "react";
import Typewriter from "../components/text/Typewriter";

const Services = () => {
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
          <div className="max-w-7xl mx-auto my-24">
            {/* Gradient blobs */}
            <div className="absolute w-80 h-80 bg-[#f4921e]/10 rounded-full -mt-32 blur-2xl"></div>
            <div className="absolute w-64 h-64 bg-[#ff5500]/10 rounded-full -mr-40 -mb-32 blur-2xl"></div>
            <div className="absolute w-64 h-64 bg-[#f4921e]/10 rounded-full -ml-48 -mb-32 blur-2xl"></div>

            <h1 className="text-6xl font-bold text-white leading-tight mb-8 tracking-wider">
              <Typewriter text="Our Services" speed={70} />
            </h1>
            <p className="text-gray-300 mt-6 md:text-2xl text-lg max-w-3xl">
              At <span className="text-[#f4921e]">Krishlabs</span>, we provide
              cutting-edge software solutions to help businesses thrive in the
              digital world. From mobile and web development to custom software,
              digital marketing, and graphic design, we offer a full range of
              services tailored to your needs.
            </p>
          </div>
        </div>

        {/* Division Line */}
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent"></div>
        </div>

        <div className="md:px-20 px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Services Section */}
            <div className="mb-20 mt-20">
              <h2 className="text-4xl font-bold text-white mb-8">
                <Typewriter text="Explore Our Expertise" speed={70} />
              </h2>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {Offering.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-black/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300"
                  >
                    <div className="flex flex-col h-full">
                      <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-4 sm:mb-6">
                        <div className="text-[#f4921e]">{offer.image}</div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {offer.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                        {offer.desc}
                      </p>
                      <Link to={`/services/${offer.id}`} className="mt-auto w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-white font-medium rounded-xl bg-gradient-to-r from-[#f4921e] to-[#ff5500] hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center sm:justify-start">
                          Learn More <ArrowRight className="ml-2" size={18} />
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Division Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent my-20"></div>

            {/* CTA Section */}
            <div className="mt-20 bg-black/20 backdrop-blur-sm p-12 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
              <h2 className="text-4xl font-bold text-white mb-6">
                <Typewriter text="Let's Build Something Amazing Together" speed={70} />
              </h2>
              <p className="text-gray-300 mb-10 max-w-2xl text-lg">
                Partner with KrishLabs to leverage cutting-edge technology and
                innovative solutions that drive growth and success.
              </p>
              <div className="flex flex-col md:flex-row items-start gap-8">
                <Link to="/contact">
                  <button className="px-8 py-3.5 text-white font-medium rounded-xl bg-gradient-to-r from-[#f4921e] to-[#ff5500] hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-[1.02] transition-all duration-300 flex items-center">
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </button>
                </Link>
                <span className="text-gray-500 font-medium">OR</span>
                <a
                  href="tel:+918977217554"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black/30 border border-white/10 text-white hover:border-[#f4921e]/50 transition-all duration-300"
                >
                  <span className="text-[#f4921e] font-medium">Call:</span>
                  <span className="font-medium">+91 8977 217554</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;