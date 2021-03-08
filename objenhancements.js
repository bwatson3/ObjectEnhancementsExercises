//OBJECT ENHANCEMENTS EXERCISE
//Refactor the ES5 code below into ES2015

//SAME KEYS AND VALUES
//ES5 Version
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

//ES2015 Version
function createInstructor(firstName, lastName) {
	return {
		firstName,
		lastName
	};
}

//COMPUTED PROPERTY NAMES
//ES5 Version
// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"

//ES2015 Version
let favoriteNumber = 42;
const instructor = {
	firstName: 'Colt',
	[favoriteNumber]: 'That is my favorite!'
};

//OBJECT METHODS
//ES5 Version
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

//ES2015 Version
let teacher = {
	firstName: 'Colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return this.firstName + ' says bye!';
	}
};

//createAnimal FUNCTION - Write a function using one or more
//of the object enhancements we've covered which generates
//an animal object. The function should accept 3 arguments:
//-species of animal ('cat','dog')
//-verb (a string used to name a function like 'bark')
//-noise (a string to be printed when the above function is called like 'woof')
function createAnimal(species, verb, noise) {
	return {
		species,
		[verb]() {
			return noise;
		}
	};
}

const dog = createAnimal('canine', 'bark', 'wooooooof!');
