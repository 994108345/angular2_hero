import {Engine} from "./engine";
import {Tires} from "./tires";
export class Car {
  /*public description = 'DI';
  constructor(public engine: Engine, public tires: Tires) { }
  const car = new Car(new Engine(), new Tires());*/
  public engine: Engine;
  public tires: Tires;
  public description = 'No DI';
  constructor() { this.engine = new Engine(); this.tires = new Tires(); }

  drive(){
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }

}
