const brands = [
  { name: "Sophos", logo: "https://cdn.worldvectorlogo.com/logos/sophos-1.svg" },
  { name: "Kela", logo: "https://cdn.worldvectorlogo.com/logos/kela-1.svg" },
  { name: "ManageEngine", logo: "https://cdn.worldvectorlogo.com/logos/manageengine.svg" },
  { name: "Trend Micro", logo: "https://cdn.worldvectorlogo.com/logos/trend-micro-1.svg" },
];

export const BrandsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marcas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con los líderes más reconocidos en soluciones de ciberseguridad
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
