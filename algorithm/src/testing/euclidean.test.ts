import { expect, test } from "vitest";
import { euclidean } from "../euclidean";

test("euclidean", () => {
  expect(euclidean(8177, 3315)).toBe(221);
});
