import { setWorldConstructor } from 'cucumber';

class CustomWorld {
  variable : any;
  constructor() {
    this.variable = 0
  }

  setTo(number) {
    this.variable = number
  }

  incrementBy(number) {
    this.variable += number
  }
}

setWorldConstructor(CustomWorld);
