import Contact from "./Homepage/Contact";
import Digital from "./Homepage/Digital";
import ExclusieClubs from "./Homepage/ExclusiveClubs";
import Header from "./Homepage/Header";
import LuxurySuites from "./Homepage/LuxurySuites";
import Section1 from "./Homepage/Section1";

export default function Home() {
  return (
    <div>
      <Header />
      <Section1/>
      <Digital />
      <LuxurySuites />
      <ExclusieClubs />
      <Contact />
    </div>
  );
}
