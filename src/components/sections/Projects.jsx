import {RevealOnScroll} from "../RevealOnScroll.jsx";
import { Link } from 'react-router-dom';

export const Projects = ()=>{
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-400
                bg-clip-text text-transparent text-center">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div
                        className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">EDG Medical</h3>
                        <p className="text-gray-400 mb-4 text-sm sm:text-base">A patient/doctor management web application with real time
                            reservation system,
                            and patient file management.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Spring Security", "Spring Web"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <Link to="/medical" className="text-blue-400 hover:text-blue-300 transition-colors my-2 sm:my-4 text-sm sm:text-base">View
                                project ➡️</Link>
                        </div>
                    </div>
                    <div
                        className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">EDG Chatroom</h3>
                        <p className="text-gray-400 mb-4 text-sm sm:text-base">A real-time chat application with room management, private messaging, and user authentication. Features include room creation, access control, and instant messaging.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Flask", "MySQL", "TailwindCSS", "WebSocket"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <Link to="/chatroom" className="text-blue-400 hover:text-blue-300 transition-colors my-2 sm:my-4 text-sm sm:text-base">View
                                project ➡️</Link>
                        </div>
                    </div>
                    <div
                        className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">EDG Store</h3>
                        <p className="text-gray-400 mb-4 text-sm sm:text-base">An e-commerce platform with inventory management, shopping cart functionality, and order processing capabilities.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Jakarta EE", "HTML", "Bootstrap"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <Link to="/store" className="text-blue-400 hover:text-blue-300 transition-colors my-2 sm:my-4 text-sm sm:text-base">View
                                project ➡️</Link>
                        </div>
                    </div>
                    <div
                        className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">EDG Management App</h3>
                        <p className="text-gray-400 mb-4 text-sm sm:text-base">A comprehensive business management solution with analytics, resource tracking, and reporting tools.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["C#", "SQL Server"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <Link to="/management" className="text-blue-400 hover:text-blue-300 transition-colors my-2 sm:my-4 text-sm sm:text-base">View
                                project ➡️</Link>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
            {/*/!* Technology Stack *!/*/}
            {/*<div className="mb-20">*/}
            {/*    <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white relative overflow-hidden">*/}
            {/*        /!* Background Pattern *!/*/}
            {/*        <div className="absolute inset-0 opacity-10">*/}
            {/*            <div className="absolute top-0 left-1/4 w-64 h-64 border border-white rounded-full"></div>*/}
            {/*            <div className="absolute bottom-0 right-1/4 w-48 h-48 border border-white rounded-full"></div>*/}
            {/*        </div>*/}

            {/*        <div className="relative z-10 text-center">*/}
            {/*            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/30">*/}
            {/*                <CodeBracketIcon className="w-5 h-5 text-white" />*/}
            {/*                <span className="text-white font-semibold">Technology Stack</span>*/}
            {/*            </div>*/}
            {/*            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Built with Modern Technology</h3>*/}
            {/*            <p className="text-cyan-100 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">*/}
            {/*                Our platform leverages cutting-edge technologies to ensure reliability, security, and scalability*/}
            {/*                for thousands of concurrent users.*/}
            {/*            </p>*/}
            {/*            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">*/}
            {/*                {[*/}
            {/*                    { title: "Frontend", tech: "React, Tailwind CSS", icon: "🎨" },*/}
            {/*                    { title: "Backend", tech: "Spring Boot, Java", icon: "⚙️" },*/}
            {/*                    { title: "Database", tech: "MySQL", icon: "🗄️" },*/}
            {/*                    { title: "Security", tech: "JWT, Spring Security", icon: "🔒" }*/}
            {/*                ].map((item, index) => (*/}
            {/*                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 group cursor-pointer">*/}
            {/*                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>*/}
            {/*                        <h4 className="font-bold mb-2 text-lg">{item.title}</h4>*/}
            {/*                        <p className="text-sm text-cyan-100">{item.tech}</p>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </section>
    )
}