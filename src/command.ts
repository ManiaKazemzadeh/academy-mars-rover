import { MarsRover } from "./marsRover";
import { Receiver } from "./receiver";

export abstract class Command {
  receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  abstract execute(marsRover: MarsRover): void;
}
