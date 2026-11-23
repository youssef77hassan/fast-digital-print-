/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Product, PortfolioItem, Testimonial, TimelineEvent, StatItem, ValueCard } from "./types";

export const servicesData: Service[] = [
  {
    id: "business-cards",
    title: "Business Cards",
    description: "Premium cotton paper, bespoke letterpress, gold-foil stamping, and ultra-thick duplex cards that command immediate attention.",
    iconName: "CreditCard",
  },
  {
    id: "roll-up",
    title: "Roll Up",
    description: "Professional premium exhibitions roll-up stands with heavy aluminum bases and high-fidelity matte anti-curl prints.",
    iconName: "Maximize2",
  },
  {
    id: "canvas",
    title: "Canvas Printing",
    description: "Fine-art gallery wraps using archival-quality inks, stretched by hand over custom-milled sustainable wooden frames.",
    iconName: "Image",
  },
  {
    id: "sticker",
    title: "Sticker & Decals",
    description: "Die-cut custom vinyl stickers with matte or gloss protective lamination, perfect for laptops, products, and windows.",
    iconName: "Layers",
  },
  {
    id: "packaging",
    title: "Luxury Packaging",
    description: "Custom rigid presentation boxes, custom bags, and boutique mailers with exquisite tactile coatings and foil finishes.",
    iconName: "Package",
  },
  {
    id: "outdoor-printing",
    title: "Outdoor Printing",
    description: "Architectural signs, vinyl graphics, and giant lightboxes engineered to withstand local elements and remain vibrant.",
    iconName: "Map",
  },
  {
    id: "indoor-printing",
    title: "Indoor Printing",
    description: "Crisp wall coverings, fine-art photographic prints, trade show displays, and high-impact custom POS setups.",
    iconName: "Home",
  },
  {
    id: "banners",
    title: "Banners",
    description: "Reinforced high-strength mesh and vinyl banners featuring heavy-duty eyelets, double-stitched hems, and vibrant UV resistance.",
    iconName: "Flag",
  },
];

export const productsData: Product[] = [
  {
    id: "p1",
    title: "Bespoke Paint-Slash Business Cards / كروت عمل احترافية",
    description: "Premium thick cards featuring our signature multicolor paint-slash graphic and sharp typography for a flawless high-end impression.",
    image: `${import.meta.env.BASE_URL}images/products/p1.jpg`,
    category: "Corporate Branding",
  },
  {
    id: "p2",
    title: "Custom Branded Team T-shirts / تيشيرتات الشركات والمؤسسات",
    description: "Premium cotton and polo t-shirts printed with durable, high-impact colors that preserve your brand identity.",
    image: `${import.meta.env.BASE_URL}images/products/p2.jpg`,
    category: "Corporate Apparel",
  },
  {
    id: "p3",
    title: "Luxury Rigid Presentation Boxes / علب هدايا وعلب فاخرة",
    description: "Sturdy custom-made presentation boxes featuring precision corners, beautiful custom branding, and luxurious tactile paper wraps.",
    image: `${import.meta.env.BASE_URL}images/products/p3.jpg`,
    category: "Luxury Packaging",
  },
  {
    id: "p4",
    title: "Personalized Ceramic Mugs / مجات مطبوعة (سحري وأبيض)",
    description: "High-grade heat-changing magic mugs and standard white ceramic mugs printed with high-resolution designs.",
    image: `${import.meta.env.BASE_URL}images/products/p4.jpg`,
    category: "Promotional Gifts",
  },
  {
    id: "p5",
    title: "Die-Cut Custom Sticker Sheets / ستيكر ورق وبلاستيك كوشيه",
    description: "Perfectly circular or custom-cut sticker sheets utilizing durable adhesive and waterproof protection.",
    image: `${import.meta.env.BASE_URL}images/products/p5.jpg`,
    category: "Marketing Assets",
  },
  {
    id: "p6",
    title: "Carbonless Receipt & Invoice Booklets / دفاتر وإيصالات شركات",
    description: "Professionally bound carbonless invoice blocks, receipts, and letterheads customized for corporate workflows.",
    image: `${import.meta.env.BASE_URL}images/products/p6.jpg`,
    category: "Business Stationery",
  },
  {
    id: "p7",
    title: "Indoor/Outdoor Roll Up & X-Banners / رول اب وبانر إعلاني",
    description: "Vibrant anti-curl blockout media stands with heavy-duty bases engineered for exhibitions and storefronts.",
    image: `${import.meta.env.BASE_URL}images/products/p7.jpg`,
    category: "Exhibition Graphics",
  },
  {
    id: "p8",
    title: "High-Definition Acrylic Wall Art / تابلوهات مودرن فخمة",
    description: "Spectacular gallery-quality acrylic and MDF board prints adding a distinctive premium touch to office and home spaces.",
    image: `${import.meta.env.BASE_URL}images/products/p8.jpg`,
    category: "Corporate Decor",
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "port1",
    title: "Modern Architectural Studio Identity",
    category: "Branding Kit",
    image: `${import.meta.env.BASE_URL}images/portfolio/port1.jpg`,
    year: "2025",
  },
  {
    id: "port2",
    title: "Luxury Coffee Roasters Packaging",
    category: "Product Box",
    image: `${import.meta.env.BASE_URL}images/portfolio/port2.jpg`,
    year: "2025",
  },
  {
    id: "port3",
    title: "Contemporary Art Fair Exhibition",
    category: "Large Format",
    image: `${import.meta.env.BASE_URL}images/portfolio/port3.jpg`,
    year: "2026",
  },
  {
    id: "port4",
    title: "Geometric Pattern Brand Stickers",
    category: "Custom Sticker",
    image: `${import.meta.env.BASE_URL}images/portfolio/port4.jpg`,
    year: "2026",
  },
  {
    id: "port5",
    title: "High-End Jewelry Catalog Booklets",
    category: "Bespoke Book",
    image: `${import.meta.env.BASE_URL}images/portfolio/port5.jpg`,
    year: "2025",
  },
  {
    id: "port6",
    title: "Corporate Headquarters Wayfinding Signage",
    category: "Indoor Printing",
    image: `${import.meta.env.BASE_URL}images/portfolio/port6.jpg`,
    year: "2026",
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Mostafa",
    initials: "AM",
    role: "Advertising Agency Owner",
    text: "Honestly, the print quality exceeded my expectations. The colors matched the design perfectly, and delivery was right on time.",
  },
  {
    id: "t2",
    name: "Mohamed Sameh",
    initials: "MS",
    role: "Apparel Brand Owner",
    text: "We printed our t-shirts and business cards here. The materials are premium and the execution is highly professional. We will definitely deal with them again.",
  },
  {
    id: "t3",
    name: "Menna Allah Khaled",
    initials: "MK",
    role: "Marketing Manager",
    text: "First time dealing with such a professional print shop. Extremely fast response, quick execution, and the results were better than expected.",
  },
  {
    id: "t4",
    name: "Karim Adel",
    initials: "KA",
    role: "Restaurant Owner",
    text: "We printed our menus and brand stickers; everything arrived in excellent quality, the service is extremely respectful, and the packaging is superb.",
  }
];

