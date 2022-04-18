// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'Alejandro', score: 95 },
    { name: 'Mary', score: 80 },
    { name: 'Ernesto', score: 50 },
    { name: 'Rodrigo', score: 85 },
    { name: 'Héctor', score: 100 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score > 80)
  console.log("Ejemplo 12. Name score found greather than 80:" + score_less_than_80.name)