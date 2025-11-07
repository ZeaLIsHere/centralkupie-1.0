import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Selamat datang di <span className="text-primary hover:text-primary/80">Centralkupie</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground mb-8">
            Tempat yang pas buat ngopi, ngobrol, dan kumpul bareng. Mau catching up sama teman, quality time bareng keluarga, atau nonton pertandingan seru, semuanya bisa kamu nikmatin di sini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("menu")}
            >
              Lihat Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("location")}
            >
              Lokasi 
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
