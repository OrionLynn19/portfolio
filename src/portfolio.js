                /* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Orion's Portfolio",
  description:
    "A passionate and adaptable student who thrives in dynamic environments, embraces challenges as opportunities for growth, and eagerly seeks new knowledge.",
  og: {
    title: "Lin Pyae Hmu Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Lin Pyae Hmu",
  logo_name: "OrionPortfolio",
  nickname: "Orion Lynn",
  subTitle:
    "A passionate and adaptable student who thrives in dynamic environments, embraces challenges as opportunities for growth, and eagerly seeks new knowledge.",
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1-R6WyDscV8LnnXLOamQpByKi-fHT0800",
  portfolio_repository: "https://github.com/OrionLynn19/OrionLynn19.github.io.git",
  githubProfile: "https://github.com/OrionLynn19",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/OrinLynn19",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/lin-pyae-hmu-a198802b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 
  {
    name: "Gmail",
    link: "mailto:lynn.orion19@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

 
  {
    name: "Instagram",
    link: "https://www.instagram.com/orion_lynn_?igsh=MWo0eGNoeHB2Z2E2Mg==",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Devops/ Cloud Engineer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ I design and optimize cloud infrastructure, automate deployments, and ensure system reliability",
        "⚡ Implement CI/CD pipelines, manage containerization, and enhance cloud security",
        "⚡ Focuses on scalability, monitoring, and performance optimization for efficient operations.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
       
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed dynamic front end using React, Svelte",
        "⚡ Solid understanding of restful Api, websocket Api",
        "⚡ Building Api using Node.js, Express.js and python(Flask)",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      
       
      
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ AWS certified ( SAA - C03 )",
        "⚡ Cloud Platforms : AWS, GCP",
        "⚡ Container Orchestration : Docker, Kubernetes, ",
        "⚡ Iac : Terraform, CloudFormation",
        "⚡ CI/CD : Jenkins, Github Actions"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      
       
       
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
   
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "AWS Certified",
      iconifyClassname: "simple-icons:amazonaws",
      style: {
        color: "black",
      },
      profileLink: "",
    },
    {
      siteName: "Udemy",
      iconifyClassname: "logos:udemy",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "cib:coursera",
      style: {
        color: "black",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rangsit University ( International College )",
      subtitle: "B. Sc in Computer Science",
      logo_path: "RSU_logo.png",
      alt_name: "RSU",
      duration: "2022 - Present",
      descriptions: [
        "⚡ Currently pursuing my degree with a specialization in Cloud Computing, Networking and System Operations.",
        "⚡ I have done courses on AWS, Web stack development, Linux, Docker, etc .",
        "⚡ Strong foundation in Data Structures, Algorithms, DBMS, OS, Computer Architecture.",
      ],
      website_link: "https://www.rsu.ac.th/",
    },
    {
      title: "Technological University ( Mawlamyine )",
      subtitle: "B. E in Electrical Power Engineering ( dropout )",
      logo_path: "log0.png",
      alt_name: "TU MLM",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Studying electrical circuits, signal processing, and energy distribution to design efficient electrical systems.",
        "⚡ Due to Covid - 19 and political situation in Myanmar, I had to leave my studies.",
        
      ],
      website_link: "https://tumawlamyine.edu.mm/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
      certificate_link:
        "https://www.credly.com/badges/a307e324-5b79-4a55-8167-72b41789abdc/public_url",
      alt_name: "AWS CLF - C02",
      color_code: "white",
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: "Amazon Web Services",
      logo_path: "1_N79la-vgq0gyHLVvDOEdOg.png",
      certificate_link:
        "https://www.credly.com/badges/25d1348f-beb5-43be-8894-0bf1faabdfb3/public_url",
      alt_name: "AWS SAA - C03",
      color_code: "#FF990099",
    },
    {
      title: "Outstanding Paper Award on Machine Learning",
      subtitle: "Procative Financial Planning",
      logo_path: "1-581a0da4.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    /*{
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },*/
    /*{
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },*/
    /*{
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },*/
    /*{
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },*/
    /*{
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },*/
    /*{
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },*/
    /*{
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
    /*{
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    }, */
    /*{
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    }, */ 
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Experience and Internships",
  description:
    "As a Teaching Assistant, I developed customized lesson plans, facilitated interactive learning, and introduced students to computer science concepts. I also designed an AI chatbot and developed network simulations, applying technical expertise to practical implementations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Teaching Assistant",
          company: "Rangsit University.",
          company_url: "https://www.rsu.ac.th/",
          logo_path: "RSU_logo.png",
          duration: "2022 - 2023",
          location: "Pathum Thani, Thailand",
          description:
            "Developed tailored lesson plans to accommodate diverse learning styles, boosting students' confidence and fluency in English. Facilitated interactive discussions and peer collaboration, enhancing communication skills. Leveraged digital tools to create engaging and dynamic learning experiences.",
          color: "#000000",
        },
        {
          title: "Open House Event Coordinator",
          company: "Rangsit University.",
          company_url: "https://rsu.ac.th/",
          logo_path: "RSU_logo.png",
          duration: "2023",
          location: "Pathum Thani, Thailand",
          description:
            "Introduced high school students to the ICT major, highlighting key concepts and curriculum insights to spark interest. Showcased student projects, demonstrating real-world applications and inspiring prospective students to explore the field.",
          color: "#0879bf",
        },
        /*{
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },*/
        /*{
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },*/
      ],
    },
    {
      title: "Internships ( currently seeking )",
      experiences: [
        {
          title: "It would be great if whoever looking at this tab can help me with internship opportunities.",
          company: "OrionLynn.",
          company_url: "",
          logo_path: "internship.png",
          duration: "Starting from August 2025",
          location: "Bangkok, Thailand",
          description:
            "",
          color: "#000000",
        },
        /*{
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },*/
      ],
    },
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Media.png",
    description:
      "You can reach me anytime through email, LinkedIn, GitHub, or other platforms. I'm always open to connecting! I’m a curious and methodical learner who enjoys solving complex problems, mentoring new leaves, and exploring new ideas. Thoughtful and analytical, I value meaningful conversations, collaboration, and continuous growth.",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "The Star Apartment RSU , 88/8 Moo 4, Khlong Nueng, Khlong Luang, Pathum Thani 12000",
    locality: "Pathum Thani",
    country: "Thailand",
    region: "Pathum Thani",
    postalCode: "12000",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/XVjti8gi2Z6JB5VV9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
