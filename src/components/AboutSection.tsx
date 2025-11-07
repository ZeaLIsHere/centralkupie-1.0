import { Heart, Users, Star } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Setiap cangkir dan hidangan kami disajikan dengan penuh semangat dan ketulusan.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Ruang yang ramah untuk semua orang berkumpul dan terhubung",
  },
  {
    icon: Star,
    title: "Quality First",
    description: "Kami hanya menggunakan bahan-bahan terbaik dan biji kopi premium",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Tentang Centralkupie
            </h2>
            <p className="text-lg text-muted-foreground">
              Bukan sekadar kedai kopi, kami adalah tempat nongkrong di lingkunganmu. Mau nugas, santai, ngobrol bareng teman, atau nonton bola bareng, Centralkupie selalu jadi tempat yang pas buat segala suasana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
