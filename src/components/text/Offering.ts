import React from "react";
import { 
  Globe, 
  Smartphone, 
  Code2, 
  BarChart3, 
  Palette 
} from "lucide-react";

export interface OfferingType {
  id: string;
  name: string;
  desc: string;
  image: React.ReactNode;
  features?: string[];
  detailedDescription?: string;
  benefits?: string[];
  technologies?: string[];
} 

// Function to create icon elements (instead of using JSX)
const createIcon = (Icon: any) => React.createElement(Icon, { size: 28 });

// Keep your existing Offering array here
// Do NOT replace it with the services I provided
// Just make sure it exports properly and each service has an id field
export const Offering: OfferingType[] = [
  {
    id: "web-development",
    name: "Web Development Services",
    desc: "Responsive websites and web applications built with modern technologies to enhance your online presence.",
    image: createIcon(Globe),
    detailedDescription: "Krishlabs delivers modern, scalable, and responsive websites tailored to your brand's identity and user goals. Whether you need a static site, dynamic content management system, or a full-fledged web application, we've got you covered. We ensure your website is SEO-friendly, responsive on all devices, and optimized for performance and security.",
    benefits: [
      "Frontend Development (React, Vue.js, HTML/CSS, JavaScript)",
      "Backend Development (Laravel, Node.js, PHP)",
      "CMS Development (WordPress, Shopify)",
      "Progressive Web Apps (PWA)",
      "E-commerce Websites"
    ],
   
  },
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android that engage your users.",
    image: createIcon(Smartphone),
    detailedDescription: "At Krishlabs, we specialize in building high-performance mobile applications that are fast, reliable, and user-friendly. Whether you're looking for a native iOS or Android app, or a cross-platform solution, our team leverages the latest technologies like Flutter, React Native, Kotlin, and Swift to deliver mobile experiences that delight your users and help grow your business. We follow agile methodology and a user-centric approach, ensuring your app is scalable, secure, and ready for real-world use.",
    benefits: [
      "Native App Development (iOS & Android)",
      "Cross-platform App Development (Flutter, React Native)",
      "UI/UX Design for Mobile Apps",
      "API Integration & Backend Support",
      "App Store Deployment & Maintenance"
    ],
   
  },
  {
    id: "custom-software",
    name: "Custom Software Solutions",
    desc: "Tailored software applications designed to address your specific business challenges and requirements.",
    image: createIcon(Code2),
    detailedDescription: "Every business has unique needs, and at Krishlabs, we create custom software solutions tailored to solve your specific problems. From enterprise tools to industry-specific platforms, we build systems that simplify operations, boost productivity, and ensure scalability. Our team collaborates with you from concept to deployment, ensuring a secure, maintainable, and robust solution.",
    benefits: [
      "Enterprise Software Development",
      "ERP & CRM Systems",
      "SaaS Applications",
      "Workflow Automation Tools",
      "Third-party Integrations"
    ],
   
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing Strategies",
    desc: "Comprehensive digital marketing solutions to increase your brand visibility and drive conversions.",
    image: createIcon(BarChart3),
    detailedDescription: "We don't just build products—we help you grow. Krishlabs provides comprehensive digital marketing services to boost your online presence, engage your audience, and drive leads and conversions. We use data-driven strategies and continuous optimization to ensure maximum ROI for your campaigns.",
    benefits: [
      "SEO (Search Engine Optimization)",
      "Social Media Marketing (Instagram, Facebook, LinkedIn)",
      "Google Ads & PPC Campaigns",
      "Email Marketing",
      "Content Strategy & Blogging"
    ],
   
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    desc: "Creative visual designs for branding, marketing materials, and user interfaces that captivate your audience.",
    image: createIcon(Palette),
    detailedDescription: "Great design speaks volumes. Krishlabs offers eye-catching and effective graphic design solutions that reflect your brand identity and engage your audience. Whether you need a new logo, social media creatives, or complete branding packages—we've got the creative edge. Our design process blends creativity with strategy, helping you stand out in a crowded digital space.",
    benefits: [
      "Logo Design & Brand Identity",
      "Marketing Collateral (Flyers, Brochures)",
      "UI/UX Design for Web & Mobile",
      "Social Media Graphics",
      "Presentation Design"
    ],
  
  }
]; 