import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mb-8">
            ¡Agrega algunos productos deliciosos a tu carrito!
          </p>
          <Link to="/catalogo">
            <Button size="lg">Ver Catálogo</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Tu Carrito</h1>

        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{item.nombre}</h3>
                    <p className="text-sm text-muted-foreground">{item.categoria}</p>
                    <p className="text-primary font-bold mt-1">
                      ₲{item.precio.toLocaleString("es-PY")}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-semibold text-foreground">
                        {item.cantidad}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-right font-semibold text-foreground">
                    Subtotal: ₲{(item.precio * item.cantidad).toLocaleString("es-PY")}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Resumen del Pedido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>₲{getTotal().toLocaleString("es-PY")}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">₲{getTotal().toLocaleString("es-PY")}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Link to="/catalogo" className="flex-1">
              <Button variant="outline" className="w-full" size="lg">
                Seguir Comprando
              </Button>
            </Link>
            <Button
              className="flex-1"
              size="lg"
              onClick={() => navigate("/pago")}
            >
              Proceder al Pago
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
