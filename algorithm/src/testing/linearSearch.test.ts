import { expect, test } from "vitest";
import { data } from "./vitest-setup";
import { linearSearch } from "../linear-search";

test("Linear Search", () => {
  expect(linearSearch(10, data)).toBe(10);
  expect(linearSearch(-1, data)).toBe(-1);
  expect(linearSearch(4, data)).toBe(-1);
});
