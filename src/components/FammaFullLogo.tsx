import fammaLogo from "@/assets/famma-logo.png";

const FammaFullLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={fammaLogo} 
        alt="FAMMA" 
        className="w-full max-w-4xl h-auto"
      />
    </div>
  );
};

export default FammaFullLogo;
