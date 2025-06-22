import {RevealOnScroll} from "../RevealOnScroll.jsx";
import emailjs from 'emailjs-com'
import {useState} from "react";

const CustomAlert = ({ message, type, onClose }) => {
    return (
        <div
            className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-[100] transform transition-all duration-300 ease-in-out
            ${type === 'success' ? 'bg-green-500/90' : 'bg-red-500/90'}
            backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 max-w-xs sm:max-w-sm`}
        >
            <span className="text-lg">{type === 'success' ? '✓' : '⚠'}</span>
            <p className="text-sm sm:text-base break-words">{message}</p>
            <button
                onClick={onClose}
                className="ml-4 text-xl hover:text-gray-200 transition-colors"
            >
                ×
            </button>
        </div>
    );
};

export const Contact=()=>{
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    });
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });
    const SERVICE_ID="service_0wh8isd";
    const TEMPLATE_ID="template_vbp85kk";
    const PUBLIC_KEY="euMphcFnXMjYSC-JZ";

    const handleSubmit=e=>{
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then(()=>{
            setAlert({
                show: true,
                message: "Message successfully sent!",
                type: 'success'
            });
            setFormData({name:"",email:"",message:""});
            setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000);
        }).catch(() => {
            setAlert({
                show: true,
                message: "Something went wrong! Please try again.",
                type: 'error'
            });
            setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000);
        });
    }

    return(
        <section id="contact" className="min-h-screen items-center justify-center py-12 sm:py-20 px-4 sm:px-6 relative">
            {alert.show && (
                <CustomAlert 
                    message={alert.message} 
                    type={alert.type} 
                    onClose={() => setAlert({ show: false, message: '', type: '' })}
                />
            )}
            <RevealOnScroll>
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-400
                    bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" onChange={(e)=>setFormData({...formData,name: e.target.value})} value={formData.name} placeholder="Name..." name="name" required 
                                className="w-full bg-white/5 border-white/10 rounded px-3 sm:px-6 py-2.5 sm:py-4 border text-white text-sm sm:text-base md:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>
                        <div className="relative">
                            <input type="email" id="email" onChange={(e)=>setFormData({...formData,email: e.target.value})} value={formData.email} placeholder="example@gmail.com" name="email" required
                                className="w-full bg-white/5 border-white/10 rounded px-3 sm:px-6 py-2.5 sm:py-4 border text-white text-sm sm:text-base md:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>
                        <div className="relative">
                            <textarea id="message" onChange={(e)=>setFormData({...formData,message: e.target.value})} value={formData.message} placeholder="Your Message" name="message" rows={5} required
                                className="w-full bg-white/5 border-white/10 rounded px-3 sm:px-6 py-2.5 sm:py-4 border text-white text-sm sm:text-base md:text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2.5 sm:py-4 px-6 rounded font-medium text-sm sm:text-base md:text-lg
                        transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,4)]">Send Message</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}