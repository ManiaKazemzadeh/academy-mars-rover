import { MarsRover } from "./marsRover";
import { MoveCommand } from "./moveCommand";
import { Receiver } from "./receiver";
import { RotateLeftCommand } from "./rotateLeftCommand";
import { RotateRightCommand } from "./rotateRightCommand";

export class Application {
  marsRover: MarsRover;
  receiver: Receiver;

  constructor() {
    this.marsRover = new MarsRover();
    this.receiver = new Receiver();
  }

  public execute(command: string): string {
    const commands = command.split("");

    commands.forEach((c) => {
      if (c === "R")
        new RotateRightCommand(this.receiver).execute(this.marsRover);

      if (c === "L")
        new RotateLeftCommand(this.receiver).execute(this.marsRover);

      if (c === "M") new MoveCommand(this.receiver).execute(this.marsRover);
    });

    return this.marsRover.reportPosition();
  }
}
