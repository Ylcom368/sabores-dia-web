import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            Sabores del Día
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-balance">
            Comida casera preparada con amor, para endulzar tu día
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalogo">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Ver Catálogo
              </Button>
            </Link>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Recetas Caseras</h3>
              <p className="text-muted-foreground">
                Preparamos cada plato con recetas tradicionales y el amor de casa
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Siempre Fresco</h3>
              <p className="text-muted-foreground">
                Ingredientes frescos cada día para garantizar la mejor calidad
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Hecho con Amor</h3>
              <p className="text-muted-foreground">
                Cada platillo se prepara pensando en tu satisfacción
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            ¿Listo para probar nuestros sabores?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre nuestro menú completo con desayunos, almuerzos, cenas y más
          </p>
          <Link to="/catalogo">
            <Button size="lg" className="text-lg px-12">
              Explorar Catálogo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
