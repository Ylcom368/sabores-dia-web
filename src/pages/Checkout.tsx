import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.direccion) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    // Simulate payment
    setPaymentSuccess(true);
    clearCart();
    toast.success("¡Pago realizado con éxito!");
  };

  if (cart.length === 0 && !paymentSuccess) {
    navigate("/carrito");
    return null;
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ¡Pago Realizado con Éxito!
            </h2>
            <p className="text-muted-foreground mb-8">
              Tu pedido ha sido confirmado. Te contactaremos pronto con los detalles de entrega.
            </p>
            <Button onClick={() => navigate("/")} size="lg" className="w-full">
              Volver al Inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Finalizar Compra</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle>Información de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="juan@ejemplo.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    placeholder="+56 9 1234 5678"
                  />
                </div>

                <div>
                  <Label htmlFor="direccion">Dirección de entrega</Label>
                  <Input
                    id="direccion"
                    value={formData.direccion}
                    onChange={(e) =>
                      setFormData({ ...formData, direccion: e.target.value })
                    }
                    placeholder="Av. Principal 123, Santiago"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Confirmar Pago
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.nombre} x{item.cantidad}
                    </span>
                    <span className="font-semibold text-foreground">
                      ${(item.precio * item.cantidad).toLocaleString("es-CL")}
                    </span>
                  </div>
                ))}
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">
                      ${getTotal().toLocaleString("es-CL")}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
