import Image from "next/image";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Benefits from "./sections/Benefits";
import Activities from "./sections/Activities";
import Formular from "./sections/Formular";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main>
      <Nav/>
      <Header/>
      <Benefits/>
      <Activities/>
      <Formular/>
      <Footer/>
    </main>
  )
}
