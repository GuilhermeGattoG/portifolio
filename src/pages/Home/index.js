import React from "react";

import Personal from "../../components/template/Personal";
import Professional from "../../components/template/Professional";
import AboutPage from "../../components/template/AboutPage";
import Tecnologies from "../../components/template/Tecnologies";
import Footer from "../../components/organisms/Footer";
import NavBar from "../../components/organisms/NavBar";

function Home() {
  return (
      <>
        <Personal />
        <Professional />
        <AboutPage />
        <Tecnologies />
      </>
  );
}

export default Home;