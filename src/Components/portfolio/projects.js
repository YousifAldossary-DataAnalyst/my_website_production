import {chocolate,
  aws,
  crunchyroll,
  diabetes,
  projects} from '../../assets/images'
const Projects = 
    [
      {
        title: "Top 10 Anime",
        desc: "A recommendation system for Crunchyroll, a streaming service similar to Netflix. The goal is to help uses find new show they are most likely to like similarly to what they are currently watching.",
        img: crunchyroll,
        link: "https://github.com/YousifAldossary-DataAnalyst/AnimeRecommendation.git",
      },
      {
        title: "Amazon-Web-Scrapping",
        desc: "I'm testing a data analytics method for a live online seller data, such as Amazon. It involves: 1. Tracking T-shirt price changes and alerting when discounts occur. 2. Analyzing product reviews and availability. 3. Identifying common words used in different reviews both positive words and negative words",
        img: aws,
        link: "https://github.com/YousifAldossary-DataAnalyst/Amazon-Web-Scrapping.git",
      },
      {
        title: "Why diabetes are most diagnosed disease?",
        desc: "Diabetes ranks among the most prevalent diagnoses in Saudi Arabia, as noted by PHM (E1). Public data available on Kaggle can help us explore variables correlated with diabetes.",
        img: diabetes,
        link: "https://github.com/YousifAldossary-DataAnalyst/Diabetes_Review.git",
      },
      {
        title: "Chocolate Tasting",
        desc: "A french chocolate manufacturer has reached out to you. All of their bars have been highly rated by critics, yet critics have very particular taste buds. And some bars they love have inexplicably mediocre sales, but non-critics seem to like them in focus groups and tastings, so they are puzzled why sales dont coincide with their market research.",
        img: chocolate,
        link: "https://colab.research.google.com/drive/1b6gWLBBgTQo4Rk51kMhDWHiyvlUOSPIn?usp=sharing",
      },
      {
        title: "Multiple real world business cases",
        desc: "There's a diverse range of field work available, which is based on real-life data from Machine Learning to Deep Learning examples from white box, black box, XGBoost, and other methods. For optimal performance, it would be beneficial to use a high-powered PC due to potential loading issues.",
        img: projects,
        link: "https://colab.research.google.com/drive/1EKvhh3CvbKwTDUmrcCsY6VuWu3sAscld?usp=sharing",
      },
    ];
  
  export default Projects;