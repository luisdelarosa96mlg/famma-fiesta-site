import fammaMMlogo from "@/assets/famma-logo.png";

const FammaFullLogo = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* FA en blanco a la izquierda */}
      <div className="text-white text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter mr-[-2rem] md:mr-[-4rem] z-10">
        FA
      </div>
      
      {/* Logo MM (guante inflable) */}
      <div className="relative z-20">
        <img 
          src={fammaMMlogo} 
          alt="MM" 
          className="w-[400px] md:w-[700px] h-auto"
        />
      </div>
      
      {/* A en blanco a la derecha */}
      <div className="text-white text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter ml-[-2rem] md:ml-[-4rem] z-10">
        A
      </div>
    </div>
  );
};

export default FammaFullLogo;
