// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'Alejandro', score: 95 },
    { name: 'Luis', score: 98 },
    { name: 'Mary', score: 80 },
    { name: 'Elías', score: 50 },
    { name: 'Rodrigo', score: 77 },
    { name: 'Héctor', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log("Ejemplo 8: Filtrando elementos por score mayor a 80")
  console.log(scoresGreaterEighty)
  