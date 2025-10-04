export interface Product {
  id: number;
  categoria: string;
  nombre: string;
  precio: number;
}

export interface CartItem extends Product {
  cantidad: number;
}
