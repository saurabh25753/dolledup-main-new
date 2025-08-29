const ServiceCard = ({ service, index }) => {
  const gridClasses = [
    "col-span-5 row-span-4",
    "col-span-4 row-span-4 row-start-3 col-start-5", 
    "col-span-5 row-span-4 col-start-8",
    "col-span-4 row-span-4 row-start-5 col-start-2",
    "col-span-4 row-span-4 row-start-5 col-start-6",
    "col-span-3 row-span-4 row-start-5 col-start-10"
  ];

  return (
    <>
    <div className={`relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 hover:border-pink-500/30 hover:z-10 ${gridClasses[index] || 'col-span-4 row-span-4'}`}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40 transition-opacity duration-400 hover:opacity-90"
        style={{ backgroundImage: `url("${"https://images.unsplash.com/photo-1737515031439-2998a5bfcb6f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")` }}
      />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-white/80 text-sm font-light mb-6 leading-relaxed">{service.description}</p>
        <a href="#" className="text-pink-500 text-sm font-medium inline-flex items-center transition-all duration-300 hover:text-white group">
          Learn more
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
    <div className={`relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 hover:border-pink-500/30 hover:z-10 ${gridClasses[index] || 'col-span-4 row-span-4'}`}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40 transition-opacity duration-400 hover:opacity-90"
        style={{ backgroundImage: `url("${"https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")` }}
      />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-white text-xl font-semibold mb-2">Skincare Treatments</h3>
        <p className="text-white/80 text-sm font-light mb-6 leading-relaxed"> Luxurious facials and treatments to rejuvenate your skin.</p>
        <a href="#" className="text-pink-500 text-sm font-medium inline-flex items-center transition-all duration-300 hover:text-white group">
          Learn more
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
    <div className={`relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 hover:border-pink-500/30 hover:z-10 ${gridClasses[index] || 'col-span-4 row-span-4'}`}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40 transition-opacity duration-400 hover:opacity-90"
        style={{ backgroundImage: `url("${"https://images.unsplash.com/photo-1481068164146-e8beb686f4d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")` }}
      />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-white text-xl font-semibold mb-2">Hair Styling</h3>
        <p className="text-white/80 text-sm font-light mb-6 leading-relaxed">Elegant updos, blowouts, and styling for any occasion.</p>
        <a href="#" className="text-pink-500 text-sm font-medium inline-flex items-center transition-all duration-300 hover:text-white group">
          Learn more
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
    <div className={`relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 hover:border-pink-500/30 hover:z-10 ${gridClasses[index] || 'col-span-4 row-span-4'}`}>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40 transition-opacity duration-400 hover:opacity-90"
        style={{ backgroundImage: `url("${"https://images.unsplash.com/photo-1714381107967-fec1f4adfaa2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")` }}
      />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-white text-xl font-semibold mb-2">Makeup Lessons</h3>
        <p className="text-white/80 text-sm font-light mb-6 leading-relaxed"> Personalized instruction to master your perfect everyday look.</p>
        <a href="#" className="text-pink-500 text-sm font-medium inline-flex items-center transition-all duration-300 hover:text-white group">
          Learn more
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
    </>
  );
};
export default ServiceCard