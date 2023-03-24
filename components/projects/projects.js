import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import userData from "@/constants/data";
import classes from "./projects.module.css";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Link from "next/link";

export default function BasicCard() {
  return (
    <Box
      component="ul"
      sx={{ display: "flex", gap: 6, flexWrap: "wrap", p: 0, m: 0 }}
    >
      {userData.projects.map((data) => (
        <div className={classes.flex}>
          <Link href={data.link}>
            <Card
              component="li"
              sx={{
                minWidth: 600,
                flexGrow: 1,
                minHeight: 300,
              }}
            >
              <CardCover>
                <img
                  src={data.imgUrl}
                  srcSet={data.imgUrl}
                  loading="lazy"
                  alt={data.title}
                />
              </CardCover>
              <CardContent>
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                    zIndex: "100",
                    borderTopRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                  }}
                  title={data.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={`star ${data.title}`}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </CardContent>
            </Card>
          </Link>

          <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
              <video autoPlay loop muted poster={data.imgUrl}>
                <source src={data.video} type="video/mp4" />
              </video>
            </CardCover>
            <CardContent>
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  zIndex: "100",
                  borderTopRightRadius: "12px",
                  borderTopLeftRadius: "12px",
                }}
                title={data.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${data.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </CardContent>
          </Card>
        </div>
      ))}
    </Box>
  );
}
