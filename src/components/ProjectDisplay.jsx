import React from "react";
import { Link } from "react-router-dom";
import portfolio_site from "/assets/Portfolio_site.png"
import github from "/assets/github_.png"
import link from "/assets/link_.png"
import Bard from "/assets/Bard.png"

function ProjectDisplay(){
    return(
        <div className="snap-y flex flex-auto items-center justify-center p-5">
            <div className='grid grid-cols-1 md:grid-rows-auto gap-10 md:max-h-2xl p-5 md:max-w-7xl md:max-h-screen lg:grid-cols-2 grid-rows-auto'>
                <div className="animate-smooth_left">
                    <img className="rounded-xl border border-zinc-700 size-full object-cover" src={portfolio_site}></img>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_top border border-zinc-700">
                    <h className="text-white font-semibold text-4xl p-2">Portfolio site</h>
                    <p className="text-slate-400 p-2 text-xl">
                        This is my portfolio website, the one you are viewing right now. I worked on this project to help me show off my work and what I am able to produce. The final product is a three page website showing who I am and what I have worked on.
                    </p>
                    <div className="grid grid-cols-6 grid-rows-auto max-h-full p-2">
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
                    
                <div className="animate-smooth_left2">
                    <img className="rounded-xl border border-zinc-700 size-full object-fill max-h-60" src={Bard}></img>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl flex flex-col relative animate-smooth_top border border-zinc-700">
                    <h className="text-white font-semibold text-4xl p-2">Bard bot</h>
                    <p className="text-slate-400 p-2 text-xl">
                        This is a discord bot that I created for a private server with my friends. This bot will use RiotAPI to track each of my friends rank on league of legends, as well as a few interesting stats about their games, and post these in the form of an ordered leaderboard.
                    </p>
                    <div className="grid grid-cols-6 grid-rows-auto max-h-full p-2">
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