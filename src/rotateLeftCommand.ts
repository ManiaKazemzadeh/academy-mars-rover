import { MarsRover } from "./marsRover";
import { Command } from "./command";

export class RotateLeftCommand extends Command {
  execute(marsRover: MarsRover): void {
    this.receiver.rotateLeft(marsRover);
  }
}
