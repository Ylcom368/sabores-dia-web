import { Product } from "@/types/product";

// Importar imágenes individuales
import mixtoImg from "@/assets/products/mixto.jpg";
import omeletteImg from "@/assets/products/omelette.jpg";
import cafeNegroImg from "@/assets/products/cafe-negro.jpg";
import cafeLecheImg from "@/assets/products/cafe-leche.jpg";
import cocidoNegroImg from "@/assets/products/cocido-negro.jpg";
import cocidoLecheImg from "@/assets/products/cocido-leche.jpg";
import empanadasFritasImg from "@/assets/products/empanadas-fritas.jpg";
import sandwichMilanesaPolloImg from "@/assets/products/sandwich-milanesa-pollo.jpg";
import sandwichMilanesaCarneImg from "@/assets/products/sandwich-milanesa-carne.jpg";
import villarroelImg from "@/assets/products/villarroel.jpg";
import croquetaImg from "@/assets/products/croqueta.jpg";
import tortillaImg from "@/assets/products/tortilla.jpg";
import empanadasHornoImg from "@/assets/products/empanadas-horno.jpg";
import empanadaMandiocaImg from "@/assets/products/empanada-mandioca.jpg";
import chipaSooImg from "@/assets/products/chipa-soo.jpg";
import sopaImg from "@/assets/products/sopa.jpg";
import payaguaImg from "@/assets/products/payagua.jpg";
import tallarinImg from "@/assets/products/tallarin.jpg";
import noquisImg from "@/assets/products/noquis.jpg";
import lomoEncebollado from "@/assets/products/lomo-encebollado.jpg";
import bifeKoyguaImg from "@/assets/products/bife-koygua.jpg";
import guisoArrozImg from "@/assets/products/guiso-arroz.jpg";
import guisoFideoImg from "@/assets/products/guiso-fideo.jpg";
import musloHornoImg from "@/assets/products/muslo-horno.jpg";
import milanesaImg from "@/assets/products/milanesa.jpg";
import milanesaNapolitanaImg from "@/assets/products/milanesa-napolitana.jpg";
import asadoOllaImg from "@/assets/products/asado-olla.jpg";
import picaditoImg from "@/assets/products/picadito.jpg";
import estofadoImg from "@/assets/products/estofado.jpg";
import pastafrolaImg from "@/assets/products/pastafrola.jpg";
import alfajorImg from "@/assets/products/alfajor.jpg";
import piononoImg from "@/assets/products/pionono.jpg";
import tortaImg from "@/assets/products/torta.jpg";
import suspirosImg from "@/assets/products/suspiros.jpg";
import bolloImg from "@/assets/products/bollo.jpg";
import medialunaImg from "@/assets/products/medialuna.jpg";

