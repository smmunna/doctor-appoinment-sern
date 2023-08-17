import React from "react";
import { Helmet } from "react-helmet-async";
import Appoinment from "./Appoinment";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Doctor Appoinment</title>
      </Helmet>
      <Appoinment/>
    </div>
  );
}

export default Home;
