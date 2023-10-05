let name = 'Umme Abira Azmary (Mouly)'
let age = 23
const birthday = 22012000

console.log(`my name is ${name} and age is ${age}`)
console.log(name.length)
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

//object literals
const store = {
    eggs : 2,
    vegetables: ['onion', 'papaya', 'chili', 'ginger'],
    dairy:{
        milk: 2,
        cheese: 'Cube'
    }
}
console.log(store)
console.log(store.vegetables[1])
console.log(store.dairy.cheese)

const todos=[
    {
        Id: 1,
        Name: 'Mandina',
        Profession: 'Teacher',
        Vaccine: true
    },
    {
        Id: 2,
        Name: 'Thenos',
        Profession: 'Genetor',
        Vaccine: false

    },
    {
        Id: 3,
        Name: 'Leo',
        Profession: 'Player',
        Vaccine: true
    }
]
console.log(todos[1].id)

//for sending a data into a server, we need to convert it into the json format. we can convert a js format into a JSON format following below procedures:
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

//for loop
for (let i=0; i<2; i++){
    console.log(i)
}
let i = 5
while( i<8){
    console.log(i)
    i++
}
//for loop through array
for (let x of todos){
    console.log(x.profession)
}
//***HighOrder Array Method***
//forEach - it prints which particular value we seek to see
todos.forEach(function(x){
    console.log(x.Vaccine)
})

//map - it takes a particular values through loop and returns as a different list
const todoID = todos.map(function(x){
    return(x.Id)
}
)
console.log(todoID)

//filter - it returns only those values whose satisfies conditions
const todoVaccine = todos.filter(function(x){
    return(x.Vaccine === true)
}
)
console.log(todoVaccine)

//but I can now, print this particular satisfied values into a seperate array
const todoVaccine1 = todos.filter(function(x){
    return(x.Vaccine === true)
}).map(function(y){
    return(y.Id)
})
console.log(todoVaccine1)

//Conditionals

