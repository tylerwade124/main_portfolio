import TYPETHIS from "./Assets/Projects/type-this.png";
import PORTFOLIO from "./Assets/Projects/portfolio.png";
import DIGITALCLASSROOM from "./Assets/Projects/digital_classroom.png";
import ALLCHAT from "./Assets/Projects/allchat.png"



export const PROJECTS = [
  {
    image: TYPETHIS,
    name: "TypeThis",
    technologyUsed: "React, JavaScript, Git",
    description: "A typing game where the user can select a topic, then start a typing test with quotes related to that topic. After each quote is completed the user will recieve a score(WPM, accuracy, Errors, etc.)",
    deployUrl: "https://type-this.netlify.app/",
    gitHubUrl: "https://github.com/tylerwade124/type-this",
  },
  {
    image: DIGITALCLASSROOM,
    name: "Digital Classroom",
    technologyUsed: "React, JavaScript, Sequelize, Express, Postgres, Node.js, Postico, SQL, Git",
    description: "A full stack, CRUD, application created by a dev team of 2 other people. Created for instructors at General Assembly to be able to keep track of students assignments within each cohort they are in, or have been in. A user(instructor) can create an account, create classes, create students, and add assignments to each of those students. Once the student submits their assignment, the assignment switches from red to black to signify it has been turned in.",
    deployUrl: "",
    gitHubUrl: "https://github.com/natehacker/Teacher-Hub-",
  },
  {
    image: ALLCHAT,
    name: "AllChat",
    technologyUsed: "Python, Django, Django-channels, Javascript, Websockets, Django Auth, Postgres, SQL, Git",
    description: "A full stack, CRUD, real time chat application utilizing Django-channels and websockets where users, can register/signin/logout and update their account, then chat with other users that have joined the chat room.",
    deployUrl: "",
    gitHubUrl: "https://github.com/tylerwade124/allchat",
  },
  {
    image: PORTFOLIO,
    name: "2023 Porfolio",
    technologyUsed: "React, JavaScript",
    description: "Portfolio for the 2023 year",
    deployUrl: "",
    gitHubUrl: "https://github.com/tylerwade124/main_portfolio",
  },
];

export const SKILLS = [
  { name: "React", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Python", initialRating: 3 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Git", initialRating: 4 },
  { name: "Postgres", initialRating: 3 },
  { name: "SQL", initialRating: 4 },
  { name: "Django", initialRating: 4 },
  { name: "RESTFful APIs", initialRating: 3 },
  { name: "Express", initialRating: 3 },
  { name: "Sequelize", initialRating: 3 },
];

export const TOOLS = ["Visual Studio Code", "Git", "Npm (Node Package Manager)", "Heroku", "Insomnia", "Postico", "Slack", "Zoom"]
