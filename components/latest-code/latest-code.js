import ResponsiveGrid from "./latest-item";
import classes from "./latest-code.module.css";

export default function LatestSection() {
  return (
    <div className={classes.latest}>
      <h1>Latest Code</h1>
      <div className={classes.grid}>
        <ResponsiveGrid></ResponsiveGrid>
      </div>
    </div>
  );
}
