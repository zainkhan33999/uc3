"use client"
import Image from "next/image";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import NewsEvents from "./components/NewsEvents";
import Team from "./components/Team";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Projects from "./components/Projects";
import Loader from "./loading";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-white">
      <Navbar id="navbar" />
      <Main id="main" />
      <About id="about" />
      <NewsEvents id="news" />
      <Services id="services" />
      <Projects id="projects"/>
      <Team id="team"/>
      <Reviews id="reviews" />
      <Contact id="contact" />
      <Footer id="footer" />
    </div>
  );
}