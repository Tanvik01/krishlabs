import React from 'react';

function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050109]">
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#ff2994]/10 via-[#070212] to-transparent"></div>
      
      {/* Gradient blobs */}
      <div className="fixed inset-0">
        <div className="gradient-blob-1"></div>
        <div className="gradient-blob-2"></div>
        <div className="gradient-blob-3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          About KrishLabs
        </h1>
        <div className="max-w-3xl text-gray-300 space-y-6">
          <p>
            At KrishLabs, we're more than just a software development company. We're innovators, problem-solvers, and technology enthusiasts dedicated to transforming ideas into powerful digital solutions.
          </p>
          <p>
            Our team consists of passionate developers, designers, and tech experts who bring diverse perspectives and expertise to every project we undertake.
          </p>
          <p>
            Founded with a vision to revolutionize the software development landscape, we combine cutting-edge technology with creative thinking to deliver exceptional results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About; 