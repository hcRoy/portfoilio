import React from "react";
import userData from "../../constants/data";
import Footer from "../footer/footer-item";
import classes from "./about.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function AboutMe() {
  return (
    <div className={classes.about}>
      <div>
        <h1>About Me.</h1>
      </div>
      <div>
        <div className={classes.title}>
          <span style={{ lineHeight: "3rem" }}>
            {userData.about.title}. Currently working on{" "}
            <a href={userData.about.currentProjectUrl}>
              {userData.about.currentProject} 🎥
            </a>
          </span>
        </div>
      </div>
      <div>
        <div className={classes.flex}>
          <div>
            <div className={classes.contact}>
              <h2>Contact</h2>
              <p>
                For any sort help / enquiry, shoot a{" "}
                <a href={`mailto:${userData.email}`}>mail</a> and I'll get back.
                I swear.
              </p>
            </div>
            <div className={classes.job}>
              <h2>Job Opportunities</h2>
              <p>
                I'm looking for a job currently, If you see me as a good fit,
                check my{" "}
                <a href={userData.resumeUrl} target="__blank">
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            {/* Social Links */}
            <h2>Social Links</h2>
            <div className={classes.link}>
              <div>
                <a href={userData.socialLinks.facebook}>
                  <div className={classes.social}>
                    <FacebookIcon />
                    <span> Facebook </span>
                    <span>&rarr;</span>
                  </div>
                </a>
              </div>
              <div>
                <a href={userData.socialLinks.twitter}>
                  <div className={classes.social}>
                    <TwitterIcon />
                    <span>Twitter </span>
                    <span>&rarr;</span>
                  </div>
                </a>
              </div>
              <div>
                <a href={userData.socialLinks.github}>
                  <div className={classes.social}>
                    <GitHubIcon />
                    <span>GitHub </span>
                    <span>&rarr;</span>
                  </div>
                </a>
              </div>
              <div>
                <a href={userData.socialLinks.linkedin}>
                  <div className={classes.social}>
                    <LinkedInIcon />
                    <span>LinkedIn</span>
                    <span> &rarr;</span>
                  </div>
                </a>
              </div>
              <div>
                <a href={userData.socialLinks.instagram}>
                  <div className={classes.social}>
                    <InstagramIcon />
                    <span>Instagram </span>
                    <span>&rarr;</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className={classes.description}>
            {userData.about.description?.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}

            <span className={classes.tech}>Tech Stack</span>
            <div className={classes.img}>
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />
              <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
