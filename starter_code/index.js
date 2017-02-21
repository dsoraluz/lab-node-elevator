const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElevator = new Elevator();

const daniel = new Person('Daniel', 2, 8);
const alina = new Person('Alina', 5, 2);
const ariel = new Person('Ariel', 6, 8);
const javier = new Person('Javier', 8, 1);
const walter = new Person('Walter', 2, 3);


myElevator._passengersEnter(daniel);
console.log("waitingList" + myElevator.waitingList);
myElevator._passengersEnter(alina);
console.log("waitingList" + myElevator.waitingList);
myElevator._passengersEnter(ariel);
console.log("waitingList" + myElevator.waitingList);
myElevator._passengersEnter(javier);
console.log("waitingList" + myElevator.waitingList);
myElevator._passengersEnter(walter);




// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();
// myElevator.floorUp();


// myElevator.floorDown();
// myElevator.floorDown();
// myElevator.floorDown();
// myElevator.floorDown();
// myElevator.floorDown();
// myElevator.floorDown();
// myElevator.floorDown();
// myElevator.floorDown();
// myElevator.floorDown();
