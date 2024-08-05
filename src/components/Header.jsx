import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="snap-y flex flex-auto items-center justify-center p-5">
            <div className='flex flex-row flex-auto items-center justify-center text-center gap-2 bg-zinc-900 rounded-lg h-14 max-w-40 snap-center'>
                <h1 className="snap-center text-l flex items-center justify-center flex-col p-2 font-bold text-white bg-zinc-800 rounded-md cursor-pointer hover:bg-zinc-800 hover:text-white/50"><Link to="/">Home</Link></h1>
                <h1 className="snap-center text-l flex items-center justify-center flex-col p-2 font-bold text-white rounded-md cursor-pointer hover:bg-zinc-800 hover:text-white/50"><Link to="/projects">Projects</Link></h1>
            </div>
        </div>
    )
}

export default Header