import React from "react";
import { Link } from "react-router-dom";
import lake_img from "/assets/lake_img.jpg"
import linkedin from "/assets/linkedin_.png"
import github from "/assets/github_.png"
import email from "/assets/email_.png"
import git from "/assets/git_.png"
import python from "/assets/python_.png"
import java from "/assets/java_.png"
import react from "/assets/react_.png"
import html from "/assets/html_.png"
import css from "/assets/css_.png"
import javascript from "/assets/javascript_.png"
import c from "/assets/c-program-icon.png"
import Cpp from "/assets/cpp.png"
import Go from "/assets/go.png"


function Display(){
    return(
        <div className="p-10 overflow-hidden 2xl:overflow-visible flex flex-auto justify-center">
            <div className='grid grid-cols-1 lg:grid-rows-7 lg:gap-5 gap-2 p-5 lg:max-w-7xl lg:grid-cols-3 grid-rows-auto'>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-2 flex flex-col relative lg:row-span-2 animate-smooth_left">
                    <h className="text-white font-semibold text-4xl p-2">My Introduction</h>
                    <p className="text-slate-400 p-2 text-xl">
                        I'm Thomas, a software engineer working at Amazon in ads. This is my personal site to show my personal projects and learn a bit more about me. I started programming when I was in high school and it has been a passion of mine since. 
                        Outside of computer science my main interests are playing TCGs, video games, and spending time with family and friends.
                    </p>
                </div>
                <div className="lg:row-span-4 row-span-2 animate-smooth_top">
                    <img src={lake_img} className="rounded-2xl object-cover size-full"></img>
                </div>

                <div className="bg-violet-300 p-3 rounded-2xl col-span-2 lg:col-span-1 flex flex-col relative lg:row-span-2 animate-smooth_left2">
                    <h className="text-black font-semibold text-6xl p-2">Software Engineer @ Amazon</h>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-1 flex flex-col relative row-span-1 lg:row-span-3 animate-smooth_center">
                    <h className="text-white font-semibold text-4xl p-2 flex flex-col">Thomas Parsons</h>
                    <div className="grid grid-cols-3 grid-rows-auto max-h-full">
                        <a className="p-2" href="https://www.linkedin.com/in/thomas-parsons-6b6964225/">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-110 transition" src = {linkedin}></img> 
                        </a>
                        <a className="p-2" href="https://github.com/snippy4">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-110 transition" src = {github}></img> 
                        </a>
                        <a className="p-2" href="mailto:thomascparsons@gmail.com">
                            <img className="rounded-xl hover:brightness-150 hover:drop-shadow-xl hover:scale-110 transition" src = {email}></img> 
                        </a>
                    </div>
                    
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-2 lg:col-span-1 flex flex-col relative lg:row-span-3 animate-smooth_bottom">
                    <div>
                        <h1 className="text-white font-semibold text-4xl p-2 flex flex-col">Experience and education</h1>
                        <h className="text-white font-semibold text-xl p-2 flex flex-col">Experience</h>
                        <p className="text-slate-400 text-l p-2 flex flex-col">Software Dev Engineer at Amazon - Aug 2025 to present</p>
                        <h className="text-white font-semibold text-xl p-2 flex flex-col">University</h>
                        <p className="text-slate-400 text-l p-2 flex flex-col">First class MEng in computer science from the university of Liverpool</p>
                    </div>
                </div>

                <div className="bg-violet-300 p-3 rounded-2xl col-span-2 lg:col-span-1 flex flex-col relative animate-smooth_right2">
                    <h className="text-black font-semibold text-l p-2">"If you want to know why the tree is growing upside down, ask the computer scientists who introduced the convention"</h>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-2 lg:row-span-2 flex flex-col relative animate-smooth_right">
                    <h className="text-white font-semibold text-4xl p-2">Technologies</h>
                    <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-auto max-h-full">

                        <div className="group/python">
                            <h className="text-xs lg:text-lg text-black font-semibold flex justify-center invisible group-hover/python:visible border rounded-xl bg-white transition scale-0 group-hover/python:scale-100">Python</h>
                            <img className="p-2 group-hover/python:scale-110 group-hover/python:brightness-110 transition" src={python}/>
                        </div> 
                        <div className="group/java">
                            <h className="text-xs lg:text-lg text-black font-semibold flex justify-center invisible group-hover/java:visible border rounded-xl bg-white transition scale-0 group-hover/java:scale-100">Java</h>
                            <img className="p-2 group-hover/java:scale-110 group-hover/java:brightness-110 transition" src={java}/>
                        </div>       
                        <div className="group/Go">
                            <h className="text-xs lg:text-lg text-black font-semibold flex justify-center invisible group-hover/Go:visible border rounded-xl bg-white transition scale-0 group-hover/Go:scale-100">Go</h>
                            <img className="p-2 scale-110 group-hover/Go:scale-125 group-hover/Go:brightness-110 transition" src={Go}/>
                        </div>
                        <div className="group/Cpp">
                            <h className="text-xs lg:text-lg text-black font-semibold flex justify-center invisible group-hover/Cpp:visible border rounded-xl bg-white transition scale-0 group-hover/Cpp:scale-100">C++</h>
                            <img className="p-2 group-hover/Cpp:scale-110 group-hover/Cpp:brightness-110 transition" src={Cpp}/>
                        </div>
                        <div className="group/c">
                            <h className="text-xs lg:text-lg text-black font-semibold flex justify-center invisible group-hover/c:visible border rounded-xl bg-white transition scale-0 group-hover/c:scale-100">javascript</h>
                            <img className="p-2 group-hover/c:scale-110 group-hover/c:brightness-110 transition" src={javascript}/>
                        </div>    
                        <div className="group/react">
                            <h className="text-black text-xs lg:text-lg font-semibold flex justify-center invisible group-hover/react:visible border rounded-xl bg-white transition scale-0 group-hover/react:scale-100">React</h>
                            <img className="p-2 group-hover/react:scale-110 group-hover/react:brightness-110 transition" src={react}/>
                        </div>    

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Display