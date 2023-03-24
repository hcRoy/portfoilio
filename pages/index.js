import FeaturedPost from "@/components/featured-post/featured-post";
import Footer from "@/components/footer/footer-item";
import Hero from "@/components/hero/hero";
import LatestSection from "@/components/latest-code/latest-code";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero></Hero>
      <FeaturedPost></FeaturedPost>
      <LatestSection></LatestSection>
      <Footer></Footer>
    </Fragment>
  );
}
