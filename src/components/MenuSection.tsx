import { Coffee, Sandwich, Cake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const menuItems = [
  {
    icon: Coffee,
    title: "Minuman",
    description: "Berbagai Jenis Kopi, Minuman Dingin/Panas, dan Minuman Spesial",
  },
  {
    icon: Sandwich,
    title: "Makanan Ringan",
    description: "Makanan ringan seperti kue basah dan jajanan tradisional",
  },
  {
    icon: Cake,
    title: "Pastries & Desserts",
    description: "Freshly baked cakes, cookies, dan sweet treats",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nikmati kopi Gayo dan Uleekareng khas kami hanya di sini.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="glass hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
