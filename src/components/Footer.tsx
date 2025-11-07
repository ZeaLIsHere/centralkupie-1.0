import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-8 w-8 text-green-950" />
              <span className="text-2xl font-bold text-primary-foreground text-green-950">
                Centralkupie
              </span>
            </div>
            <p className="text-primary-foreground/80 text-green-950">
              Tempat sempurna untuk ngopi, ngobrol dan nobar.
            </p>
          </div>


          {/* Social Media */}
          <div className="md:col-span-2 flex flex-col md:items-end">
            <h3 className="text-lg font-semibold text-primary-foreground mb-4 text-green-900 ">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/centralkupie/"
                target="_blank"
                className="text-primary-foreground/80 hover:text-primary transition-colors text-green-900"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary transition-colors text-green-900"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary transition-colors text-green-900"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center border-green-900">
          <p className="text-primary-foreground/80 text-green-900">
            © {currentYear} Centralkupie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
