import COAST from "./Assets/Projects/coast.jpg";
import COSMOS from "./Assets/Projects/cosmos.jpg";
import TRAVELWELL from "./Assets/Projects/travelwell.png";


export const PROJECTS = [
  {
    image: COSMOS,
    name: "Micorsoft Azure Cosmos DB",
    technologyUsed: "ReactJs, Javascript, Redux, knockout.js, Jest",
    description: "Azure Cosmos DB is Microsoft's proprietary globally distributed, multi-model database service 'for managing data at planet-scale' Azure Cosmos DB is a fully managed NoSQL database for modern app development. Single-digit millisecond response times, and automatic and instant scalability, guarantee speed at any scale.",
    deployUrl: "https://cosmos.azure.com/",
    gitHubUrl: "",
  },
  {
    image: TRAVELWELL,
    name: "travlwell.com",
    technologyUsed: "Shopify, React, typescript, polaris, GraphQL",
    description: "Custom Luggage Tags and Passport Holders engraved with everywhere you've traveled and everywhere you will travel in the future.",
    deployUrl: "https://travlwell.com/",
    gitHubUrl: "",
  },
  {
    image: COAST,
    name: "Coast",
    technologyUsed: "ReactNative, Javascript, Redux",
    description: "Team collaboration mobile app and online services like slack Message people and groups without sharing phone numbers, communicate with managers and staff all in one place. and discuss or assign tasks to get stuff done",
    deployUrl: "https://play.google.com/store/apps/details?id=com.fomo.android.app",
    gitHubUrl: "",
  },
];

export const SKILLS = [
  { name: "ReactJs", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Git", initialRating: 4 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Npm (Node Package Manager)", "Heroku"]
