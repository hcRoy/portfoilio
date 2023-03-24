import classes from "./hero.module.css";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <div>
        <ul className={classes.list}>
          <li className={classes.first}>Developer</li>
          <li className={classes.second}>Designer</li>
          <li className={classes.third}>Programmer</li>
        </ul>
      </div>
      <div>
        <img src="/images/HARSH.jpg" alt="Author image"></img>
      </div>
    </div>
  );
}
