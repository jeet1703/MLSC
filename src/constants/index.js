import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  linked, 
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#",
  },
  {
    id: "1",
    title: "About",
    url: "#About",
  },
  {
    id: "2",
    title: "Team",
    url: "#Team",
  },
  {
    id: "3",
    title: "Events",
    url: "#Events",
  },
  {
    id: "4",
    title: "Testimonials",
    url: "#Testimonials",  
  },
  {
    id: "5",
    title: "Contact Us",
    url: "#Contact",
    onlyMobile: true,
  },
 
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "🎉 Welcome to MLSC!",
    text: "In June 2023, the Microsoft Learn Students' Club was established to promote technological growth by using various Microsoft technologies.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "🤝 Friendly and Supportive Community",
    text: "Our club fosters a friendly, supportive, and motivated environment to enhance and improve coding skills, critical thinking, logic, and management skills.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "🌟 Vision",
    text: "With a vision to empower individuals with the latest advancements and tools, MLSC is dedicated to strengthening a community of tech enthusiasts and innovators.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "🚀 Mission",
    text: "The mission of MLSC is to foster development in technological domains through various effective channels, including hands-on projects, international collaborations, seminars, and competitions using Microsoft technologies.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "💡 Inspiring Creativity",
    text: "We inspire students through creativity and emerging technologies. MLSC will prepare students for the rapidly changing tech industry in a modern and innovative manner.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "🌍 Making a Difference",
    text: "By working towards these goals, MLSC hopes to make a real difference in the lives of its members and in the world around them.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
 
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/mlsa.amity/",
  },
  {
    id:"1",
    title: "Linkedin",
    iconUrl: linked,
    url:"https://www.linkedin.com/company/msc-amity/"
  }
];

export const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const testimonials = [
  {
    text: "I've been using this web hosting service for a few months and it's been nothing but problems. ",
    name: 'Michael Brown',
    title: 'Online Entrepreneur',
    rating: 2,
    image: 'https://via.placeholder.com/50',
  },
  {
    text: "The service started out great, but recently it's been having a lot of issues. My site has experienced several outages and customer support has not been helpful.",
    name: 'Sarah Smith',
    title: 'Blogger',
    rating: 3,
    image: 'https://via.placeholder.com/50',
  },
  {
    text: "I was hoping for better performance given the cost, but unfortunately, the service has been subpar. Downtime and slow response times have been a constant issue.",
    name: 'David Lee',
    title: 'Web Developer',
    rating: 2,
    image: 'https://via.placeholder.com/50',
  },
  {
    text: "Not satisfied with the service. Too many outages and poor customer support. Would not recommend to anyone looking for reliable hosting.",
    name: 'Emily Davis',
    title: 'E-commerce Store Owner',
    rating: 1,
    image: 'https://via.placeholder.com/50',
  },
];
