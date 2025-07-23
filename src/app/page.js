import Image from "next/image";
import Header from "./components/Header";
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

export default function Home() {
  return (
    <div className="bg-white">
      <h1>
        <Header id="header" />
        <Navbar id="navbar" />
        <Main id="main" />
        <About id="about" />
        <NewsEvents id="news-events" />
        <Team id="team" />
        <Services id="services" />
        <Reviews id="reviews" />
        <Contact id="contact" />
        <Footer id="footer" />
        <Copyright id="copyright" />
      </h1>
    </div>
  );
}