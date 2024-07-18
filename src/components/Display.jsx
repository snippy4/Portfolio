import React from "react";
import { Link } from "react-router-dom";
import lake_img from "/assets/lake_img.jpg"
import linkedin from "/assets/linkedin_.png"
import github from "/assets/github_.png"
import email from "/assets/email_.png"


function Display(){
    return(
        <div className="p-10 overflow-hidden 2xl:overflow-visible flex flex-auto justify-center">
            <div className='grid grid-cols-3 grid-rows-7 gap-5 max-h-2xl p-5 max-w-7xl max-h-screen'>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-2 flex flex-col max-h-60 relative row-span-2">
                    <h className="text-white font-semibold text-4xl p-2">My Introduction</h>
                    <p className="text-slate-400 p-2 text-xl">
                        this is a breif introduction to who i am and a lot about me as a person if you are wondering what that looks like read right along
                    </p>
                </div>
                <div className="row-span-4">
                    <img src={lake_img} className="rounded-2xl object-cover size-full"></img>
                </div>

                <div className="bg-violet-300 p-3 rounded-2xl col-span-1 flex flex-col relative row-span-2">
                    <h className="text-black font-semibold text-4xl p-2">Computer Science Student & Hobbyist Programmer</h>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-1 row-span-2 flex flex-col relative row-span-3">
                    <h className="text-white font-semibold text-4xl p-2">Thomas Parsons</h>
                    <div className="grid grid-cols-3 grid-rows-auto max-h-full">
                        <a className="p-2" href="https://www.linkedin.com/in/thomas-parsons-6b6964225/">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-110" src = {linkedin}></img> 
                        </a>
                        <a className="p-2" href="https://github.com/snippy4">
                            <img className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-110" src = {github}></img> 
                        </a>
                        <a className="p-2" href="mailto:thomascparsons@gmail.com">
                            <img className="rounded-xl hover:brightness-150 hover:drop-shadow-xl hover:scale-110" src = {email}></img> 
                        </a>
                    </div>
                    
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-1 flex flex-col relative row-span-3">
                    <h1 className="text-white font-semibold text-4xl p-2">Education</h1>
                    <h className="text-white font-semibold text-xl p-2">University</h>
                    <p className="text-slate-400 text-l p-2">I am currently studying a MEng in Computer Science at University of Liverpool. I am on my fourth year of study and set to graduate in 2025</p>
                    <h className="text-white font-semibold text-xl p-2">A levels</h>
                    <p className="text-slate-400 text-l p-2">Maths - A* <br/> Further Maths - A <br/> Computer Science - A <br/> Economics - B <br/> I studied my A levels at Calday Grange Grammar School from 2019-2021</p>
                </div>

                <div className="bg-violet-300 p-3 rounded-2xl col-span-1 flex flex-col relative">
                    <h className="text-black font-semibold text-l p-2">"If you want to know why the tree is growing upside down, ask the computer scienctists who introduced the convention"</h>
                </div>

                <div className="bg-zinc-800 p-3 rounded-2xl col-span-2 row-span-2 flex flex-col relative">
                    <h className="text-white font-semibold text-4xl p-2">Technologys</h>
                </div>

            </div>
        </div>
    )
}

export default Display