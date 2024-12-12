import CoinsPHIcon from './assets/coinsPH.webp'
import CalcmenuIcon from './assets/CalcmenuIcon.webp'
// import EncoraIcon from './assets/encora.webp'
import F360Icon from './assets/360fIcon.webp'
import TrainaltaIcon from './assets/trainalta.webp'
import StrattonIcon from './assets/strattonIcon.webp'

export const navList = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
];

//tech stack
const techStack = [
  { name: "JavaScript", color: "#D4B017" },
  { name: "Python", color: "#255A7A" },
  { name: "Java", color: "#005578" },
  { name: "React", color: "#21A1F1" },
  { name: "Node.js", color: "#4A7049" },
  { name: "HTML5", color: "#B6351E" },
  { name: "CSS3", color: "#105B85" },
  { name: "Angular", color: "#AA0025" },
  { name: "Vue.js", color: "#2C8067" },
  { name: "Ruby", color: "#560F13" },
  { name: "Go", color: "#00749B" },
  { name: "Swift", color: "#C0402E" },
  { name: "PHP", color: "#3A466E" },
  { name: "TypeScript", color: "#005999" },
  { name: "C#", color: "#4A2173" },
  { name: "Docker", color: "#1E78B8" },
  { name: "Kubernetes", color: "#2757A3" },
  { name: "MySQL", color: "#365970" },
  { name: "MongoDB", color: "#356938" },
  { name: "PostgreSQL", color: "#27496B" },
  { name: "GraphQL", color: "#B8007F" },
  { name: "Firebase", color: "#CC9A1E" },
  { name: "AWS", color: "#CC7A00" },
  { name: "Azure", color: "#00639B" },
  { name: "Git", color: "#C04127" },
  { name: "GitHub", color: "#141313" },
  { name: "Slack", color: "#3B113C" },
  { name: "Figma", color: "#C03D17" },
  { name: "WordPress", color: "#185273" },
  { name: "Laravel", color: "#CC241A" },
  { name: "VB.NET", color: "#763F8C" },
  { name: "Next.js", color: "#000000" },
  { name: "Contentful", color: "#2478CC" },
  { name: "GraphQL", color: "#D64292" },
];

//experience data
export const experienceList = [
  {
    name: "Calcmenu",
    imageURL: CalcmenuIcon,
    websiteURL: "https://www.calcmenu.com/",
    date: "2016-2019",
    responsibilities: [
      "Designed and developed the front-end of the web application using modern JavaScript frameworks, ensuring a responsive and user-friendly interface.",
      "Implemented a dynamic UI to handle complex recipe and menu management, optimizing the layout for ease of use by restaurant staff and administrators.",
      "Integrated a system for auto-populating nutritional facts, ensuring smooth interaction between the front-end and back-end services.",
      "Worked closely with UX/UI designers to enhance the user experience, improving the presentation and navigation of recipe and product data.",
      "Ensured cross-browser compatibility and mobile responsiveness to cater to a wide range of devices and users.",
    ],
    stack: [
      techStack[30],
      techStack[0],
      techStack[3],
      techStack[4],
      techStack[5],
      techStack[6],
      techStack[7],
    ],
  },
  {
    name: "360F",
    imageURL: F360Icon,
    websiteURL: "https://www.360f.com/",
    date: "2016-2019",
    responsibilities: [
      "Developed interactive front-end components using React.js to provide users with real-time financial advice and investment recommendations.",
      "Integrated real-time data visualization elements to dynamically display financial values and personalized 'happiness scores.'",
      "Built responsive, user-friendly interfaces that allow users to easily input their financial aspirations and receive customized advice.",
      "Collaborated with back-end teams to ensure seamless integration of data feeds from financial services and insurance providers.",
      "Optimized performance for large datasets on the front-end, ensuring a fast and responsive user experience even during data-heavy operations.",
    ],
    stack: [techStack[0], techStack[3], techStack[5], techStack[6]],
  },
  {
    name: "Trainalta",
    imageURL: TrainaltaIcon,
    websiteURL: "https://www.trainalta.com/",
    date: "2016-2019",
    responsibilities: [
      "Developed the front-end for a gym booking platform using modern JavaScript frameworks, ensuring smooth user interactions and a visually appealing interface.",
      "Integrated geolocation features to dynamically display the nearest gyms based on the user's current location, enhancing the booking experience.",
      "Implemented a responsive design that works across various devices, including mobile phones and tablets, allowing users to access the platform from anywhere.",
      "Built reusable components for booking forms, fitness program listings, and schedule displays to streamline development and ensure consistency.",
      "Collaborated with designers to improve the user experience based on user feedback, focusing on the ease of booking and program selection.",
    ],
    stack: [
      techStack[0],
      techStack[3],
      techStack[5],
      techStack[6],
      techStack[31],
      techStack[32],
      techStack[33],
    ],
  },
  {
    name: "Stratton Finance",
    imageURL: StrattonIcon,
    websiteURL: "https://www.strattonfinance.com.au/",
    date: "2016-2019",
    responsibilities: [
      "Designed and developed the user-facing portion of the car insurance quotation system, focusing on a clean and intuitive interface.",
      "Implemented responsive form flows where users can answer questions about their vehicle and receive insurance quotes in real-time.",
      "Collaborated with back-end developers to ensure the smooth flow of data from car insurance providers and brokers, enhancing the user experience.",
      "Optimized the front-end to handle large amounts of data from various insurance companies, ensuring a fast and smooth quoting process.",
      "Focused on cross-browser and mobile compatibility to ensure the application works seamlessly for all users.",
    ],
    stack: [
      techStack[0],
      techStack[3],
      techStack[5],
      techStack[6],
      techStack[31],
    ],
  },
  {
    name: "Coins.ph",
    imageURL: CoinsPHIcon,
    websiteURL: "https://coins.ph/",
    date: "2016-2019",
    responsibilities: [
      "Developed and maintained responsive web applications using front-end technologies such as React.js, Next.js, and Vue.js to enhance the platform’s functionality and user experience.",
      "Built reusable, modular UI components that streamlined development and ensured consistency across different parts of the web application.",
      "Collaborated with SEO specialists to implement front-end changes that improved the site’s search engine ranking and visibility.",
      "Optimized the front-end for performance, focusing on reducing load times and improving overall user interaction with the platform.",
      "Worked closely with design and back-end teams to ensure a cohesive user experience, implementing features that adhered to UI/UX best practices.",
    ],
    stack: [
      techStack[0],
      techStack[3],
      techStack[5],
      techStack[6],
      techStack[31],
      techStack[8],
    ],
  },
];
