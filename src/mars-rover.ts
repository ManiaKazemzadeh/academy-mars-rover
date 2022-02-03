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
    const commands = command.split("");
    commands.forEach(c => {
      if (c === "R") {
        this.rotateRight();
      }
    });

    return `${this.x}:${this.y}:${this.direction}`;
  }

  private rotateRight()
  {
    if (this.direction === Direction.North) this.direction = Direction.East;
    else if (this.direction === Direction.East) this.direction = Direction.South;
    else if (this.direction === Direction.South) this.direction = Direction.West;
    else if (this.direction === Direction.West) this.direction = Direction.North;
  }
}
