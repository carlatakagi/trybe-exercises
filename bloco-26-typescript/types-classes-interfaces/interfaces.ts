interface IAutomobile {
  name: string;
  brand: string;
  color: string;
  tires: number;
  gears: number;

  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}