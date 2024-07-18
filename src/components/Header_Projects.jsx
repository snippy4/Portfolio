import React from "react";

function Header_Projects(){
    return(
        <div className="flex flec-col flex-auto items-center justify-center py-5">
            <div className='flex flex-row flex-auto items-center justify-center text-center gap-2 bg-zinc-900 rounded-lg h-14 max-w-60'>
                <h1 className="text-l flex items-center justify-center flex-col p-2 font-bold text-white rounded-md cursor-pointer"><a href="../index.html">Home</a></h1>
                <h1 className="text-l flex items-center justify-center flex-col p-2 font-bold text-white bg-zinc-800 rounded-md cursor-pointer hover:bg-zinc-800 hover:text-white/50"><a href="../Projects.html">Projects</a></h1>
                <h1 className="text-l flex items-center justify-center flex-col p-2 font-bold text-white rounded-md cursor-pointer hover:bg-zinc-800 hover:text-white/50">More</h1>
            </div>
        </div>
    )
}

export default Header_Projects