import Work1 from "../../public/work/work1.png";
import Work4 from "../../public/work/work4.png";
import Work5 from "../../public/work/work5.png";
import Work7 from "../../public/work/work7.jpg";

const title = "Portfolio";
const subtitle = "Most recent work";

const portfolio_item = [
  {
    id: 1,
    image: Work7,
    title: "Bank Saqu",
    category: "Mobile Application",
    description: "Develop Mobile Aplication for Bank Saqu with React Native",
    info: [
      {
        id: 1,
        title: "Apps Performance Optimization Spesialist",
      },
      {
        id: 2,
        title: "Develop feature for Bank Saqu Mobile App with React Native",
      },
      {
        id: 3,
        title: "Create Standarization Code for Bank Saqu Mobile App",
      },
      {
        id: 4,
        title: "Refactoring Code for Bank Saqu Mobile App with React NativE",
      },
      {
        id: 5,
        title:
          "Integrate Push Notification for Bank Saqu Mobile App with Firebase",
      },
      {
        id: 6,
        title: "Integrate KYC for Bank Saqu Mobile App with React Native",
      },
    ],
    result: [
      {
        id: 1,
        icon: "bxl-apple",
        link: "https://apps.apple.com/id/app/bank-saqu/id1668516593",
        title: "App Store",
      },
      {
        id: 2,
        icon: "bxl-google",
        link: "https://play.google.com/store/apps/details?id=bjj.bank.digital.indo.prod&hl=id",
        title: "Google Play Store",
      },
    ],
    filterId: 1,
    position: "Senior Mobile Engineer",
  },
  {
    id: 2,
    image: Work5,
    title: "Bank Permata",
    category: "Mobile Application",
    description: "Develop Mobile Aplication for Bank Permata with React Native",
    info: [
      {
        id: 1,
        title: "Apps Performance Optimization Spesialist",
      },
      {
        id: 2,
        title: "Develop feature for Permata Mobile X / Permata ME",
      },
      {
        id: 3,
        title: "Create Standarization Code for Permata Mobile X / Permata ME",
      },
      {
        id: 4,
        title: "Create CI/CD for Permata Mobile X / Permata ME",
      },
      {
        id: 5,
        title:
          "Create SDK iOS for Opening Account Permata Bank with Swift & Clean Architecture",
      },
      {
        id: 6,
        title: "Refactoring Code for Permata Mobile X / Permata ME",
      },
    ],
    result: [
      {
        id: 1,
        icon: "bxl-apple",
        link: "https://apps.apple.com/id/app/permata-me/id1323973644",
        title: "App Store",
      },
      {
        id: 2,
        icon: "bxl-google",
        link: "https://play.google.com/store/apps/details?id=net.myinfosys.PermataMobileX&hl=id",
        title: "Google Play Store",
      },
    ],
    filterId: 1,
    position: "Co Lead Mobile Developer",
  },
  {
    id: 5,
    image: Work4,
    title: "ScoreQuest",
    category: "Mobile & Website Application",
    description:
      "Develop mobile application and website for update score E-Sports and manage tournament.",
    info: [
      {
        id: 1,
        title: "Develop mobile application for ScoreQuest with Flutter",
      },
      {
        id: 2,
        title: "Develop website for ScoreQuest with React JS",
      },
      {
        id: 3,
        title: "Develop backend for ScoreQuest with Golang and PostgreSQL",
      },
      {
        id: 4,
        title: "Develop CMS for ScoreQuest with React JS",
      },
      {
        id: 5,
        title: "Create Notification for ScoreQuest with FCM",
      },
      {
        id: 6,
        title: "Integrate Bracket Tournament with chalonge",
      },
    ],
    result: [
      {
        id: 1,
        icon: "bxl-apple",
        link: "https://apps.apple.com/id/app/scorequest/id6475076922",
        title: "App Store",
      },
      {
        id: 2,
        icon: "bxl-google",
        link: "https://play.google.com/store/apps/details?id=com.project.scorequest&hl=id",
        title: "Google Play Store",
      },
      {
        id: 3,
        icon: "bx-link",
        link: "https://scorequest.id/",
        title: "Website",
      },
    ],
    filterId: 1,
    position: "Freelance - Fullstack Developer",
  },
  {
    id: 6,
    image: Work1,
    title: "KitaWarga",
    category: "Mobile & Website Application",
    description:
      "Develop Mobile Apps, Website and Backend for KitaWarga with Flutter",
    info: [
      {
        id: 1,
        title: "Develop mobile application for KitaWarga with Flutter",
      },
      {
        id: 2,
        title: "Develop feature for KitaWarga",
      },
      {
        id: 3,
        title: "Develop website for KitaWarga with React JS",
      },
      {
        id: 4,
        title: "Develop backend for KitaWarga with Express JS",
      },
      {
        id: 5,
        title: "Implement push notifications with firebase",
      },
      {
        id: 6,
        title: "Integration Payment with Xendit",
      },
      {
        id: 7,
        title: "Maintain and develop feature for KitaWarga",
      },
      {
        id: 8,
        title: "Deployment KitaWarga to Server",
      },
    ],
    result: [
      {
        id: 1,
        icon: "bx-link",
        link: "https://kitawarga.com/",
        title: "Website",
      },
      {
        id: 2,
        icon: "bxl-google",
        link: "https://play.google.com/store/apps/details?id=com.project.kita_warga_apps&hl=id",
        title: "Google Play Store",
      },
    ],
    filterId: 1,
    position: "Fullstack Developer",
  },
];

const portfolio_filter = [
  {
    id: 1,
    title: "Project",
  },
];

const portfolio_content = {
  title,
  subtitle,
  portfolio_item,
  portfolio_filter,
};

export default portfolio_content;
