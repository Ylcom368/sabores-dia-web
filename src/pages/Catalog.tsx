import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { productos, categorias } from "@/data/products";
import { Button } from "@/components/ui/button";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredProducts =
    selectedCategory === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === selectedCategory);

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
