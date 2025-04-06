import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Offering } from "../components/text/Offering";
import { useEffect } from "react";
import Typewriter from "../components/text/Typewriter";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = Offering.find((offer) => offer.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050109]">
      <div className="fixed inset-0 bg-gradient-to-t from-[#f4921e]/5 via-[#070212] to-transparent"></div>

      <main className="relative px-8 md:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          <Link to="/services" className="inline-flex items-center text-gray-300 hover:text-[#f4921e] mb-8 transition-colors">
            <ArrowLeft className="mr-2" size={18} /> Back to Services
          </Link>

          {/* Service Detail Content */}
          {service ? (
            <div className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/5 shadow-[0_0_25px_rgba(244,146,30,0.1)]">
              {/* Service Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 rounded-full bg-[#f4921e]/10 w-fit">
                  <div className="text-[#f4921e]">{service.image}</div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-3">
                    <Typewriter text={service.name} speed={70} />
                  </h1>
                  <p className="text-xl text-gray-300">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              {/* Detailed Description */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <div className="text-gray-300 space-y-4">
                  <p className="text-lg">
                    {service.detailedDescription}
                  </p>
                </div>
              </div>

              {/* Benefits Section */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-10 pt-8 border-t border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Key Benefits</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <li 
                        key={index} 
                        className="flex items-start p-4 bg-black/30 rounded-xl border border-white/5 hover:border-[#f4921e]/30 transition-all duration-300"
                      >
                        <span className="text-[#f4921e] mr-3 text-xl font-bold">•</span>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Section */}
              {service.technologies && service.technologies.length > 0 && (
                <div className="mb-10 pt-8 border-t border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">Technologies We Use</h2>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-[#f4921e]/10 text-[#f4921e] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* CTA Section */}
              <div className="pt-8 mt-6 border-t border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-300 mb-6">
                  Contact our team today to discuss how our {service.name.toLowerCase()} can help your business grow and succeed in the digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <button className="px-8 py-3.5 text-white font-medium rounded-xl bg-gradient-to-r from-[#f4921e] to-[#ff5500] hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-[1.02] transition-all duration-300">
                      Get in Touch
                    </button>
                  </Link>
                  <a
                    href="tel:+918977217554"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black/30 border border-white/10 text-white hover:border-[#f4921e]/50 transition-all duration-300"
                  >
                    <span className="text-[#f4921e] font-medium">Call Us:</span>
                    <span className="font-medium">+91 8977 217554</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/5 shadow-[0_0_25px_rgba(244,146,30,0.1)]">
              <h1 className="text-4xl font-bold text-white mb-6">Service Not Found</h1>
              <p className="text-gray-300 mb-6">
                Sorry, the service you're looking for doesn't seem to exist. Please check the URL or return to our services page.
              </p>
              <Link to="/services">
                <button className="px-8 py-3.5 text-white font-medium rounded-xl bg-gradient-to-r from-[#f4921e] to-[#ff5500] hover:from-[#ff5500] hover:to-[#f4921e] shadow-lg shadow-[#f4921e]/20 hover:shadow-[#f4921e]/40 transform hover:scale-[1.02] transition-all duration-300">
                  View All Services
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail; 