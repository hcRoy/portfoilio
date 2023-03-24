import CustomImageList from "./project-item";
import classes from "./featured-post.module.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";

export default function FeaturedPost() {
  return (
    <div className={classes.project}>
      <h1 className={classes.heading}>Featured Projects</h1>
      <CustomImageList></CustomImageList>
      <div className={classes.btn}>
        <Link href="/project">
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              backgroundColor: "var(--color-grey-600)",
            }}
          >
            View All
          </Button>
        </Link>
      </div>
    </div>
  );
}
