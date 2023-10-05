let name = 'Umme Abira Azmary (Mouly)'
let age = 23
const salary = 55000

console.log(`my name is ${name} and age is ${age}`)
console.log(name.length)
console.log(salary.length)
console.log(name.substring(0,7).toUpperCase())
console.log(name.split(''))
console.log(name.split(' '))
//array
const movie = ['Avengers:Endgame', 'Your Lie in April', 'Princess Mononoke', 'Happy New Year']
console.log(movie)
console.log(movie[3])
console.log(movie.length)
movie.push('Iron Man') //add a value at the last position of the list
console.log(movie)
//for adding a value at the first position of a list,
movie.unshift('How to lose a guy in 10 days')
console.log(movie)
//to remove something from the array
movie.pop()
console.log(movie)
//to check whether something is an array or not
console.log(Array.isArray(movie))
console.log(Array.isArray(name)) //cause name is not an array
console.log(movie.indexOf('Princess Mononoke'))