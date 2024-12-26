import React from "react";
import { Link } from "react-router-dom";
import portfolio_site from "/assets/Portfolio_site.png"
import github from "/assets/github_.png"
import link from "/assets/link_.png"
import Bard from "/assets/Bard.png"
import minigames from "/assets/minigames.png"
import Wizard from "/assets/wizard.png"
import Knn from "/assets/KNN.png"
import utils from "/assets/utils.png"
import proximity from "/assets/proximity.png"

function ProjectDisplay(){
    return(
        <div className="snap-y flex flex-auto items-center justify-center p-5">
           <div class="grid grid-cols-1 gap-4 p-5 md:grid-rows-auto md:max-w-7xl md:max-h-screen lg:grid-cols-2 lg:gap-10">

           <div className="animate-smooth_top">
                <img className="w-full h-auto rounded-xl border border-zinc-700 object-cover" src={proximity} alt="Proximity Image" />
            </div>

                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_right2 border border-zinc-700">
                    <h className="text-white font-semibold text-4xl p-2">Yu-Gi-Oh Proximity</h>
                    <p className="text-slate-400 p-2 text-xl">
                        A Yu-Gi-Oh card guessing game where you guess the hidden card based on how frequently your previous guesses have been
                        played with the hidden card.
                   </p>
                    <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-auto max-h-full p-2">
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Go</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Python</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">HTML</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">CSS</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Javascript</h>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-auto p-1">
                        <a href="https://github.com/snippy4/YGO-Proximity-Guesser">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75 max-h-60" src={github}></img>
                        </a>
                        <a href="https://ygoproximity.com/">
                            <img className=" hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75" src={link}></img>
                        </a>
                    </div>
                </div>

            <div className="animate-smooth_top">
                <img className="w-full h-auto rounded-xl border border-zinc-700 object-cover" src={Wizard} alt="Wizard Image" />
            </div>

                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_left2 border border-zinc-700">
                    <h className="text-white font-semibold text-4xl p-2">Wizard Game</h>
                    <p className="text-slate-400 p-2 text-xl">
                        This project was originally started with the intention of making a full game where you play as a wizard in a 2d side scroller story and quest based game. Due to time constraints it has been left as 
                        a proof of concept engine that I'll be expanding upon when I can. In this version you can still explore the wizard's room and interact with mysterious objects whilst time passes.
                    </p>
                    <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-auto max-h-full p-2">
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Python</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Pygame</h>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-auto p-1">
                        <a href="https://github.com/snippy4/Wizard-game">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75 max-h-60" src={github}></img>
                        </a>
                        
                    </div>
                </div>
                
                <div className="animate-smooth_top">
                <img className="w-full h-auto rounded-xl border border-zinc-700 object-cover" src={Knn} />
                </div>
                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_right2 border border-zinc-700 col-span-1">
                    <h className="text-white font-semibold text-4xl p-2">Parallel K-Nearest Neighbours</h>
                    <p className="text-slate-400 p-2 text-xl">
                        An implementation of the K-Nearest Neighbours algorithm designed to scale efficently being ran on multiple cores. Currently a private repo in order to prevent 
                        plagiarism on the assignment, but can provide further details upon request. This program was tested on Barkla, the University of Liverpool's high performance computing cluster. This implementation went from running in 70
                        seconds sequantially to under 5 seconds in parallel on 40 cores.
                    </p>
                    <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-auto max-h-full p-2">
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">C</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">OpenMP</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Slurm</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">HPC Cluster</h>

                    </div>
                    <div className="grid grid-cols-1 grid-rows-auto p-1">
                        <a href="https://github.com/snippy4/KNN-in-openmp">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75 max-h-60" src={github}></img>
                        </a>
                        
                    </div>
                </div> 

        
                <div className="animate-smooth_top">
                <img className="w-full h-auto rounded-xl border border-zinc-700 object-cover" src={utils} />
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_left2 border border-zinc-700">
                    <h className="text-white font-semibold text-4xl p-2">CLI Utils in Go</h>
                    <p className="text-slate-400 p-2 text-xl">
                        A set of utility commands and scripts designed to be used in the command line. Written for both Windows and Linux machines, this project achieves a mix of both porting
                        existing Unix commands over to windows command line such as ls, mv, cp, head, diff, and introducing commands that I have wanted to exist but didnt such as jmp - a tool
                        for saving and instantly jumping to different directories that you visit frequently, saving the time of navigating between them in your terminal, and diffc -  diff but 
                        it outputs the accurate number of lines that differ instead.
                    </p>
                    <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-auto max-h-full p-2">
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Go</h>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-auto p-1">
                        <a href="https://github.com/snippy4/Bard">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75 max-h-60" src={github}></img>
                        </a>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProjectDisplay