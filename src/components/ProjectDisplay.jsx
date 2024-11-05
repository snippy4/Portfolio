import React from "react";
import { Link } from "react-router-dom";
import portfolio_site from "/assets/Portfolio_site.png"
import github from "/assets/github_.png"
import link from "/assets/link_.png"
import Bard from "/assets/Bard.png"
import minigames from "/assets/minigames.png"
import Wizard from "/assets/wizard.png"

function ProjectDisplay(){
    return(
        <div className="snap-y flex flex-auto items-center justify-center p-5">
            <div className='grid grid-cols-1 md:grid-rows-auto gap-2 lg:gap-10 md:max-h-2xl p-5 md:max-w-7xl md:max-h-screen lg:grid-cols-2 grid-rows-auto'>
                
            <div className="animate-smooth_top">
                    <img className="rounded-xl border border-zinc-700 size-full object-cover" src={Wizard}></img>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_left2 border border-zinc-700">
                    <h className="text-white font-semibold text-4xl p-2">Wizard Room</h>
                    <p className="text-slate-400 p-2 text-xl">
                        This project was originally started with the intention of making a full game where you play as a wizard in a 2d side scroller. Due to time constraints it has been left as 
                        a proof of concept engine which could easily be expanded upon. In this version you can still explore the wizard's room and interract with mysterious objects whilst time passes.
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
                
                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_left2 border border-zinc-700 col-span-2">
                    <h className="text-white font-semibold text-4xl p-2">Parallel K-Nearest Neighbours</h>
                    <p className="text-slate-400 p-2 text-xl">
                        An implementation of the K-Nearest Neighbours algorithm designed to scale efficently being ran on multiple cores. Currently a private project in order to prevent 
                        plagiarism on the assignment. This program was tested on Barkla, the University of Liverpool's high performance computing cluster.
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

                <div className="animate-smooth_left">
                    <img className="rounded-xl border border-zinc-700 size-full object-cover" src={portfolio_site}></img>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_top border border-zinc-700">
                    <h className="text-white font-semibold text-4xl p-2">Portfolio site</h>
                    <p className="text-slate-400 p-2 text-xl">
                        This is my portfolio website, the one you are viewing right now. I worked on this project to help me show off my work and what I am able to produce. It contains some interesting information about me and about what I have worked on.
                    </p>
                    <div className="grid grid-cols-4 lg:grid-cols-6 grid-rows-auto max-h-full p-2">
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">React</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">HTML</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">CSS</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Javascript</h>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-auto max-h-full p-1">
                        <a href="https://github.com/snippy4/Portfolio">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75" src={github}></img>
                        </a>
                        <a href="https://thomascparsons.tech">
                            <img className=" hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75" src={link}></img>
                        </a>
                        
                    </div>
                </div>
                    

                <div className="animate-smooth_top">
                    <img className="rounded-xl border border-zinc-700 size-full object-fill max-h-60" src={Bard}></img>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_left2 border border-zinc-700">
                    <h className="text-white font-semibold text-4xl p-2">Bard bot</h>
                    <p className="text-slate-400 p-2 text-xl">
                        This is a discord bot that I created for a private server with my friends. This bot will use RiotAPI to track each of my friends rank on league of legends, as well as a few interesting stats about their games, and post these in the form of an ordered leaderboard.
                    </p>
                    <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-auto max-h-full p-2">
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">Python</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">RiotAPI</h>
                        <h className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg">DiscordAPI</h>
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