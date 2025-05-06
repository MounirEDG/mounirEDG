import {RevealOnScroll} from "../RevealOnScroll.jsx";
import emailjs from 'emailjs-com'
import {useState} from "react";
export const Contact=()=>{

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
    const SERVICE_ID="service_0wh8isd";
    const TEMPLATE_ID="template_vbp85kk";
    const PUBLIC_KEY="euMphcFnXMjYSC-JZ";

    const handleSubmit=e=>{
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then(()=>{
            alert("Message successfully sent!");
            setFormData({name:"",email:"",message:""});
        }).catch(()=>alert("Something went wrong!Please try again"));
    }

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400
                bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" onChange={(e)=>setFormData({...formData,name: e.target.value})} value={formData.name} placeholder="Name..." name="name" required className="w-full bg-white/5 border-white/10
                            rounded px-4 py-3 border text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>
                        <div className="relative">
                            <input type="email" id="email" onChange={(e)=>setFormData({...formData,email: e.target.value})} value={formData.email} placeholder="example@gmail.com" name="email" required
                                   className="w-full bg-white/5 border-white/10
                            rounded px-4 py-3 border text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>
                        <div className="relative">
                            <textarea id="message" onChange={(e)=>setFormData({...formData,message: e.target.value})} value={formData.message} placeholder="Your Message" name="message" rows={5} required
                                   className="w-full bg-white/5 border-white/10
                            rounded px-4 py-3 border text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium
                        transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,4)]">Send Message</button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}