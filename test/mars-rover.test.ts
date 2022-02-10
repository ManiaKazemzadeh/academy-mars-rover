import { Application } from "./../src/application";

// starting position is 0:0:N

// The input to the program is a string of one-character move commands:
// L and R rotate the direction the rover is facing
// M moves the rover one grid square forward in the direction it is currently facing
describe("MarsRover", () => {
  it.each`
    direction  | command   | expectedPosition
    ${"East"}  | ${"R"}    | ${"0:0:E"}
    ${"South"} | ${"RR"}   | ${"0:0:S"}
    ${"West"}  | ${"RRR"}  | ${"0:0:W"}
    ${"North"} | ${"RRRR"} | ${"0:0:N"}
  `(
    "should rotate right towards $direction when receives $command",
    ({ command, expectedPosition }) => {
      const app = new Application();

      const position = app.execute(command);

      expect(position).toBe(expectedPosition);
    }
  );

  it.each`
    direction  | command   | expectedPosition
    ${"West"}  | ${"L"}    | ${"0:0:W"}
    ${"South"} | ${"LL"}   | ${"0:0:S"}
    ${"East"}  | ${"LLL"}  | ${"0:0:E"}
    ${"North"} | ${"LLLL"} | ${"0:0:N"}
  `(
    "should rotate left towards $direction when receives $command",
    ({ command, expectedPosition }) => {
      const app = new Application();

      const position = app.execute(command);

      expect(position).toBe(expectedPosition);
    }
  );

  it.each`
    command      | expectedPosition
    ${"M"}       | ${"0:1:N"}
    ${"MM"}      | ${"0:2:N"}
    ${"RM"}      | ${"1:0:E"}
    ${"MRRM"}    | ${"0:0:S"}
    ${"RMLLM"}   | ${"0:0:W"}
    ${"MMRMMLM"} | ${"2:3:N"}
  `(
    "should move forward to $expectedPosition when receives $command",
    ({ command, expectedPosition }) => {
      const app = new Application();

      const position = app.execute(command);

      expect(position).toBe(expectedPosition);
    }
  );
});
