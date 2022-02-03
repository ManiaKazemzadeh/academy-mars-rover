enum Direction {
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

export class MarsRover {
  private x: number = 0;
  private y: number = 0;
  private direction: Direction = Direction.North;

  public execute(command: string): string {
    const commands = command.split("");
    commands.forEach((c) => {
      if (c === "R") this.rotateRight();

      if (c === "L") this.rotateLeft();

      if (c === "M") this.move();
    });

    return `${this.x}:${this.y}:${this.direction}`;
  }

  private rotateRight() {
    this.direction = RightRotations.get(this.direction)!;
  }

  private rotateLeft() {
    this.direction = LeftRotations.get(this.direction)!;
  }

  private move() {
    if (this.direction === Direction.North) this.y++;
    if (this.direction === Direction.East) this.x++;
    if (this.direction === Direction.South) this.y--;
    if (this.direction === Direction.West) this.x--;
  }
}
