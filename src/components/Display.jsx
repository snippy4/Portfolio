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


function Display(){
    return(
        <div className="p-10 overflow-hidden 2xl:overflow-visible flex flex-auto justify-center">
            <div className='grid grid-cols-1 md:grid-rows-7 gap-5 md:max-h-2xl p-5 md:max-w-7xl md:max-h-screen md:grid-cols-3 grid-rows-auto'>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-2 flex flex-col max-h-60 relative row-span-2 animate-smooth_left">
                    <h className="text-white font-semibold text-4xl p-2">My Introduction</h>
                    <p className="text-slate-400 p-2 text-xl">
                        Hi! I'm Thomas, a computer science student and developer. Welcome to my portfolio website where you can find a summary of what I do and what I have worked on. I first started to learn programming when I was 16 and have been hooked on computer sceince since! Some of my other interests include: Maths, trading card games, and video games.
                    </p>
                </div>
                <div className="row-span-4 animate-smooth_top">
                    <img src={lake_img} className="rounded-2xl object-cover size-full"></img>
                </div>

                <div className="bg-violet-300 p-3 rounded-2xl col-span-1 flex flex-col relative row-span-2 animate-smooth_left2">
                    <h className="text-black font-semibold text-4xl p-2">Computer Science Student & Hobbyist Developer</h>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-1 row-span-2 flex flex-col relative row-span-3">
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

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-1 flex flex-col relative row-span-3 max-h-full animate-smooth_bottom">
                    <h1 className="text-white font-semibold text-4xl p-2">Education</h1>
                    <h className="text-white font-semibold text-xl p-2 flex flex-col">University</h>
                    <p className="text-slate-400 text-l p-2 flex flex-col">I am currently studying a MEng in Computer Science at University of Liverpool. I am on my fourth year of study and set to graduate in 2025</p>
                    <h className="text-white font-semibold text-xl p-2 flex flex-col">A levels</h>
                    <p className="text-slate-400 text-l p-2 flex flex-col">Maths - A* <br/> Further Maths - A <br/> Computer Science - A <br/> Economics - B <br/> I studied my A levels at Calday Grange Grammar School from 2019-2021</p>
                </div>

                <div className="bg-violet-300 p-3 rounded-2xl col-span-1 flex flex-col relative animate-smooth_right2">
                    <h className="text-black font-semibold text-l p-2">"If you want to know why the tree is growing upside down, ask the computer scienctists who introduced the convention"</h>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-2 row-span-2 flex flex-col relative animate-smooth_right">
                    <h className="text-white font-semibold text-4xl p-2">Technologies</h>
                    <div className="grid grid-cols-6 grid-rows-auto max-h-full">

                        <div className="group/python">
                            <h className="text-black font-semibold flex justify-center invisible group-hover/python:visible border rounded-xl bg-white transition scale-75 group-hover/python:scale-100">Python</h>
                            <img className="p-2 group-hover/python:scale-110 group-hover/python:brightness-110 transition" src={python}/>
                        </div> 
                        <div className="group/java">
                            <h className="text-black font-semibold flex justify-center invisible group-hover/java:visible border rounded-xl bg-white transition scale-75 group-hover/java:scale-100">Java</h>
                            <img className="p-2 group-hover/java:scale-110 group-hover/java:brightness-110 transition" src={java}/>
                        </div>       
                        <div className="group/html">
                            <h className="text-black font-semibold flex justify-center invisible group-hover/html:visible border rounded-xl bg-white transition scale-75 group-hover/html:scale-100">HTML</h>
                            <img className="p-2 group-hover/html:scale-110 group-hover/html:brightness-110 transition" src={html}/>
                        </div>
                        <div className="group/css">
                            <h className="text-black font-semibold flex justify-center invisible group-hover/css:visible border rounded-xl bg-white transition scale-75 group-hover/css:scale-100">CSS</h>
                            <img className="p-2 group-hover/css:scale-110 group-hover/css:brightness-110 transition" src={css}/>
                        </div>
                        <div className="group/javascript">
                            <h className="text-black font-semibold flex justify-center invisible group-hover/javascript:visible border rounded-xl bg-white transition scale-75 group-hover/javascript:scale-100">Javascript</h>
                            <img className="p-2 group-hover/javascript:scale-110 group-hover/javascript:brightness-110 transition" src={javascript}/>
                        </div>    
                        <div className="group/react">
                            <h className="text-black font-semibold flex justify-center invisible group-hover/react:visible border rounded-xl bg-white transition scale-0 group-hover/react:scale-100">React</h>
                            <img className="p-2 group-hover/react:scale-110 group-hover/react:brightness-110 transition" src={react}/>
                        </div>    

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Display