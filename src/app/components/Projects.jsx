
'use client'; 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
const projectsData = [
    {
      title: "Musical Instrument Store",
      image: "/images/musical-instrument-store.png",
      liveLink: "#",
      githubLink: "https://github.com/aparanji49/musical-instrument-store",
      demoLink:"#",
      tags: ["React.js", "Next.js", "Redux", "Node.js", "Express.js", "GraphQL", "MongoDB", "Stripe API", "Three.js", "Gemini API", "OpenAI API", "AWS", "Terraform", "CI/CD", "Tailwind CSS", "Figma (Wireframes)"],
      categories: ["fullstack", "uiux"] ,
      description: `A next-generation e-commerce platform featuring 3D previews, Stripe integration, AI chatbot with Gemini and OpenAI APIs, deployed on AWS using Terraform.`
    },
    {
      title: "Vocab Bank",
      image: "/images/vocabbank-gif.gif",
      liveLink: "https://vocabbank-lilac.vercel.app/",
      githubLink: "https://github.com/aparanji49/VocabBank",
      demoLink:"#",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "Vercel", "Render", "Jest"],
      categories: ["fullstack"],
      description: `A full-stack vocabulary learning app with flashcards, search, pagination, and animated transitions. Built with MERN stack.`
    },
    {
      title: "Enchanted Pages Bookstore",
      image: "/images/Enchanted Pages Gif video.gif",
      liveLink: "http://webdev.cs.vt.edu:8080/AparanjiBookstoreReactTransact/",
      githubLink: "https://github.com/aparanji49/EnchantedPagesBookstore",
      demoLink:"https://youtu.be/KcUSFFzmGrg",
      tags: ["React.js", "Typescript", "HTML", "CSS", "RESTful APIs", "MySQL", "Tomcat", "AWS", "Figma (UI/UX)", "Accessibility"],
      categories: ["fullstack", "uiux"],
      description: `A cloud-hosted bookstore app with React + TypeScript frontend, Java backend on Tomcat, and AWS deployment. Focused on modern UI and accessibility.`
    },
    {
      title: "Online Slam Book",
      image: "/images/slambook_image.png",
      liveLink: "#",
      githubLink: "https://github.com/aparanji49/OnlineSlamBook",
      demoLink:"#",
      tags: ["HTML", "CSS", "AJAX", "JavaScript", "jQuery", "Django", "PostgreSQL", "Balsamiq Wireframes"],
      categories: ["fullstack", "uiux"],
      description: `Personalized slam book app with user authentication, custom questions, and themed backgrounds. Built using Django and PostgreSQL.`
    },
    {
      title: "Event Ease",
      image: "/images/event_ease_gif2.gif",
      liveLink: "http://eventeasebucket.s3-website.us-east-2.amazonaws.com/register",
      githubLink: "https://github.com/sushmanukala9/SEProject",
      demoLink:"https://youtu.be/6KnC0JF73d8",
      tags: ["React.js", "Typescript", "Spring Boot", "Axios", "MySQL", "AWS", "JavaMailSender", "Balsamiq Wireframes"],
      categories: ["fullstack", "cloud", "uiux"],
      description: `Event management platform with centralized RSVP tracking, Spring Boot backend, and AWS deployment.`
    },
    {
      title: "Instagram Clone",
      image: "/images/instagram_clone_gif2.gif",
      liveLink: "https://instagramwebappclone9.web.app/",
      githubLink: "https://github.com/aparanji49/instagram-web-clone",
      demoLink:"https://youtu.be/qAO0vLCYQrI",
      tags: ["React.js", "CSS", "Firebase Authentication", "Firebase Database", "Firebase Storage", "Google Cloud Platform"],
      categories: ["fullstack"],
      description: `Social media clone featuring authentication, posts, comments, image uploads. Built with React and Firebase suite.`
    },
    {
      title: "Hotel Booking Demand Visualization",
      image: "/images/hbd.jpeg",
      liveLink: "https://dashapp-y3lpa36u2a-nn.a.run.app/",
      githubLink: "https://github.com/aparanji49/Hotel-Booking-Demand",
      demoLink:"#",
      tags: ["Python", "DASH", "Google Cloud Platform", "Data Visualization", "Kaggle", "Plotly", "Pandas", "Scikit-learn"],
      categories: ["data"],
      description: `Visualization dashboard for hotel booking trends using Dash framework and Google Cloud deployment.`
    },
    {
      title: "Advanced Deployment of Bookstore App on AWS",
      image: "/images/adeploy-cloud.png",
      liveLink: "#",
      githubLink: "https://github.com/aparanji49/CloudComputingProjects/tree/main/Advanced%20Web%20App%20Deployment%20-%20AWS",
      demoLink:"#",
      tags: ["AWS", "EC2", "VPC", "Tomcat", "MySQL", "React.js", "Java (JSP/Servlet)", "Cloud Security", "Route 53"],
      categories: ["cloud"],
      description: `Advanced full-stack app deployment on AWS using custom VPC setup, secure architecture, and Tomcat-MySQL backend.`
    },
    {
      title: "Top 20 Hashtags Counter using Amazon EMR",
      image: "/images/hashtags.png",
      liveLink: "#",
      githubLink: "https://github.com/aparanji49/CloudComputingProjects/tree/main/Hashtag%20Counter%20-%20Amazon%20EMR%20and%20PySpark",
      demoLink:"#",
      tags: ["Amazon EMR", "PySpark", "Big Data", "AWS S3", "MapReduce", "Python", "Data Engineering"],
      categories: ["cloud", "data"],
      description: `Scalable big data processing using PySpark on Amazon EMR to analyze large tweet datasets.`
    },
    {
      title: "REST API Implementation using AWS Lambda",
      image: "/images/lambda.png",
      liveLink: "#",
      githubLink: "https://github.com/aparanji49/CloudComputingProjects/tree/main/REST%20API%20implementation%20With%20AWS%20Lambda",
      demoLink:"#",
      tags: ["AWS Lambda", "API Gateway", "AWS RDS", "Serverless", "IAM", "Cloud Logs", "Security Best Practices"],
      categories: ["cloud"],
      description: `Serverless REST API design using AWS Lambda, API Gateway, and RDS MySQL database.`
    },
    {
      title: "Cloud Adoption Strategy for a client",
      image: "/images/strategy.png",
      liveLink: "#",
      githubLink: "https://github.com/aparanji49/CloudComputingProjects/tree/main/Cloud%20Adoption%20Strategy",
      demoLink:"#",
      tags: ["AWS", "Serverless", "Lambda", "S3", "CloudFront", "WAF", "DevOps", "Cloud Migration"],
      categories: ["cloud"],
      description: `Migration strategy for a clients' web apps from EC2 to a serverless AWS architecture achieving cost optimization.`
    },
    {
      title: "Wine Quality Prediction with AWS SageMaker",
      image: "/images/sagemaker.png",
      liveLink: "#",
      githubLink: "https://github.com/aparanji49/CloudComputingProjects/tree/main/ML%20based%20wine%20classifier%20using%20AWS%20SageMaker",
      demoLink:"#",
      tags: ["AWS SageMaker", "Machine Learning", "Python", "Scikit-learn", "AWS S3", "Cloud Deployment"],
      categories: ["cloud", "data"],
      description: `End-to-end machine learning pipeline deployment for wine quality prediction using AWS SageMaker.`
    }
  ];




  const Projects = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects based on active category
  const filteredProjects = projectsData.filter(project =>
    activeCategory === "all" || project.categories.includes(activeCategory)
  );

  
    const [repos, setRepos] = useState([]);

    // Function to fetch GitHub repositories
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/aparanji49/repos');
        const sortedRepos = response.data
          .filter((repo) => repo.name !== 'aparanji49' && repo.name !== 'first-contributions')
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 4);
  
        setRepos(sortedRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };
  
    useEffect(() => {
      fetchRepos();
    }, []);
    return (
      <section id="projects-subsection" className="container-sm">
        <h2 className="section-heading display-6">Projects</h2>
  
           {/* Tabs Navigation */}
           <div className="tabs">
        <button
          className={`tab ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        <button
          className={`tab ${activeCategory === "fullstack" ? "active" : ""}`}
          onClick={() => setActiveCategory("fullstack")}
        >
          Full Stack Web Apps
        </button>
        <button
          className={`tab ${activeCategory === "uiux" ? "active" : ""}`}
          onClick={() => setActiveCategory("uiux")}
        >
          Frontend / UI & UX
        </button>
        <button
          className={`tab ${activeCategory === "data" ? "active" : ""}`}
          onClick={() => setActiveCategory("data")}
        >
          Data Visualization & ML
        </button>
        <button
          className={`tab ${activeCategory === "cloud" ? "active" : ""}`}
          onClick={() => setActiveCategory("cloud")}
        >
          Cloud Projects
        </button>
      </div>

      {/* Tabs Content */}
      <div className="tab-content">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project container project-card">
            <div className="row">
              <div className="project_gif col-lg-4 col-sm-12">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="col-lg-8 project_details col-sm-12">
                <div className="project_header">
                  <p className="h4 headings mb-0">{project.title}</p>
                  <div className="project_links">
                   {project.liveLink !== "#" &&  <a className="body_links" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Website <FontAwesomeIcon icon={faGlobe} />
                      {/* <i className="fa fa-globe"></i>  */}
                    </a>}
                    {project.githubLink!=="#" && <a className="body_links" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub   <FontAwesomeIcon icon={faGithub} />
                      {/* <i className="fa fa-github"></i> */}
                    </a>}
                   {project.demoLink!=="#" && <a className="body_links" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      Demo   <FontAwesomeIcon icon={faYoutube} />
                    </a> }
                  </div>
                </div>
                <div className="project_skills_tags">
                  {project.tags.map((tag, idx) => (
                    <div key={idx} className="project_skills_tag">{tag}</div>
                  ))}
                </div>
                <div className="project_text">{project.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

                {/* More from GitHub Section */}
                <div className="github-space">
          <p className="h4 section-heading">More from GitHub:</p>
          <div className="repo-container" id="repo-container">
            {repos.length === 0 ? (
              <p>Loading GitHub repositories...</p>
            ) : (
              repos.map((repo, index) => (
                <div key={index} className="repo">
                  <div>
                    <img src="images/github-mark-white.png" height="30" width="30" alt="GitHub" />
                    <h3>{repo.name}</h3>
                  </div>
                  <hr />
                  <div>
                    <img src="images/info-24.png" height="20" width="20" alt="Info" />
                    <p><strong>Description:</strong> {repo.description || 'No description available'}</p>
                  </div>
                  <div>
                    <img src="images/link-16.png" height="20" width="20" alt="Link" />
                    <p><strong>Link: </strong>
                      <a href={`https://www.github.com/${repo.full_name}`} target="_blank">
                        github.com/{repo.full_name}
                      </a>
                    </p>
                  </div>
                  <div>
                    <img src="images/clock-pending-time-svgrepo-com.png" height="20" width="20" alt="Clock" />
                    <p><strong>Last Updated:</strong> {new Date(repo.updated_at).toLocaleString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;