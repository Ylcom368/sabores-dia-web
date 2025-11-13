import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Checkout = () => {
  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    metodoPago: "",
  });

  const generateOrderNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORD-${timestamp}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.direccion || !formData.metodoPago) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    try {
      const newOrderNumber = generateOrderNumber();
      
      const { error } = await supabase.from("orders").insert({
        order_number: newOrderNumber,
        customer_name: formData.nombre,
        customer_email: formData.email,
        customer_phone: formData.telefono,
        customer_address: formData.direccion,
        payment_method: formData.metodoPago,
        items: cart,
        total_amount: getTotal(),
        status: "Pendiente",
      });

      if (error) throw error;

      setOrderNumber(newOrderNumber);
      setPaymentSuccess(true);
      clearCart();
      toast.success("¡Pedido realizado con éxito!");
    } catch (error) {
      console.error("Error al guardar el pedido:", error);
      toast.error("Error al procesar el pedido. Por favor intenta de nuevo.");
    }
  };

  if (cart.length === 0 && !paymentSuccess) {
    navigate("/carrito");
    return null;
  }

  if (paymentSuccess) {
    const whatsappNumber = "595982644099";
    const whatsappMessage = `Hola, acabo de hacer un pedido. Mi Nro. de orden es: ${orderNumber}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              ¡Pedido Realizado con Éxito!
            </h2>
            <div className="mb-6">
              <p className="text-lg font-semibold text-foreground mb-2">
                Número de Orden: {orderNumber}
              </p>
              <p className="text-muted-foreground">
                Su pedido ya está reservado. Haga clic aquí para comunicarse con nosotros.
              </p>
            </div>
            <div className="space-y-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="lg"
                className="w-full"
              >
                Volver al Inicio
              </Button>
            </div>
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
                  <Label htmlFor="nombre">Ñande térã</Label>
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
                  <Label htmlFor="email">Correo</Label>
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
                  <Label htmlFor="telefono">Pumbyry</Label>
                  <Input
                    id="telefono"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    placeholder="+595 981 234 567"
                  />
                </div>

                <div>
                  <Label htmlFor="direccion">Dirección</Label>
                  <Input
                    id="direccion"
                    value={formData.direccion}
                    onChange={(e) =>
                      setFormData({ ...formData, direccion: e.target.value })
                    }
                    placeholder="Leonardo Salinas Km 20, Capiatá"
                  />
                </div>

                <div>
                  <Label htmlFor="metodoPago">Método de Pago</Label>
                  <div className="space-y-2 mt-2">
                    {["Transferencia bancaria", "Pago en efectivo", "Tarjeta de débito/crédito", "Pago QR"].map((metodo) => (
                      <label 
                        key={metodo}
                        className="flex items-center space-x-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <input
                          type="radio"
                          name="metodoPago"
                          value={metodo}
                          checked={formData.metodoPago === metodo}
                          onChange={(e) =>
                            setFormData({ ...formData, metodoPago: e.target.value })
                          }
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-foreground">{metodo}</span>
                      </label>
                    ))}
                  </div>
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
                      ₲{(item.precio * item.cantidad).toLocaleString("es-PY")}
                    </span>
                  </div>
                ))}
                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">
                      ₲{getTotal().toLocaleString("es-PY")}
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
