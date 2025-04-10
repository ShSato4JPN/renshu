import { expect, test } from "vitest";
import { binarySearch } from "../binary-search";
import { data } from "./vitest-setup";

test("Binary Search", () => {
  expect(binarySearch(10, data)).toBe(10);
  expect(binarySearch(-1, data)).toBe(-1);
  expect(binarySearch(4, data)).toBe(-1);
});
