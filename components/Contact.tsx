import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div>
            <h2 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 mb-8">
                LET&#39;S<br/>WORK<br/>TOGETHER
            </h2>
            <p className="text-xl text-gray-400 max-w-md mb-8">
                Have a project in mind? Let&#39;s create something extraordinary.
            </p>
            <div className="flex flex-col gap-4">
                <a href="mailto:sohammaid23@gmail.com" className="text-lg hover:text-accent transition-colors">sohammaid23@gmail.com</a>
                <span className="text-lg text-gray-500">Pune, Maharashtra</span>
            </div>
        </div>

        <div className="relative">
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/30 rounded-full blur-[60px] pointer-events-none" />

             <form className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative z-10 shadow-2xl">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                     <div className="flex flex-col gap-2">
                         <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">First Name</label>
                         <input type="text" className="bg-black/20 border-b border-white/10 p-3 text-white focus:outline-none focus:border-accent transition-colors rounded-t-lg" placeholder="Jane" />
                     </div>
                     <div className="flex flex-col gap-2">
                         <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Last Name</label>
                         <input type="text" className="bg-black/20 border-b border-white/10 p-3 text-white focus:outline-none focus:border-accent transition-colors rounded-t-lg" placeholder="Smith" />
                     </div>
                 </div>

                 <div className="flex flex-col gap-2 mb-8">
                     <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email</label>
                     <input type="email" className="bg-black/20 border-b border-white/10 p-3 text-white focus:outline-none focus:border-accent transition-colors rounded-t-lg" placeholder="jane@example.com" />
                 </div>

                 <div className="mb-8">
                     <label className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-4 block">Interest</label>
                     <div className="flex flex-wrap gap-3">
                         {['Website', 'Branding', '3D Design'].map(interest => (
                             <button key={interest} type="button" className="px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-all duration-300">
                                 {interest}
                             </button>
                         ))}
                     </div>
                 </div>

                 <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-accent transition-colors text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                     Send Message
                 </button>
             </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;