import { MarsRover } from "../src/mars-rover";

// starting position is 0:0:N

// The input to the program is a string of one-character move commands:
// L and R rotate the direction the rover is facing
// M moves the rover one grid square forward in the direction it is currently facing
describe("MarsRover", () => {
  it.each`
  direction   | command   | expectedPosition
  ${"East"}   | ${"R"}    | ${"0:0:E"}
  ${"South"}  | ${"RR"}   | ${"0:0:S"}
  ${"West"}   | ${"RRR"}  | ${"0:0:W"}
  ${"North"}  | ${"RRRR"} | ${"0:0:N"}
  `("should rotate $direction when receives $command", ({ command, expectedPosition }) => {
    const marsRover = new MarsRover();

    const position = marsRover.execute(command);

    expect(position).toBe(expectedPosition);
  });
});
