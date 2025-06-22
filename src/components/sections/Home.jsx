import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const Home = () => {
    return(
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">
        <RevealOnScroll>
        <div className="text-center z-10 w-full max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 p-4 sm:p-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent gradient-text leading-tight">
                Hi, My name is MounirEDG!
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto px-4">
                lorem
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-2.5 sm:py-3 px-6
                rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm sm:text-base">
                    View Projects</a>
                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-2.5 sm:py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 text-sm sm:text-base">
                    Contact Me</a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    )
}