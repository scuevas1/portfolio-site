import { test, expect } from "vitest";
import { getRegion } from "../utils/getRegion";

test("returns Europe for Spain", () => {
  expect(getRegion("Spain")).toBe("Europe");
});

test("returns Caribbean for Puerto Rico", () => {
  expect(getRegion("Puerto Rico")).toBe("Caribbean");
});

test("returns Other for Japan", () => {
  expect(getRegion("Japan")).toBe("Other");
});
