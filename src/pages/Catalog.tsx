import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { productos, categorias } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "lucide-react";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [discountedProducts, setDiscountedProducts] = useState<number[]>([]);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    // Check if user is new (first time visiting)
    const hasVisited = localStorage.getItem("ylcom_visited");
    if (!hasVisited) {
      setIsNewUser(true);
      localStorage.setItem("ylcom_visited", "true");
      
      // Randomly select 3-5 products for discount
      const numDiscounts = Math.floor(Math.random() * 3) + 3; // 3 to 5 products
      const shuffled = [...productos].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, numDiscounts).map(p => p.id);
      setDiscountedProducts(selected);
    }
  }, []);

  const filteredProducts =
    selectedCategory === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === selectedCategory);

  const flashSaleProducts = productos.filter(p => discountedProducts.includes(p.id));

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestro Catálogo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre todos nuestros deliciosos platillos y bebidas
          </p>
        </div>

        {/* Flash Sale Section - Only for new users */}
        {isNewUser && flashSaleProducts.length > 0 && (
          <Card className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Tag className="h-6 w-6 text-primary" />
                ¡Descuentos Fugaces! - 20% OFF
              </CardTitle>
              <p className="text-muted-foreground">
                ¡Bienvenido! Como nuevo cliente, disfrutá de estos descuentos especiales por tiempo limitado.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {flashSaleProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    discount={20}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedCategory === "Todos" ? "default" : "outline"}
            onClick={() => setSelectedCategory("Todos")}
            size="lg"
          >
            Todos
          </Button>
          {categorias.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              size="lg"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No se encontraron productos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
