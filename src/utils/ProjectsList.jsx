import React from "react";
import {
  CovidProject,
  PortfolioProject,
  DocProject,
  SrcArduino,
  MulticodeProject,
  SrcPortfolio,
  SrcFacebook
} from "../assets/projects";
import ProjectImage from "../components/miscellaneous/ProjectImage";

const ProjectsList = [

  {
    name: "DocVantage",
    info: [
      "A collaborative document editor built with MERN stack,Socket IO, and Firebase.",
      "Supports multi editing on same document",
      "Future plans: Migrate project to NextJS",
    ],
    media: <ProjectImage src={DocProject} alt="DocProject" />,
    live: "https://calm-beignet-aca17d.netlify.app/",
    repo: "https://github.com/roy-sukrit/google-docs-clone",
  },
 
  {
    name: "Facebook Automation Bot",
    info: [
      "Built using python , selenium and beautiful soup",
      "Helps to schedule facebook posts to groups with custom media",
      "Website visits: 1 million +",
    ],
    media: <ProjectImage src={SrcFacebook} alt="Facebook Automation Project" />,
    live: "https://roysukrit78.medium.com/bulk-posting-on-facebook-groups-using-python-5bc0aa9dfe9a",
    repo: "https://github.com/roy-sukrit/Facebook-Group-Post-Automation-Selenium-Python",
  },
  {
    name: "Arduino LED Piano - Open Source",
    info: [
      "Arduino Project to light leds in MIDI signals , with 3 combinations of colors based on MIDI response.",
      "Supports multiple color responses , custom strip length",
    ],
    media: <ProjectImage src={SrcArduino} alt="Multicode" />,
    live: "https://www.youtube.com/playlist?list=PLtrXMAB5LEZnWBQtzA_rHqhdiVh9TICW2",
    repo: "https://github.com/roy-sukrit/Arduino-LED-Piano",
  },
  {
    name: "Portfolio Website",
    info: [
      "Built with React, framer motion and Chakra UI.",
      "Supports light and dark mode,",
      "Future plans: Migrate project to NextJS framework",
    ],
    media: <ProjectImage src={SrcPortfolio} alt="Portfolio" />,
    live: null,
    repo: "https://github.com/faraz16iqbal/portfolio-v1",
  },
];

export default ProjectsList;
