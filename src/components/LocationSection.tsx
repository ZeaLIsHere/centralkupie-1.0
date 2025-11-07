import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const locationDetails = [
  {
    icon: MapPin,
    title: "Address",
    content: "Jl. Ir. H. Juanda Dalam, Gampong Bundar, Kec. Karang Baru, Kabupaten Aceh Tamiang, 24476",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Sun: 6:30 AM - 12:00 PM",
  },
  {
    icon: Phone,
    title: "Contact",
    content: "+62 812-6939-8999",
  },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find us in the heart of the city. We're open every day, ready to
            serve you the best coffee experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {locationDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card
                key={index}
                className="glass hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-muted-foreground">{detail.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
