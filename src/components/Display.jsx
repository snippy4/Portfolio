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


function Display(){
    return(
        <div className="p-10 overflow-hidden 2xl:overflow-visible flex flex-auto justify-center">
            <div className='grid grid-cols-1 lg:grid-rows-7 lg:gap-5 gap-2 p-5 lg:max-w-7xl lg:max-h-screen lg:grid-cols-3 grid-rows-auto'>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-2 flex flex-col relative lg:row-span-2 animate-smooth_left">
                    <h className="text-white font-semibold text-4xl p-2">My Introduction</h>
                    <p className="text-slate-400 p-2 text-xl">
                        Hi! I'm Thomas, a computer science student and developer. Welcome to my portfolio website where you can find a summary of what I do and what I have worked on. 
                        I first started to learn programming in high school and have been hooked on computer sceince since. My main interests are in algorithms, HPC, and I enjoy working on games in my free time. 
                        I also enjoy playing TCGs as a hobby!
                    </p>
                </div>
                <div className="lg:row-span-4 row-span-2 animate-smooth_top">
                    <img src={lake_img} className="rounded-2xl object-cover size-full"></img>
                </div>

                <div className="bg-violet-300 p-3 rounded-2xl col-span-2 lg:col-span-1 flex flex-col relative lg:row-span-2 animate-smooth_left2">
                    <h className="text-black font-semibold text-6xl p-2">Computer Science Student</h>
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
                        <h1 className="text-white font-semibold text-4xl p-2 flex flex-col">Education</h1>
                        <h className="text-white font-semibold text-xl p-2 flex flex-col">University</h>
                        <p className="text-slate-400 text-l p-2 flex flex-col">I am currently studying a MEng in Computer Science at University of Liverpool. I am on my fourth year of study and set to graduate in 
                            May 2025 with a 2:1 or higher.</p>
                        <h className="text-white font-semibold text-xl p-2 flex flex-col">A levels</h>
                        <p className="text-slate-400 text-l p-2 flex flex-col">Maths - A* <br/> Further Maths - A <br/> Computer Science - A <br/> Economics - B <br/> I studied my A levels from 2019-2021</p>
                    </div>
                </div>

                <div className="bg-violet-300 p-3 rounded-2xl col-span-2 lg:col-span-1 flex flex-col relative animate-smooth_right2">
                    <h className="text-black font-semibold text-l p-2">"If you want to know why the tree is growing upside down, ask the computer scienctists who introduced the convention"</h>
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
                        <div className="group/html">
                            <h className="text-xs lg:text-lg text-black font-semibold flex justify-center invisible group-hover/html:visible border rounded-xl bg-white transition scale-0 group-hover/html:scale-100">HTML</h>
                            <img className="p-2 group-hover/html:scale-110 group-hover/html:brightness-110 transition" src={html}/>
                        </div>
                        <div className="group/css">
                            <h className="text-xs lg:text-lg text-black font-semibold flex justify-center invisible group-hover/css:visible border rounded-xl bg-white transition scale-0 group-hover/css:scale-100">CSS</h>
                            <img className="p-2 group-hover/css:scale-110 group-hover/css:brightness-110 transition" src={css}/>
                        </div>
                        <div className="group/c">
                            <h className="text-xs lg:text-lg text-black font-semibold flex justify-center invisible group-hover/c:visible border rounded-xl bg-white transition scale-0 group-hover/c:scale-100">c</h>
                            <img className="p-2 group-hover/c:scale-110 group-hover/c:brightness-110 transition" src={c}/>
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