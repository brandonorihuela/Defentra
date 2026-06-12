import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

type Ally = {
  name: string;
  slug: string;
  logo: string;
};

const allies: Ally[] = [
  { name: "KELA", slug: "kela", logo: "/logos/kela.svg" },
  { name: "ManageEngine", slug: "manageengine", logo: "/logos/manageengine.svg" },
  { name: "Trend Micro", slug: "trendmicro", logo: "/logos/trendmicro.svg" },
];

// Duplicate to give a seamless loop feel
const loopedAllies = [...allies, ...allies, ...allies];

export const LogosBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!emblaApi) return;
    intervalRef.current = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 2200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi]);

  return (
    <section className="border-y border-border bg-background py-10" id="aliados-home">
      <div className="container px-4">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Alianzas estratégicas
        </p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-8">
            {loopedAllies.map((ally, idx) => (
              <div
                key={`${ally.slug}-${idx}`}
                className="flex min-w-0 shrink-0 grow-0 basis-1/2 items-center justify-center px-4 md:basis-1/4 lg:basis-1/5"
              >
                <div className="flex h-20 w-full items-center justify-center rounded-xl border border-border bg-card px-6 opacity-70 transition-opacity hover:opacity-100">
                  <img
                    src={ally.logo}
                    alt={ally.name}
                    className="max-h-10 w-auto object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                  <span
                    className="hidden text-base font-semibold text-secondary"
                    aria-hidden
                  >
                    {ally.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
