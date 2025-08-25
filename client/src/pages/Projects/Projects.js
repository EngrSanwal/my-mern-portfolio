import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import imgg1 from "../../assets/pics/Foodpic.jpg";
import imgg2 from "../../assets/pics/todo.png";
import imgg3 from "../../assets/pics/estate.png";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          A showcase of my full-stack MERN capabilities, transforming ideas into performant and user-centric web applications. Each project demonstrates my proficiency in building scalable backend APIs with Node.js and Express, designing dynamic frontends with React, and managing data efficiently with MongoDB. From a feature-rich Food Delivery platform to intuitive productivity tools, I architect solutions that deliver real-world value and exceptional user experiences.
             </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={imgg1}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Nextjs</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Food Delivery Web App
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/EngrSanwal/Food-Delivery-App_mern-nextjs-project.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FrontEnd</span>
                  <img
                    src={imgg3}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Nextjs</span>

                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Real Estate Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/EngrSanwal/realstate.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={imgg2}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                 <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">To-Do Web App</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
