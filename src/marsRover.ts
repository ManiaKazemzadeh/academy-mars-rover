import { Direction } from "./receiver";

export class MarsRover {
  x: number = 0;
  y: number = 0;
  direction: Direction = Direction.North;

  public reportPosition() {
    return `${this.x}:${this.y}:${this.direction}`;
  }
}
