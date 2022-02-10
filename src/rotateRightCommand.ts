import { MarsRover } from "./marsRover";
import { Command } from "./command";

export class RotateRightCommand extends Command {
  execute(marsRover: MarsRover): void {
    this.receiver.rotateRight(marsRover);
  }
}
