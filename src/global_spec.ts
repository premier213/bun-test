import { expect, test, describe } from "bun:test";

describe("arithmetic", () => {
  test("2 + 2", () => {
    expect(2 + 2).toBe(4);
  });

  test("2 * 2", () => {
    expect(2 * 2).toBe(4);
  });
});

test("2 * 2", (done: () => void) => {
  Promise.resolve(2 * 2).then((result) => {
    expect(result).toEqual(4);
    done();
  });
});

test("snap", () => {
  expect("foo").toMatchSnapshot();
});
