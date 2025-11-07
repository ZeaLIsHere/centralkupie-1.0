import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
          <img src="src/assets/logo.jpg" alt="Centralkupie Logo" className="h-12" />
            <span className="text-2xl font-bold text-primary-foreground">
              Centralkupie
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("menu")}
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-primary transition-colors"
            >
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation with Accordion */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="navigasi" className="border-border">
                <AccordionTrigger className="text-primary-foreground">
                  Navigasi
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => scrollToSection("menu")}
                      className="text-left py-2 px-4 text-primary-foreground hover:bg-primary/20 rounded transition-colors"
                    >
                      Menu
                    </button>
                    <button
                      onClick={() => scrollToSection("location")}
                      className="text-left py-2 px-4 text-primary-foreground hover:bg-primary/20 rounded transition-colors"
                    >
                      Location
                    </button>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-left py-2 px-4 text-primary-foreground hover:bg-primary/20 rounded transition-colors"
                    >
                      About
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
