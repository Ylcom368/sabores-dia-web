import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  discount?: number;
}

const ProductCard = ({ product, discount = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.nombre} agregado al carrito`);
  };

  const finalPrice = discount > 0 
    ? product.precio * (1 - discount / 100) 
    : product.precio;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border overflow-hidden relative">
      {discount > 0 && (
        <Badge className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground">
          -{discount}%
        </Badge>
      )}
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.imagen} 
          alt={product.nombre}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="pt-4">
        <div className="mb-2">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
            {product.categoria}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-1 text-foreground line-clamp-2">{product.nombre}</h3>
        {product.descripcion && (
          <p className="text-xs text-muted-foreground mb-2">{product.descripcion}</p>
        )}
        {discount > 0 ? (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground line-through">
              ₲{product.precio.toLocaleString("es-PY")}
            </p>
            <p className="text-2xl font-bold text-primary">
              ₲{Math.round(finalPrice).toLocaleString("es-PY")}
            </p>
          </div>
        ) : (
          <p className="text-2xl font-bold text-primary">
            ₲{product.precio.toLocaleString("es-PY")}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddToCart} className="w-full" size="lg">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Agregar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
