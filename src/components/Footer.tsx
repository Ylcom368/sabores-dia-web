import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Ylcom</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tu local de confianza para disfrutar los mejores sabores paraguayos. 
              Comida fresca y deliciosa todos los días.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a 
                  href="https://wa.me/595982644099" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +595 982 644099
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@ylcom.com.py</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Leonardo Salinas Km 20, Capiatá</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ylcom. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
