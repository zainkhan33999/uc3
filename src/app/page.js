import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import NewsEvents from "./components/NewsEvents";
import Team from "./components/Team";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
export default function Home() {
  return (
    <div className="bg-white">
      <h1>
        <Header/>
        <Navbar/>
        <Main/>
        <About/>
        <NewsEvents/>
        <Team/>
        <Services/>
        <Reviews/>
      </h1>
    </div>
  );
}
