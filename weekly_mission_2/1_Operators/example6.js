// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['France', 'Deuchtsland', 'Singapore', 'Namibia', 'Ireland']
const countriesFirstFourLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 4) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log("           y desplegar las cuatro primeras letras de cada país")
console.log(countriesFirstFourLetters)