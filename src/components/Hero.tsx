import fammaLogo from "@/assets/famma-logo.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--famma-red))] rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--famma-red))] rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        {/* Particles effect */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[hsl(var(--famma-red))] rounded-full animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Logo overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <img 
            src={fammaLogo} 
            alt="FAMMA" 
            className="w-full max-w-4xl mx-auto animate-float drop-shadow-[0_0_50px_rgba(255,0,0,0.8)]"
          />
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
