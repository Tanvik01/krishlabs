import {
    Component,
    DatabaseZap,
    Globe,
    SmartphoneCharging,
    Tv,
  } from "lucide-react";
  import { ReactNode } from "react";
  
  interface Offer {
    id: number;
    name: string;
    desc: string;
    image: ReactNode;
    detailedDescription?: string;
    benefits?: string[];
    technologies?: string[];
  }
  
  export const Offering: Offer[] = [
    {
      id: 1,
      name: "Web Development",
      desc: "Responsive, fast, and SEO-friendly websites tailored to your brand's unique identity and business goals.",
      image: <Globe size={40} />,
    },
    {
      id: 2,
      name: "Mobile Apps",
      desc: "High-performance native and cross-platform mobile applications with intuitive UI/UX and seamless functionality.",
      image: <SmartphoneCharging size={40} />,
    },
    {
      id: 3,
      name: "Custom Software",
      desc: "Scalable and secure enterprise solutions, SaaS platforms, and automation tools designed for your specific needs.",
      image: <DatabaseZap size={40} />,
    },
    {
      id: 4,
      name: "Digital Marketing",
      desc: "Data-driven strategies combining SEO, social media, and content marketing to boost your online presence.",
      image: <Tv size={40} />,
    },
    {
      id: 5,
      name: "Graphic Design",
      desc: "Professional branding, UI/UX design, and creative assets that make your brand stand out in the digital space.",
      image: <Component size={40} />,
    },
  ];