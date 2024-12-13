import Contact from "./components/cta";
import Header from "./components/header";
import Hero from "./components/hero";
import Procedures from "./components/procedures";
import Professional from "./components/professional";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Procedures />
      <Professional />
      <Contact />
    </div>
  )
}