import Image from "next/image";
import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Benefits from "./sections/Benefits";
import Activities from "./sections/Activities";

export default function Home() {
  return (
    <main>
      <Nav></Nav>
      <Header></Header>
      <Benefits/>
      <Activities/>
    </main>
  )
}
