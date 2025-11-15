export interface ContentBlock {
  id: string
  title: string        // Position / role
  company?: string     // Company name (optional)
  description: string
  image?: string
  video?: string
  link?: string
  startDate?: string
  endDate?: string
  type: "large" | "small" | "video" | "link" | "upcoming"
  certificateLink?: string
  driveLink?: string
  skills?: string[]
}

export interface Section {
  id: string
  title: string
  blocks: ContentBlock[]
}

export const portfolioData: Section[] = [
  {
    id: "work-experience",
    title: "Work Experience",
    blocks: [
      {
        id: "work-1",
        title: "Firmware Engineer",
	company: "PatientCompanion",
        description:
          "Designing and optimizing embedded firmware for large-scale (250+ unit) patient-call hardware systems, including secure wired/wireless communication, real-time event handling, device provisioning, diagnostics, and reliable integration with clinical infrastructure.",
        startDate: "Nov 2025",
        endDate: "Present",
        type: "large",
        skills: ["C++", "Azure", "Health"],
      },
      {
        id: "work-2",
        title: "IT Technical Assistant Intern",
	company: "Housing & Conference Services | McMaster University",
        description:
          "Improved check in/out for guests in 4000 rooms with automated card scanner using Python, C++, and Scripting. Worked with Bluecat to switch campus network ports to available upon request saving $250k+ in pilot project. Assisted with API calls and 100+ computer setups.",
        startDate: "Apr 2025",
        endDate: "Aug 2025",
        type: "large",
        skills: ["Scripting", "C++", "Python"],
      },
      {
        id: "work-3",
        title: "IT Infrastructure Analyst Assistant",
	company: "Cyber System Solutions",
        description:
          "Provide technical support for 25+ mobile devices, including setup and maintenance through Jira Support. Refurbishing computers and performing repairs/upgrades on a budget. Optimizing cloud infrastructure on Microsoft Azure including a hybrid server, and 10+ virtual machines.",
        startDate: "Sep 2024",
        endDate: "Aug 2025",
        type: "small",
        skills: ["Azure", "Jira", "Windows"],
      },
      {
        id: "work-4",
        title: "CAD Training Coordinator",
	company: "VEX Robotics at Central Peel Secondary School",
        description:
          "Guided 50+ junior students in mastering CAD software to design and refine competition-ready robots. Delivered hands-on training sessions focused on efficient 3D modeling techniques using Autodesk Inventor.",
        startDate: "Oct 2022",
        endDate: "Jun 2024",
        type: "small",
        skills: ["Autodesk Inventor", "Robotics", "Teaching"],
      },
    ],
  },
  {
    id: "design-teams",
    title: "Design Teams",
    blocks: [
      {
        id: "design-1",
        title: "Controls Team Member",
	company: "McMaster Rocketry",
        description: "Designed and manufactured STM32-based PCBs using KiCad for SRAD Avionics and Power Management. Developed embedded software in Rust for real-time DAQ and control, used in Strain Gauges DAQ and Airbrakes. Implemented CAN Bus communication protocols across multiple rocket subsystems, resulting in efficient data transfer.",
        image: "/assets/design1.jpg",
        startDate: "Sep 2025",
        endDate: "Present",
        type: "large",
        skills: ["Figma", "Prototyping", "Research"],
      },
      {
        id: "design-2",
        title: "Mechanical Team Member",
	company: "McMaster RoboSub",
        description:
          "Working on Actuation, specifically Thruster Placement and Mobility. This includes creating mounts and deciding on electronic components related to movement. My contributions are: torpedo launching and azimuth thruster systems.",
        link: "https://www.macrobosub.com/",
        startDate: "Feb 2025",
        endDate: "Sep 2025",
        type: "large",
        skills: ["Solidworks", "Autonomous", "Electronics"],
      },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    blocks: [
      {
        id: "project-1",
        title: "Cluster Server",
        description: "A cluster server made out of upcycled old tech. Originally including old full-sized computer desktop parts, currently includes Mini-PCs and old laptops. Also features a custom-made case. Goal is to make a cluster server capable of load-balanced computing and NAS storage.",
        type: "upcoming",
      },
      {
        id: "project-2",
        title: "ThermaLink",
        description: "I developed the hardware and firmware for ThermaLink, an Arduino-based stovetop safety system for a client with Usher’s syndrome. Using an MLX90614 IR sensor, Bluetooth module, LED indicators, and a heat-resistant enclosure, the C++ firmware monitors stove temperature and sends alerts to a companion app when unsafe heat or prolonged use is detected.",
        video: "/assets/project2.mp4",
        type: "video",
        skills: ["C++", "Arduino", "3D Print"],
      },
      {
        id: "project-3",
        title: "Card Dropbox",
        description:
          "Built an automated card-return workflow using an Intel Mini PC, Schlage card scanner, and ESP32. The system parses scanned credential data, triggers API-based guest checkout, sends automated email alerts, and uses an ESP32 + PIR sensor to verify physical card drop events for reliable end-to-end processing.",
        video: "/assets/project3.mp4",
        type: "video",
        skills: ["Python", "APIs", "ESP32"],
      },
      {
        id: "project-4",
        title: "SPARK Learn-a-thon",
        description: "Raised $2000+ and organized an innovative Learn-a-thon at Brampton City Hall. We live in a time of repetitive hackathons built around incredible students who can code at ridiculous speeds, and know the ins and outs of hardware. But how do students enter these hackathons? That is why we created the Learn-a-thon, an innovative hackathon that does not require any prior to knowledge — as it was taught at the event by guest speakers.",
        link: "https://startthespark.ca/spark_learnathon",
        type: "link",
        skills: ["Fundraising", "Education", "Operations"],
      },
    ],
  },
  {
    id: "certifications",
    title: "Certifications & Exams",
    blocks: [
      {
        id: "cert-1",
        title: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
        description: "Hands-on experience gained in Azure Machine Learning, and multiple other Azure suite products. Coded using Python SDK V2 and CLI V2.",
        certificateLink: "https://learn.microsoft.com/en-us/users/krishpatel-5635/credentials/6563383c91d05976",
        type: "large",
      },
      {
        id: "cert-2",
        title: "Columbia University: Quantitative Techniques",
        description: "Data analysis certification, learning statistical concepts and their practical applications. Furthering my interest in data engineering, and understanding big data.",
        certificateLink: "https://badges.plus.columbia.edu/ab1a1f34-cc62-47bb-b550-d137e7f08839#acc.wSkZQNzW",
        type: "large",
      },
      {
        id: "cert-3",
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        description: "Introductory certification to learn all about the Azure suite and integration. Core cloud concepts including: computing, networking, and storage.",
        certificateLink: "https://learn.microsoft.com/en-us/users/krishpatel13/credentials/f0e3c8d8f579fa4c?",
        type: "large",
      },
      {
        id: "cert-4",
        title: "Advanced Placement Calculus AB",
        description: "Scored a 5 on AP Calc AB exam.",
        type: "small",
      },
    ],
  },
  {
    id: "hackathons",
    title: "Hackathons & Competitions",
    blocks: [
      {
        id: "hack-1",
        title: "MediTank",
	company: "Shopify/Hackclub",
        description:
          "Worked on the mechanical and hardware systems for MediTank, a robotic tank built for an apocalyptic-themed hackathon. The platform featured a heat-signature radar for threat detection, alert apps for medical staff, and an efficient threat-cataloging system.",
        image: "/assets/hack1.jpg",
        type: "large",
      },
      {
        id: "hack-2",
        title: "MES Egg Drop",
        description: "Built a physics-driven egg-drop design for the McMaster Engineering Society Competition. Our solution used a large crumple zone to absorb impact against a brick surface, successfully protecting the egg from high-altitude drops.",
        image: "/assets/hack2.jpg",
        type: "large",
      },
      {
        id: "hack-3",
        title: "NSS Space Settlement Contest",
        description: "Contributed by developing the transportation technology for our proposed spacecraft. Focused on propulsion concepts, internal transit systems, and feasibility analysis to support long-term human operation in space.",
        link: "https://drive.google.com/file/d/1iM-ncGdJphxDeHTNXckSMo9FHbMWxvuk/view?usp=sharing",
        type: "large",
      },
    ],
  },
  {
    id: "academic",
    title: "Academic Projects",
    blocks: [
      {
        id: "academic-1",
        title: "P1 Project - Airport Systems",
        description:
          "Designed an efficient baggage handling system for ENG1P13, combining physical and data solutions. Built a 3D-printed and laser-cut cart with a Raspberry Pi–controlled QArm, while managing and analyzing airport datasets in Python to optimize operations.",
        type: "large",
      },
      {
        id: "academic-2",
        title: "P2 Project - Water Filter",
        description: "Conducted research on sustainable, cost-efficient, locally sourced materials for filtering radioactive particles, aimed at small-community water treatment near Bruce Power. Project completed in ENG1P13 and presented to 50+ industry professionals.",
        type: "large",
      },
    ],
  },
]

export const aboutData = {
  bio: "I'm Krish Patel, a passionate student at McMaster University studying Computer Engineering. I love building innovative tech that make a difference. When I'm not studying or working, you can find me watching tech vids, gaming, at the gym, or eating.",
  pcSetup: {
    title: "My PC Setup",
    description:
      "Dual 27 inch monitor setup. Specs: AMD Ryzen 9 3900X, RTX 2070 Super, 32GB DDR4, 3TB NVMe total.",
    image: "/assets/pc.jpg",
  },
  dreamCar: {
    title: "Dream Car",
    description: "Sheepeyrace ELITE2000 Huracan STO",
    image: "/assets/car.jpg",
  },
  skills: ["C/C++", "React/Next.js", "Python", "Scripting", "CAD", "ESP32/Arduino", "KiCAD", "Azure", "Rust"],
}
