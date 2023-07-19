const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Aceitunas",
      "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Aceitunas",
      "Anchoas",
      "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Anana"],
  },
];

// Actividad A
console.log("Pizzas con ID impar:");
const pizzasIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);
pizzasIdImpar.forEach(pizza => console.log(`· ${pizza.nombre}`));
console.log('')

// Actividad B
console.log("¿Hay alguna pizza que valga menos de $600?");
const pizzaMenor600 = pizzas.some(pizza => pizza.precio < 600);
console.log(pizzaMenor600 ? "Sí, hay pizzas que valen menos de $600." : "No, todas las pizzas valen $600 o más.");
console.log('')

// Actividad C
console.log("Nombres de las pizzas con su precio:");
pizzas.forEach(pizza => console.log(`· ${pizza.nombre}: $${pizza.precio}`));
console.log('')

// Actividad D
console.log("Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
  console.log(`· ${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => console.log(`  · ${ingrediente}`));
});