export const productos: Product[] = [
  // Desayuno
  { id: 1, categoria: "Desayuno", nombre: "Mixto", precio: 5000, imagen: mixtoImg },
  { id: 2, categoria: "Desayuno", nombre: "Omelette", precio: 7000, imagen: omeletteImg },
  { id: 3, categoria: "Desayuno", nombre: "Café negro", precio: 6000, imagen: cafeNegroImg },
  { id: 4, categoria: "Desayuno", nombre: "Café con leche", precio: 5000, imagen: cafeLecheImg },
  { id: 5, categoria: "Desayuno", nombre: "Cocido negro", precio: 6000, imagen: cocidoNegroImg },
  { id: 6, categoria: "Desayuno", nombre: "Cocido con leche", precio: 5000, imagen: cocidoLecheImg },
  
  // Minutas
  { id: 7, categoria: "Minutas", nombre: "Empanadas de carne, pollo, jamón y queso", precio: 4000, imagen: empanadasFritasImg },
  { id: 8, categoria: "Minutas", nombre: "Sandwich de milanesa de pollo", precio: 8000, imagen: sandwichMilanesaPolloImg },
  { id: 9, categoria: "Minutas", nombre: "Sandwich de milanesa de carne", precio: 9000, imagen: sandwichMilanesaCarneImg },
  { id: 10, categoria: "Minutas", nombre: "Villarroel", precio: 4000, imagen: villarroelImg },
  { id: 11, categoria: "Minutas", nombre: "Croqueta", precio: 5000, imagen: croquetaImg },
  { id: 12, categoria: "Minutas", nombre: "Tortilla", precio: 5000, imagen: tortillaImg },
  { id: 13, categoria: "Minutas", nombre: "Empanadas al horno de carne, pollo, jamón y queso", precio: 5000, imagen: empanadasHornoImg },
  
  // Comidas típicas
  { id: 14, categoria: "Comidas típicas", nombre: "Empanadas de mandioca", precio: 5000, imagen: empanadaMandiocaImg },
  { id: 15, categoria: "Comidas típicas", nombre: "Chipa so'o", precio: 5000, imagen: chipaSooImg },
  { id: 16, categoria: "Comidas típicas", nombre: "Sopa porción", precio: 5000, imagen: sopaImg },
  { id: 17, categoria: "Comidas típicas", nombre: "Payaguá", precio: 5000, imagen: payaguaImg },
  
  // Almuerzo
  { id: 18, categoria: "Almuerzo", nombre: "Tallarín de carne o pollo", precio: 20000, imagen: tallarinImg, descripcion: "Sin guarnición" },
  { id: 19, categoria: "Almuerzo", nombre: "Ñoquis de carne o pollo", precio: 20000, imagen: noquisImg, descripcion: "Sin guarnición" },
  { id: 20, categoria: "Almuerzo", nombre: "Lomo encebollado", precio: 25000, imagen: lomoEncebollado, descripcion: "Con guarnición" },
  { id: 21, categoria: "Almuerzo", nombre: "Bife koygua", precio: 20000, imagen: bifeKoyguaImg, descripcion: "Sin guarnición" },
  { id: 22, categoria: "Almuerzo", nombre: "Guiso de arroz", precio: 20000, imagen: guisoArrozImg, descripcion: "Sin guarnición" },
  { id: 23, categoria: "Almuerzo", nombre: "Guiso de fideo", precio: 20000, imagen: guisoFideoImg, descripcion: "Sin guarnición" },
  { id: 24, categoria: "Almuerzo", nombre: "Muslo al horno", precio: 20000, imagen: musloHornoImg, descripcion: "Con guarnición" },
  { id: 25, categoria: "Almuerzo", nombre: "Milanesa de carne o pollo", precio: 20000, imagen: milanesaImg, descripcion: "Con guarnición" },
  { id: 26, categoria: "Almuerzo", nombre: "Milanesa a la napolitana", precio: 23000, imagen: milanesaNapolitanaImg, descripcion: "Con guarnición" },
  { id: 27, categoria: "Almuerzo", nombre: "Asado a la olla", precio: 25000, imagen: asadoOllaImg, descripcion: "Con guarnición" },
  { id: 28, categoria: "Almuerzo", nombre: "Picadito de carne", precio: 20000, imagen: picaditoImg, descripcion: "Con guarnición" },
  { id: 29, categoria: "Almuerzo", nombre: "Estofado de pollo o carne", precio: 20000, imagen: estofadoImg, descripcion: "Con guarnición" },
  
  // Postres o dulces
  { id: 30, categoria: "Postres", nombre: "Pastafrola", precio: 5000, imagen: pastafrolaImg },
  { id: 31, categoria: "Postres", nombre: "Alfajor", precio: 5000, imagen: alfajorImg },
  { id: 32, categoria: "Postres", nombre: "Pionono", precio: 5000, imagen: piononoImg },
  { id: 33, categoria: "Postres", nombre: "Torta en porción", precio: 6000, imagen: tortaImg },
  { id: 34, categoria: "Postres", nombre: "Suspiros de vainilla o chocolate", precio: 5000, imagen: suspirosImg },
  { id: 35, categoria: "Postres", nombre: "Bollo", precio: 3000, imagen: bolloImg },
  { id: 36, categoria: "Postres", nombre: "Medialuna", precio: 3500, imagen: medialunaImg },
];

export const categorias = ["Desayuno", "Minutas", "Comidas típicas", "Almuerzo", "Postres"];
