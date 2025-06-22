import {useEffect} from "react";

export const Navbar = ({menuOpen,setMenuOpen}) => {

    useEffect(()=>{
        document.body.style.overflowY = menuOpen ? 'hidden' : '';
    })

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,08)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-lg sm:text-xl font-bold text-white">
                    Dev<span className="text-blue-500">.EDG</span></a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center text-white text-2xl" onClick={() => setMenuOpen(prev => !prev)} >
                    &#9776;
                </div>
                <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Contact</a>
                </div>
            </div>
        </div>
    </nav>
}