export const timelineData: TimelineEvent[] = [
  {
    id: "time1",
    year: "2018",
    title: "The Workshop Foundation",
    description: "Established in the heart of the creative district with a single state-of-the-art flatbed printer and a drive to offer pixel-perfect luxury paper goods.",
  },
  {
    id: "time2",
    year: "2020",
    title: "Large Format Revolution",
    description: "Expanded our premises to house professional industrial latex plotters, adding architectural, indoor, and weather-proof outdoor printing services.",
  },
  {
    id: "time3",
    year: "2023",
    title: "Luxury Packaging Integration",
    description: "Acquired bespoke die-cutting, embossing, and rigid box production equipment, providing complete tactile brand physical identity services.",
  },
  {
    id: "time4",
    year: "2026",
    title: "The Elite Creative Era",
    description: "Recognized as the primary partner for high-fashion, high-concept architecture studios and elite retail brands demanding immaculate execution.",
  }
];

export const statsData: StatItem[] = [
  {
    id: "s1",
    label: "Years of Master Craft",
    value: 8,
    suffix: "+",
  },
  {
    id: "s2",
    label: "Premium Corporate Clients",
    value: 1200,
    suffix: "+",
  },
  {
    id: "s3",
    label: "Successful Deliveries",
    value: 45000,
    suffix: "",
  },
  {
    id: "s4",
    label: "High-End Printing Machines",
    value: 14,
    suffix: "",
  }
];

export const valueCardsData: ValueCard[] = [
  {
    id: "v1",
    title: "Express Premium Delivery",
    description: "Carefully packaged, rigid moisture-sealed transport, and precision delivery coordinates to ensure zero-defect material arrivals.",
    iconName: "Truck",
  },
  {
    id: "v2",
    title: "Signature Museum Quality",
    description: "Stringent calibration and spectrophotometry guarantee accurate delta-E colors, deep rich blacks, and spectacular crispness.",
    iconName: "Award",
  },
  {
    id: "v3",
    title: "Next-Gen Print Tech",
    description: "Leveraging state-of-the-art high-micron Japanese and Swiss printheads capable of flawless gradient transitions and spot varnish finishes.",
    iconName: "Cpu",
  },
  {
    id: "v4",
    title: "Master Pre-press Designers",
    description: "Expert digital pre-press checks on every file. We analyze bleeding, vector curves, and color ranges to assure flawless physical output.",
    iconName: "Sparkles",
  },
  {
    id: "v5",
    title: "Concierge VIP Support",
    description: "Direct elite support via WhatsApp. You discuss your file vectors directly with a printing craftsperson, not an automated chatbot.",
    iconName: "MessageCircle",
  }
];
