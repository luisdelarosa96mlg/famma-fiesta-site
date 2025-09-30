import { Button } from "@/components/ui/button";
import { Menu, Calendar, Users, Music } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "Eventos", icon: Calendar, href: "#eventos" },
    { label: "Club FAMMA", icon: Music, href: "#club" },
    { label: "Galería", icon: Users, href: "#galeria" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-t border-[hsl(var(--famma-red))]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-4">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex flex-col items-center gap-1 px-6 py-2 transition-all hover:scale-110"
              >
                <item.icon className="w-5 h-5 text-foreground group-hover:text-[hsl(var(--famma-red))] transition-colors" />
                <span className="text-sm font-bold text-foreground group-hover:text-[hsl(var(--famma-red))] transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
          
          <Button 
            size="lg"
            className="ml-4 bg-[hsl(var(--famma-red))] hover:bg-[hsl(var(--famma-red))/90] text-white font-bold text-lg px-8 shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] transition-all"
          >
            Tickets
          </Button>
          
          <button className="ml-2 p-3 hover:bg-[hsl(var(--famma-red))]/20 rounded-lg transition-colors">
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
