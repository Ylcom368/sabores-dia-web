import { Product } from "@/types/product";

export const productos: Product[] = [
  // Desayuno
  { id: 1, categoria: "Desayuno", nombre: "Mixto", precio: 5000 },
  { id: 2, categoria: "Desayuno", nombre: "Omelette", precio: 7000 },
  { id: 3, categoria: "Desayuno", nombre: "Café negro", precio: 6000 },
  { id: 4, categoria: "Desayuno", nombre: "Tostadas con palta", precio: 8000 },
  { id: 5, categoria: "Desayuno", nombre: "Yogurt con granola", precio: 6500 },
  
  // Almuerzo
  { id: 6, categoria: "Almuerzo", nombre: "Pollo asado", precio: 12000 },
  { id: 7, categoria: "Almuerzo", nombre: "Lomo saltado", precio: 15000 },
  { id: 8, categoria: "Almuerzo", nombre: "Pescado frito", precio: 13000 },
  { id: 9, categoria: "Almuerzo", nombre: "Arroz con pollo", precio: 11000 },
  { id: 10, categoria: "Almuerzo", nombre: "Ensalada César", precio: 9000 },
  
  // Cena
  { id: 11, categoria: "Cena", nombre: "Pizza margarita", precio: 14000 },
  { id: 12, categoria: "Cena", nombre: "Hamburguesa completa", precio: 12000 },
  { id: 13, categoria: "Cena", nombre: "Sopa del día", precio: 7000 },
  { id: 14, categoria: "Cena", nombre: "Empanadas (3 unidades)", precio: 8000 },
  { id: 15, categoria: "Cena", nombre: "Pasta carbonara", precio: 13000 },
  
  // Bebidas
  { id: 16, categoria: "Bebidas", nombre: "Jugo natural", precio: 4000 },
  { id: 17, categoria: "Bebidas", nombre: "Limonada", precio: 3500 },
  { id: 18, categoria: "Bebidas", nombre: "Té helado", precio: 4000 },
  { id: 19, categoria: "Bebidas", nombre: "Batido de frutas", precio: 5500 },
  { id: 20, categoria: "Bebidas", nombre: "Gaseosa", precio: 3000 },
  
  // Postres
  { id: 21, categoria: "Postres", nombre: "Torta de chocolate", precio: 6000 },
  { id: 22, categoria: "Postres", nombre: "Flan casero", precio: 5000 },
  { id: 23, categoria: "Postres", nombre: "Helado (2 bolas)", precio: 5500 },
  { id: 24, categoria: "Postres", nombre: "Brownie", precio: 6500 },
  { id: 25, categoria: "Postres", nombre: "Cheesecake", precio: 7000 },
];

export const categorias = ["Desayuno", "Almuerzo", "Cena", "Bebidas", "Postres"];
