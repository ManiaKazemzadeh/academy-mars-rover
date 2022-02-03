enum Direction {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}

export class MarsRover {
  private x: number = 0;
  private y: number = 0;
  private direction: Direction = Direction.North;

  public execute(command: string): string {
    if (command === "R") {
      if (this.direction === Direction.North) this.direction = Direction.East;
    }

    return `${this.x}:${this.y}:${this.direction}`;
  }
}
