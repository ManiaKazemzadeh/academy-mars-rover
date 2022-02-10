import { MarsRover } from "./marsRover";
import { Command } from "./command";

export class MoveCommand extends Command {
  execute(marsRover: MarsRover): void {
    this.receiver.move(marsRover);
  }
}
