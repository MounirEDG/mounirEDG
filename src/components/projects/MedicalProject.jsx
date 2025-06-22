import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { useNavigate } from 'react-router-dom';

const TechStack = ({ techs }) => (
    <div className="flex flex-wrap gap-3">
        {techs.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
        ))}
    </div>
);

const ImageCard = ({ image }) => (
    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300">
        <div className="h-64 bg-gray-800/50 flex items-center justify-center overflow-hidden">
            <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{image.title}</h3>
            <p className="text-gray-400">{image.description}</p>
        </div>
    </div>
);

export const MedicalProject = () => {
    const navigate = useNavigate();

    const technologies = [
        { icon: "⚛️", name: "React" },
        { icon: "🔒", name: "Spring Security" },
        { icon: "🌱", name: "Spring Boot" },
        { icon: "🎨", name: "TailwindCSS" },
        { icon: "🗄️", name: "MySQL" }
    ];

    const images = [
        {
            title: "Analytics Dashboard",
            description: "Visualize key metrics and generate real-time insights from medical data.",
            src: "/images/Medical/Screenshot 2025-06-22 151130.png"
        },
        {
            title: "Dashboard",
            description: "Unified interface for tracking patient status, activities, and trends.",
            src: "/images/Medical/Screenshot 2025-06-22 150421.png"
        },
        {
            title: "Manage Patients",
            description: "Streamlined access to individual profiles, prescriptions, and treatment history.",
            src: "/images/Medical/Screenshot 2025-06-22 150734.png"
        },
        {
            title: "Patient Dashboard",
            description: "Consolidated view of medical notes, visits, and patient interactions.",
            src: "/images/Medical/Screenshot 2025-06-22 150919.png"
        },
        {
            title: "Appointments Setting",
            description: "Easily schedule and manage appointments by service type and physician.",
            src: "/images/Medical/Screenshot 2025-06-22 150907.png"
        },
        {
            title: "Admin Control",
            description: "Quick access to manage bookings, records, and administrative tasks.",
            src: "/images/Medical/Screenshot 2025-06-22 150935.png"
        },
    ];

    const features = [
        { icon: "📊", title: "Patient Management", description: "Organize and track patient details, visits, and care plans." },
        { icon: "🗓️", title: "Appointment System", description: "Book, modify, and view upcoming appointments with ease." },
        { icon: "📋", title: "Medical Records", description: "Maintain accurate records of diagnoses, treatments, and progress." },
        { icon: "👨‍⚕️", title: "Doctor Dashboard", description: "Centralized workspace for managing patient interactions and workflows." }
    ];


    return (
        <section className="min-h-screen bg-black py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                        <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                        <span>Back to Portfolio</span>
                    </button>
                </div>

                {/* Header */}
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                            MounirEDG Medical System
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A comprehensive medical management system for healthcare facilities,
                            featuring patient management, appointment scheduling, and medical records.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Tech Stack */}
                <RevealOnScroll>
                    <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-16">
                        <h2 className="text-2xl font-bold mb-8 text-center text-white">Technology Stack</h2>
                        <TechStack techs={technologies} />
                    </div>
                </RevealOnScroll>

                {/* Project Images */}
                <RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {images.map((image, index) => (
                            <ImageCard key={index} image={image} />
                        ))}
                    </div>
                </RevealOnScroll>

                {/* Features */}
                <RevealOnScroll>
                    <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                        <h2 className="text-2xl font-bold mb-8 text-center text-white">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                                    <span className="text-3xl mb-4 block">{feature.icon}</span>
                                    <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}; 