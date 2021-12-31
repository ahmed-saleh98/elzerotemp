import React, { lazy } from "react";
import "./App.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSPlugin from "gsap/CSSPlugin";

const NavBar = lazy(() => import("./components/navbar.js"));
const Landing = lazy(() => import("./components/landing.js"));
const Articles = lazy(() => import("./components/articles.js"));
const Spikes = lazy(() => import("./components/spikes.js"));
const Gallery = lazy(() => import("./components/gallery.js"));
const Features = lazy(() => import("./components/features.js"));
const Testimonials = lazy(() => import("./components/testimonials.js"));
const Team = lazy(() => import("./components/team.js"));
const Services = lazy(() => import("./components/services.js"));
const Skills = lazy(() => import("./components/skills.js"));
const WorkSteps = lazy(() => import("./components/workSteps.js"));
const Events = lazy(() => import("./components/events.js"));
const Pricing = lazy(() => import("./components/pricing.js"));
const Videos = lazy(() => import("./components/videos.js"));
const Stats = lazy(() => import("./components/stats.js"));
const Discount = lazy(() => import("./components/discount.js"));
const Footer = lazy(() => import("./components/footer.js"));

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Articles />
      <Spikes />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <Spikes />
      <Services />
      <Skills />
      <WorkSteps />
      <Events />
      <Pricing />
      <Videos />
      <Stats />
      <Discount />
      <Footer />
    </>
  );
}
export default App;
