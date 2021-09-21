//same keys and values
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//Computed Property Names
let favoriteNumber = 42;

// let instructor = {
//     firstName: 'Colt',
//     [favoriteNumber]: 'That is my favorite!'
// }

//Object Methods
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

let instructor = {
    firstName: 'Colt',
    sayHello() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!';
    }
}
console.log(instructor);

//createAnimal Function
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}