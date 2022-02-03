import { MarsRover } from "../src/mars-rover";

// starting position is 0:0:N

// The input to the program is a string of one-character move commands:
// L and R rotate the direction the rover is facing
// M moves the rover one grid square forward in the direction it is currently facing
describe("MarsRover", () => {
  it("should rotate East when receives R", () => {
    const marsRover = new MarsRover();

    const position = marsRover.execute("R");

    expect(position).toBe("0:0:E");
  });

  it("should rotate South when receives RR", () => {
    const marsRover = new MarsRover();

    const position = marsRover.execute("RR");

    expect(position).toBe("0:0:S");
  });
});
