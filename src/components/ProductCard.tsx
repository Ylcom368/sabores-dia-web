import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.nombre} agregado al carrito`);
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border">
      <CardContent className="pt-6">
        <div className="mb-4">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
            {product.categoria}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-foreground">{product.nombre}</h3>
        <p className="text-2xl font-bold text-primary">
          ${product.precio.toLocaleString("es-CL")}
        </p>
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
