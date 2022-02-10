import { MarsRover } from "./marsRover";

export enum Direction {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

const RightRotations = new Map<Direction, Direction>([
  [Direction.North, Direction.East],
  [Direction.East, Direction.South],
  [Direction.South, Direction.West],
  [Direction.West, Direction.North],
]);

const LeftRotations = new Map<Direction, Direction>([
  [Direction.North, Direction.West],
  [Direction.West, Direction.South],
  [Direction.South, Direction.East],
  [Direction.East, Direction.North],
]);

export class Receiver {
  public move(marsRover: MarsRover) {
    if (marsRover.direction === Direction.North) marsRover.y++;
    if (marsRover.direction === Direction.East) marsRover.x++;
    if (marsRover.direction === Direction.South) marsRover.y--;
    if (marsRover.direction === Direction.West) marsRover.x--;
  }

  public rotateRight(marsRover: MarsRover) {
    marsRover.direction = RightRotations.get(marsRover.direction)!;
  }

  public rotateLeft(marsRover: MarsRover) {
    marsRover.direction = LeftRotations.get(marsRover.direction)!;
  }
}
