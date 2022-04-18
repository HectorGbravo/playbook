// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'Alejandro', age: 70 },
    { name: 'Carlo', age: 50 },
    { name: 'Braulio', age: 80 },
    { name: 'Héctor', age: 22 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) // sorted ascending