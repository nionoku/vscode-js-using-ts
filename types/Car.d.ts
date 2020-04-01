import { Wheel } from './Wheel';

export interface Car {
  body: 'sedan' | 'coupe' | 'hatchback',
  doors: 2 | 3 | 4 | 5,
  engine_power: number,
  whells: Wheel
}
