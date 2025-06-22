import {RevealOnScroll} from "../RevealOnScroll.jsx";

export const About = () => {
    const frontEndSkills=["React","Javascript","CSS","BootStrap","TailwindCSS"];
    const backEndSkills=["Java","SpringBoot","JakartaEE","Python","Laravel"];
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">About Me</h2>
                <div className="rounded-xl p-4 sm:p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 text-sm sm:text-base">lorem</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Front End</h3>
                            <div className="flex flex-wrap gap-2">{frontEndSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech} </span>
                            ))}</div>
                        </div>
                        <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Back End</h3>
                            <div className="flex flex-wrap gap-2">{backEndSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs sm:text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech} </span>
                            ))}</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                    <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
                            <li>
                                <strong>B.Lit. in English</strong>-Abdelmalek Essaâdi University(2019-2023)
                            </li>
                            <li>
                                Relevant CourseWork: Web Development,Data Structuring, Spring Security....
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 sm:p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">💼 Work Experience</h3>
                        <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                            <div>
                                <h4 className="font-semibold">Software Engineer at ABC Corp</h4>
                                <p>Developed and maintained microservices for cloud-based applications.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                                <p>Assisted in building front-end components and integration Rest.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}