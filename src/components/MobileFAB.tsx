import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';

interface MobileFABProps {
  phoneNumber: string;
  whatsappNumber: string;
}

const MobileFAB: React.FC<MobileFABProps> = ({ phoneNumber, whatsappNumber }) => {
  const phoneLink = `tel:${phoneNumber}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-40 md:hidden">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
      
      {/* Call Button */}
      <a
        href={phoneLink}
        className="w-12 h-12 rounded-full bg-[#f4921e] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
      
      {/* Contact Button */}
      <Link
        to="/contact"
        className="px-4 py-2 rounded-full bg-gradient-to-r from-[#f4921e] to-[#ff5500] text-white text-sm font-medium flex items-center shadow-lg hover:scale-105 transition-transform duration-200"
      >
        Contact Us
        <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default MobileFAB; 