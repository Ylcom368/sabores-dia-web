export interface Product {
  id: number;
  categoria: string;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion?: string;
}

export interface CartItem extends Product {
  cantidad: number;
}
