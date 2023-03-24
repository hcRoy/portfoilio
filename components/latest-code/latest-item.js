import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <div>
                <h2 style={{ textAlign: "left", fontSize: "1.4rem" }}>
                  {item.title}
                </h2>
                <p>{item.description}</p>
                <Link href={item.link}>
                  <Button
                    variant="outlined"
                    sx={{ color: "var(--color-grey-800)" }}
                  >
                    View Repository <ArrowForwardIcon></ArrowForwardIcon>
                  </Button>
                </Link>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const items = [
  {
    title: "Meetup Website Using NextJS",
    description:
      "Find Meetup events so you can do more of what matters to you. Or create your own group and meet people near you who share your interests.",
    link: "https://github.com/hcRoy/nextjs-meetup",
  },
  {
    title: "Quiz App Using TypeScript",
    description:
      "Quiz app Motivate every student to mastery with easy-to-customize content combined with tools for inclusive assessment, instruction, and practice.",
    link: "https://github.com/hcRoy/react-quiz",
  },
  {
    title: "Forkify App Using Vanilla JavaScript",
    description:
      "Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. Start by searching for a recipe or an ingredient.",
    link: "https://github.com/hcRoy/forkify-course",
  },
  {
    title: "Entertainment Hub Using ReactJS",
    description:
      "Find Meetup events so you can do more of what matters to you. Or create your own group and meet people near you who share your interests.",
    link: "https://github.com/hcRoy/nextjs-meetup",
  },
  {
    title: "Weather App Using Redux",
    description:
      "Quiz app Motivate every student to mastery with easy-to-customize content combined with tools for inclusive assessment, instruction, and practice.",
    link: "https://github.com/hcRoy/react-quiz",
  },
  {
    title: "Omnifood Website Template",
    description:
      "Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. Start by searching for a recipe or an ingredient.",
    link: "https://github.com/hcRoy/forkify-course",
  },
];
