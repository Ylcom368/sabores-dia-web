import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Check } from "lucide-react";
import { toast } from "sonner";

interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  payment_method: string;
  items: Array<{
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
  }>;
  total_amount: number;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error al cargar los pedidos");
    } finally {
      setLoading(false);
    }
  };

  const markAsDelivered = async (id: string) => {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ status: "Entregado" })
        .eq("id", id);

      if (error) throw error;
      
      toast.success("Pedido marcado como entregado");
      fetchOrders();
    } catch (error) {
      console.error("Error updating order:", error);
      toast.error("Error al actualizar el pedido");
    }
  };

  const deleteOrder = async (id: string) => {
    if (!confirm("¿Estás seguro de que deseas eliminar este pedido?")) return;

    try {
      const { error } = await supabase
        .from("orders")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      toast.success("Pedido eliminado");
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
      toast.error("Error al eliminar el pedido");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Cargando pedidos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Panel de Administración</h1>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No hay pedidos registrados</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">
                        Pedido #{order.order_number}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(order.created_at).toLocaleString("es-PY")}
                      </p>
                    </div>
                    <Badge 
                      variant={order.status === "Entregado" ? "default" : "secondary"}
                    >
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Customer Info */}
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Información del Cliente</h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Nombre:</span> {order.customer_name}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Email:</span> {order.customer_email}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Teléfono:</span> {order.customer_phone}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Dirección:</span> {order.customer_address}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium text-foreground">Método de pago:</span> {order.payment_method}
                        </p>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Artículos del Pedido</h3>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {item.nombre} x{item.cantidad}
                            </span>
                            <span className="font-medium text-foreground">
                              ₲{(item.precio * item.cantidad).toLocaleString("es-PY")}
                            </span>
                          </div>
                        ))}
                        <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                          <span className="text-foreground">Total</span>
                          <span className="text-primary">
                            ₲{order.total_amount.toLocaleString("es-PY")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-6">
                    {order.status !== "Entregado" && (
                      <Button
                        onClick={() => markAsDelivered(order.id)}
                        variant="default"
                        className="flex items-center gap-2"
                      >
                        <Check className="h-4 w-4" />
                        Marcar como Entregado
                      </Button>
                    )}
                    <Button
                      onClick={() => deleteOrder(order.id)}
                      variant="destructive"
                      className="flex items-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      Eliminar Pedido
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
