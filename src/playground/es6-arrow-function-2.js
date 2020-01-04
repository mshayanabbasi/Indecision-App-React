// arguments object - no longer bound with arrow functions

const add = function(a, b)  {
    // console.log(arguments)
    return a + b
}

console.log(add(55, 1, 1001))


// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => {
            return this.name + ' has live in ' + city
        })
        // console.log(this.name)
        // console.log(this.cities)
        // this.cities.forEach((city) =>  {
        //     console.log(this.name + ' has lived in '+ city)
        // })
    }
}
console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => {
            return this.multiplyBy * number
        })
    }
} 

console.log(multiplier.multiply())