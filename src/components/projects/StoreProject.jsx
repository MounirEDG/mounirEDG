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

export const StoreProject = () => {
    const navigate = useNavigate();

    const technologies = [
        { icon: "☕", name: "Jakarta EE" },
        { icon: "🎨", name: "Bootstrap" },
        { icon: "🗄️", name: "MySQL" },
        { icon: "🌐", name: "HTML/CSS" }
    ];

    const images = [
        {
            title: "Store Front",
            description: "A sleek and modern interface for showcasing products and promotions.",
            src: "/images/Store/Screenshot 2025-06-22 164143.png"
        },
        {
            title: "Login Page",
            description: "Secure login interface designed for returning users and quick access.",
            src: "/images/Store/Screenshot 2025-06-22 164241.png"
        },
        {
            title: "Sign up Page",
            description: "User-friendly registration page for fast and simple onboarding.",
            src: "/images/Store/Screenshot 2025-06-22 164223.png"
        },
        {
            title: "New Products For Sale",
            description: "Showcase of recently added items with smart cart integration.",
            src: "/images/Store/Screenshot 2025-06-22 164226.png"
        }
    ];

    const features = [
        { icon: "🛍️", title: "Product Management", description: "Easily add, update, and categorize store products." },
        { icon: "🛒", title: "Shopping Cart", description: "Seamless cart experience with dynamic updates and checkout flow." },
        { icon: "📦", title: "Order Processing", description: "Track, fulfill, and manage customer orders in real time." },
        { icon: "📊", title: "Analytics Dashboard", description: "Gain insights into sales performance, trends, and customer behavior." }
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
                            MounirEDG Store Platform
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A full-featured e-commerce platform with modern shopping experience,
                            inventory management, and order processing capabilities.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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