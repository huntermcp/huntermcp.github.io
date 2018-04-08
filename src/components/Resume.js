import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import Profile from "../assets/Profile.js"

const schools = Profile.education

const Resume = () => (
  <section id="resume">
    <Education />
    <Work />
    <Skills />
  </section>
);

export default Resume;
