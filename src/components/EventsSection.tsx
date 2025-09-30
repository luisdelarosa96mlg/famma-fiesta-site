import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EventsSection = () => {
  const events = [
    {
      date: "15 DIC",
      title: "FAMMA NIGHT",
      location: "Club Central",
      time: "23:00 - 06:00",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop",
    },
    {
      date: "22 DIC",
      title: "FAMMA ESPECIAL",
      location: "Arena Grande",
      time: "22:00 - 05:00",
      image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&h=600&fit=crop",
    },
    {
      date: "31 DIC",
      title: "FAMMA NEW YEAR",
      location: "Megaclub",
      time: "23:00 - 08:00",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=600&fit=crop",
    },
    {
      date: "05 ENE",
      title: "FAMMA AFTER PARTY",
      location: "Downtown Club",
      time: "22:00 - 06:00",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    },
    {
      date: "12 ENE",
      title: "FAMMA FESTIVAL",
      location: "Open Air Arena",
      time: "20:00 - 07:00",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="eventos" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16 text-outline-red">
          PRÓXIMOS EVENTOS
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {events.map((event, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="bg-[hsl(var(--card))] border-[hsl(var(--famma-red))] overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[hsl(var(--famma-red))] px-4 py-2 font-black text-lg">
                      {event.date}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-black mb-4 text-glow-red">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-[hsl(var(--famma-red))]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-[hsl(var(--famma-red))]" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-[hsl(var(--famma-red))] hover:bg-[hsl(var(--famma-red))/90] font-bold"
                    >
                      COMPRAR TICKETS
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[hsl(var(--famma-red))] hover:bg-[hsl(var(--famma-red))/90] border-none text-white -left-12" />
          <CarouselNext className="bg-[hsl(var(--famma-red))] hover:bg-[hsl(var(--famma-red))/90] border-none text-white -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default EventsSection;
