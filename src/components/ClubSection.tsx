const ClubSection = () => {
  return (
    <section id="club" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[hsl(var(--famma-red))] rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-8 text-outline">
            CLUB FAMMA
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
            La experiencia de fiesta más intensa. Música, energía y diversión sin límites. 
            Únete a la familia FAMMA y vive noches inolvidables.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-[hsl(var(--card))] border border-[hsl(var(--famma-red))] rounded-lg hover:scale-105 transition-transform">
              <div className="text-5xl font-black text-[hsl(var(--famma-red))] mb-4">
                1000+
              </div>
              <p className="text-lg font-bold">Personas cada noche</p>
            </div>
            
            <div className="p-8 bg-[hsl(var(--card))] border border-[hsl(var(--famma-red))] rounded-lg hover:scale-105 transition-transform">
              <div className="text-5xl font-black text-[hsl(var(--famma-red))] mb-4">
                24/7
              </div>
              <p className="text-lg font-bold">Música y diversión</p>
            </div>
            
            <div className="p-8 bg-[hsl(var(--card))] border border-[hsl(var(--famma-red))] rounded-lg hover:scale-105 transition-transform">
              <div className="text-5xl font-black text-[hsl(var(--famma-red))] mb-4">
                TOP
              </div>
              <p className="text-lg font-bold">DJs internacionales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
