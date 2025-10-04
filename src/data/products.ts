import { Product } from "@/types/product";
import desayunoImg from "@/assets/desayuno.jpg";
import minutasImg from "@/assets/minutas.jpg";
import comidasTipicasImg from "@/assets/comidas-tipicas.jpg";
import almuerzoImg from "@/assets/almuerzo.jpg";
import postresImg from "@/assets/postres.jpg";

export const productos: Product[] = [
  // Desayuno
  { id: 1, categoria: "Desayuno", nombre: "Mixto", precio: 5000, imagen: desayunoImg },
  { id: 2, categoria: "Desayuno", nombre: "Omelette", precio: 7000, imagen: desayunoImg },
  { id: 3, categoria: "Desayuno", nombre: "Café negro", precio: 6000, imagen: desayunoImg },
  { id: 4, categoria: "Desayuno", nombre: "Café con leche", precio: 5000, imagen: desayunoImg },
  { id: 5, categoria: "Desayuno", nombre: "Cocido negro", precio: 6000, imagen: desayunoImg },
  { id: 6, categoria: "Desayuno", nombre: "Cocido con leche", precio: 5000, imagen: desayunoImg },
  
  // Minutas
  { id: 7, categoria: "Minutas", nombre: "Empanadas de carne, pollo, jamón y queso", precio: 4000, imagen: minutasImg },
  { id: 8, categoria: "Minutas", nombre: "Sandwich de milanesa de pollo", precio: 8000, imagen: minutasImg },
  { id: 9, categoria: "Minutas", nombre: "Sandwich de milanesa de carne", precio: 9000, imagen: minutasImg },
  { id: 10, categoria: "Minutas", nombre: "Villarroel", precio: 4000, imagen: minutasImg },
  { id: 11, categoria: "Minutas", nombre: "Croqueta", precio: 5000, imagen: minutasImg },
  { id: 12, categoria: "Minutas", nombre: "Tortilla", precio: 5000, imagen: minutasImg },
  { id: 13, categoria: "Minutas", nombre: "Empanadas al horno de carne, pollo, jamón y queso", precio: 5000, imagen: minutasImg },
  
  // Comidas típicas
  { id: 14, categoria: "Comidas típicas", nombre: "Empanadas de mandioca", precio: 5000, imagen: comidasTipicasImg },
  { id: 15, categoria: "Comidas típicas", nombre: "Chipa so'o", precio: 5000, imagen: comidasTipicasImg },
  { id: 16, categoria: "Comidas típicas", nombre: "Sopa porción", precio: 5000, imagen: comidasTipicasImg },
  { id: 17, categoria: "Comidas típicas", nombre: "Payaguá", precio: 5000, imagen: comidasTipicasImg },
  
  // Almuerzo
  { id: 18, categoria: "Almuerzo", nombre: "Tallarín de carne o pollo", precio: 20000, imagen: almuerzoImg, descripcion: "Sin guarnición" },
  { id: 19, categoria: "Almuerzo", nombre: "Ñoquis de carne o pollo", precio: 20000, imagen: almuerzoImg, descripcion: "Sin guarnición" },
  { id: 20, categoria: "Almuerzo", nombre: "Lomo encebollado", precio: 25000, imagen: almuerzoImg, descripcion: "Con guarnición" },
  { id: 21, categoria: "Almuerzo", nombre: "Bife koygua", precio: 20000, imagen: almuerzoImg, descripcion: "Sin guarnición" },
  { id: 22, categoria: "Almuerzo", nombre: "Guiso de arroz", precio: 20000, imagen: almuerzoImg, descripcion: "Sin guarnición" },
  { id: 23, categoria: "Almuerzo", nombre: "Guiso de fideo", precio: 20000, imagen: almuerzoImg, descripcion: "Sin guarnición" },
  { id: 24, categoria: "Almuerzo", nombre: "Muslo al horno", precio: 20000, imagen: almuerzoImg, descripcion: "Con guarnición" },
  { id: 25, categoria: "Almuerzo", nombre: "Milanesa de carne o pollo", precio: 20000, imagen: almuerzoImg, descripcion: "Con guarnición" },
  { id: 26, categoria: "Almuerzo", nombre: "Milanesa a la napolitana", precio: 23000, imagen: almuerzoImg, descripcion: "Con guarnición" },
  { id: 27, categoria: "Almuerzo", nombre: "Asado a la olla", precio: 25000, imagen: almuerzoImg, descripcion: "Con guarnición" },
  { id: 28, categoria: "Almuerzo", nombre: "Picadito de carne", precio: 20000, imagen: almuerzoImg, descripcion: "Con guarnición" },
  { id: 29, categoria: "Almuerzo", nombre: "Estofado de pollo o carne", precio: 20000, imagen: almuerzoImg, descripcion: "Con guarnición" },
  
  // Postres o dulces
  { id: 30, categoria: "Postres", nombre: "Pastafrola", precio: 5000, imagen: postresImg },
  { id: 31, categoria: "Postres", nombre: "Alfajor", precio: 5000, imagen: postresImg },
  { id: 32, categoria: "Postres", nombre: "Pionono", precio: 5000, imagen: postresImg },
  { id: 33, categoria: "Postres", nombre: "Torta en porción", precio: 6000, imagen: postresImg },
  { id: 34, categoria: "Postres", nombre: "Suspiros de vainilla o chocolate", precio: 5000, imagen: postresImg },
  { id: 35, categoria: "Postres", nombre: "Bollo", precio: 3000, imagen: postresImg },
  { id: 36, categoria: "Postres", nombre: "Medialuna", precio: 3500, imagen: postresImg },
];

export const categorias = ["Desayuno", "Minutas", "Comidas típicas", "Almuerzo", "Postres"];
