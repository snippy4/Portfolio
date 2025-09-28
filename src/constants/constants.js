import portfolio_site from "/assets/Portfolio_site.png";
import Bard from "/assets/Bard.png";
import minigames from "/assets/minigames.png";
import Wizard from "/assets/wizard.png";
import Knn from "/assets/KNN.png";
import utils from "/assets/utils.png";
import proximity from "/assets/proximity.png";

export const PROJECTS = [
  {
    id: 1,
    image: proximity,
    title: "Yu-Gi-Oh Proximity",
    description:
      "A Yu-Gi-Oh card guessing game where you guess the hidden card based on how frequently your previous guesses have been played with the hidden card.",
    technologies: ["Go", "Python", "HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/snippy4/YGO-Proximity-Guesser",
    animationClass: "animate-smooth_right2",
  },
  {
    id: 2,
    image: Wizard,
    title: "Wizard Game",
    description:
      "This project was originally started with the intention of making a full game where you play as a wizard in a 2d side scroller story and quest based game. Due to time constraints it has been left as a proof of concept engine that I'll be expanding upon when I can. In this version you can still explore the wizard's room and interact with mysterious objects whilst time passes.",
    technologies: ["Python", "Pygame"],
    githubUrl: "https://github.com/snippy4/Wizard-game",
    animationClass: "animate-smooth_left2",
  },
  {
    id: 3,
    image: Knn,
    title: "Optimised K-Nearest Neighbours",
    description:
      "An implementation of the K-Nearest Neighbours algorithm designed to scale efficently being ran on multiple cores. Currently a private repo in order to prevent plagiarism on the assignment, but can provide further details upon request. This program was tested on Barkla, the University of Liverpool's high performance computing cluster. This implementation went from running in 70 seconds sequantially to under 5 seconds in parallel on 40 cores.",
    technologies: ["C", "OpenMP", "Slurm", "HPC Cluster"],
    githubUrl: "https://github.com/snippy4/KNN-in-openmp",
    animationClass: "animate-smooth_right2",
  },
  {
    id: 4,
    image: utils,
    title: "CLI Utils in Go",
    description:
      "A set of utility commands and scripts designed to be used in the command line. Written for both Windows and Linux machines, this project achieves a mix of both porting existing Unix commands over to windows command line such as ls, mv, cp, head, diff, and introducing commands that I have wanted to exist but didnt such as jmp - a tool for saving and instantly jumping to different directories that you visit frequently, saving the time of navigating between them in your terminal, and diffc - diff but it outputs the accurate number of lines that differ instead.",
    technologies: ["Go"],
    githubUrl: "https://github.com/snippy4/Bard",
    animationClass: "animate-smooth_left2",
  },
];
