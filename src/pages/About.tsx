import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhyKrishlabs from "../components/text/WhyKrishlabs";
import { useEffect } from "react";
import Typewriter from "../components/text/Typewriter";

function About() {
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
              <Typewriter text="About Us" speed={70} />
            </h1>
            <p className="text-gray-300 mt-6 md:text-2xl text-lg max-w-3xl">
              Welcome to <span className="text-[#f4921e]">Krishlabs</span>, your
              trusted partner in digital transformation. Since our inception in
              2020, we have been committed to delivering cutting-edge software
              solutions.
            </p>
          </div>
        </div>

        {/* Division Line */}
        <div className="max-w-7xl mx-auto px-8 md:px-20">
          <div className="h-px bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent"></div>
        </div>

        <div className="md:px-20 px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Journey Section */}
            <div className="mb-20 mt-20">
              <h2 className="text-4xl font-bold text-white mb-8 text-left">
                <Typewriter text="Celebrating 5 Years of Excellence" speed={70} />
              </h2>
              <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Since our founding in 2020, KrishLabs has been at the forefront
                  of technological innovation, helping businesses transform and
                  thrive in the digital era. What started as a small team with big
                  dreams has evolved into a dynamic company with a global
                  footprint.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Over these five years, we've successfully delivered hundreds of
                  projects, built lasting partnerships with clients across
                  industries, and continuously expanded our expertise to stay
                  ahead of emerging technologies and trends.
                </p>
              </div>
            </div>

            {/* Division Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent my-20"></div>

            {/* Mission & Vision Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                  <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-6">
                    <h3 className="text-[#f4921e] text-2xl font-bold">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    At Krishlabs, our mission is to harness technology to create
                    innovative and efficient solutions tailored to businesses of
                    all sizes. We specialize in mobile and web development, custom
                    software solutions, digital marketing, and graphic design to
                    help brands achieve their goals.
                  </p>
                </div>

                <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
                  <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-6">
                    <h3 className="text-[#f4921e] text-2xl font-bold">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    As we continue to grow, Krishlabs remains dedicated to pushing
                    technological boundaries. Our goal is to become a leading
                    global tech solutions provider, helping businesses embrace
                    digital transformation with confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Division Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent my-20"></div>

            {/* Why Choose Krishlabs section */}
            <WhyKrishlabs />

            {/* Division Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#f4921e]/20 to-transparent my-20"></div>

            {/* CTA Section */}
            <div className="mt-20 bg-black/20 backdrop-blur-sm p-12 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
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
}

export default About;