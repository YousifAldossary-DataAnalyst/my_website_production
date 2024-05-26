import { astro,e1, zain, data } from '../assets/images'


export const experiences = [
    {
        title: "Business Intelligence",
        company_name: "Zain",
        icon: zain,
        iconBg: "#95c11f",
        date: "April 2022 - Sept 2022",
        points: [
            "Ensure data is loaded to OBIEE before 9 am. Communicate with relevant teams for issues related to missing files.",
            "Confirm successful data loading and address any delays or missing data for retrievals.",
            "Solve BI-related issues and manage increased data traffic with NOC Teams' help.",
            "Run billing tasks for B2B and B2C mid-month and end of the month.",
            "Monitor data trends and identify irregularities.",
            "Run aggregation every 5 days to correct backlog.",
            "Use ETL on the data warehouse to create reports on OBIEE.",
            "Support stakeholders by providing files and creating dashboards to aid business decisions.",
        ],
    },
    {
        title: "Operating Officer",
        company_name: "Astro SA",
        icon: astro,
        iconBg: "#B748FF",
        date: "Jan 2023 - Oct 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Data Analyst",
        company_name: "Eastern Health Cluster",
        icon: e1,
        iconBg: "#add8e6",
        date: "Jan 2023 - Sept 2023",
        points: [
            "Create easy-to-read business dashboards.",
            "Worked on multiple projects like high hospital readmission rate, registry issues, survey analysis and patient information correction.",
            "Correcting data registries for diseases with the right global ICD codes.",
            "Ensure data quality in demographics, diagnosis, vaccinations, and medications.",
            "Handle ETL for patients with diseases for KPI purposes.",
            "Predict health trends like influenza virus in winter.",
            "Support epidemiology with disease fluctuations based on registered patients and population data.",
            "supervising interns and new employees.",
        ],
    },
    {
        title: "Database Analyst",
        company_name: "Amer Salman Al-Omaiyri",
        icon: data,
        iconBg: "#B9E644",
        date: "Dec 2023 - Present",
        points: [
            "Reviews and analyzes transportation costs, parts procurement and delivery processes, inventory issues such as back orders, and another fulfillment.",
            "CReviews logistics processes and procedures; identifies, recommends, and implements improvements to maximize delivery efficiency while minimizing costs.",
            "Collects, interprets, and analyzes various types of logistics data including product availability, transport and delivery reliability, and other data related to product supply chain management, sourcing, and distribution.",
            "Tracks product flow from origin to delivery via web-based logistics systems and other appropriate methods of monitoring inventory and shipment vehicles.",
            "Monitors warehouse facilities to evaluate inventory transactions such as receiving, storage, shipping, and inventory integrity.",
            "Develop quantitative analysis, ad-hoc reports, and models to support key operations decisions, including process optimizations and logistics management.",
        ],
    },
];
