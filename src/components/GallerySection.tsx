const GallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571266028243-d220c6e1e6c6?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
  ];

  return (
    <section id="galeria" className="py-20 px-4 bg-black mb-24">
      <div className="container mx-auto">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-16 text-outline-red">
          GALERÍA
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img 
                src={image} 
                alt={`FAMMA Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[hsl(var(--famma-red))]/0 group-hover:bg-[hsl(var(--famma-red))]/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
