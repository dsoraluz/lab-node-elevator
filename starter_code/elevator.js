class Elevator {
  constructor(){
    this.currentFloor  = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = '';

    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    var clear = setInterval(() => this.update(), 1000);
  }
  stop() {
    clearInterval(clear);
  }

  update() {
    this.log();
  }
  _passengersEnter(person) {
    let personIndex = this.waitingList.indexOf(person.name);
    
    this.waitingList.splice(personIndex, 1);
    this.passengers.push(person);
    this.requests.push(person.destinationFloor);
    console.log(person.name + " has just entered the elevator.");
    }

  _passengersLeave(person) {
    let personIndex = this.waitingList.indexOf(person.name);
    let destinationFloorIndex = this.waitingList.indexOf(person.destinationFloor);

    this.passengers.splice(personIndex,1);
    this.requests.splice(destinationFloorIndex, 1);
    console.log(person.name + " has just entered the elevator.");

  }

  floorUp() {
    this.direction = 'up';
    if (this.currentFloor < this.MAXFLOOR){
      this.currentFloor += 1;
      // this.update();
    }
    else {
      console.log('This is the top floor.');
    }
  }

  floorDown() {
    this.direction = 'down';
    if (this.currentFloor > 0){
      this.currentFloor -= 1;
      // this.update();
    }
    else {
      console.log('This is the bottom floor.');
    }
  }
  call(person) {

    this.waitingList.push(person);

    if (person.originFloor == this.currentFloor){
      this._passengersEnter(person);
    }
    else if(person.orginFloor > this.currentFloor){
      floorUp();
    }
  }

  log() {
      console.log("Direction: "+ this.direction +" | Floor: "+ this.currentFloor);
   }
}

module.exports = Elevator;
