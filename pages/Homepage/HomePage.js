import React from 'react'
import Contact from "./Contact";
import Digital from "./Digital";
import ExclusieClubs from "./ExclusiveClubs";
import Header from "./Header";
import LuxurySuites from "./LuxurySuites";
import Section1 from "./Section1";


const HomePage = () => {
  return (
    <div className='sm:-mr-96'>
      <Header />
      <Section1 />
      <Digital />
      <LuxurySuites />
      <ExclusieClubs />
      <Contact />
    </div>
  );
}

export default HomePage