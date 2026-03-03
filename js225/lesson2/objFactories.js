function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate,
    brakeRate,

    accelerate() {
      this.speed += this.rate;
    },

    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) this.speed = 0;
    }
  }
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);

sedan.brake();
console.log(sedan.speed);

sedan.brake();

console.log(sedan.speed);

