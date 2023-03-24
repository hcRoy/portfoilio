import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import classes from "./featured-post.module.css";
import { useRouter } from "next/router";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const router = useRouter();
  const openHandler = (link) => {
    router.push(link);
  };

  return (
    <div className={classes.featured}>
      <ImageList
        sx={{
          width: 850,
          height: 600,
          overflow: "hidden",
          // borderRadius: 8,
          boxShadow: "5px 5px 10px #999",
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                onClick={() => openHandler(item.link)}
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                style={{ cursor: "pointer" }}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  zIndex: "100",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "/images/omnifood.png",
    title: "Omnifood",
    author: "@bkristastucchio",
    link: "https://omnifood-hcroy.netlify.app/",
    featured: true,
  },
  {
    img: "/images/hub.png",
    title: "Entertainment Hub",
    author: "@rollelflex_graphy726",
    link: "https://hc-entertainment-hub.netlify.app/",
  },
  {
    img: "/images/quiz.png",
    title: "Quiz App",
    author: "@helloimnik",
    link: "https://typescript-quiz-hcroy.netlify.app/",
  },
];
