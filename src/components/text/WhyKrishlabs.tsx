import { Award, Rocket, Users } from "lucide-react";
import Typewriter from "./Typewriter";

const WhyKrishlabs = () => {
  return (
    <div>
      <div className="mt-20">
        <h1 className="text-5xl font-medium text-white leading-tight mb-8 tracking-wider">
          <Typewriter text="Why Choose Krishlabs?" speed={70} />
        </h1>
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
              <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-6">
                <Award className="text-[#f4921e]" size={24} />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">
                Innovation & Excellence
              </h3>
              <p className="text-gray-300">
                We stay ahead of technology trends to deliver high-quality,
                scalable, and secure solutions.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
              <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-6">
                <Rocket className="text-[#f4921e]" size={24} />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">
                Expertise Across Domains
              </h3>
              <p className="text-gray-300">
                From startups to established enterprises, we provide tailored
                solutions for diverse industries.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:shadow-[0_0_25px_rgba(244,146,30,0.1)] transition-all duration-300">
              <div className="p-3 rounded-full bg-[#f4921e]/10 w-fit mb-6">
                <Users className="text-[#f4921e]" size={24} />
              </div>
              <h3 className="text-xl text-white font-semibold mb-2">
                Client-Centric Approach
              </h3>
              <p className="text-gray-300">
                We prioritize our client's needs, ensuring every solution aligns
                with their business vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyKrishlabs;