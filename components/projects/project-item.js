import Footer from "../footer/footer-item";
import BasicCard from "./projects";
import classes from "./projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={classes.projects}>
        <h1>Projects</h1>
        <div className={classes.card}>
          <BasicCard></BasicCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
