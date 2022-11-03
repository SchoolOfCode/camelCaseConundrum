import { test, expect } from "@jest/globals";
import covertToCamelCase from './main.js'

test(`Given a string of 'make me camel case', returns 'makeMeCamelCase'`, () => {
  const actual = covertToCamelCase("make me camel case");
  const expected = "makeMeCamelCase";
  expect(actual).toBe(expected);
});

test(`Given a string of 'ALSO MAKE ME INTO CAMEL CASE', returns 'alsoMakeMeIntoCamelCase'`, () => {
  const actual = covertToCamelCase("ALSO MAKE ME INTO CAMEL CASE");
  const expected = "alsoMakeMeIntoCamelCase";
  expect(actual).toBe(expected);
});

test(`Given a string of 'AnD meEEeeE', returns 'andMeeeeee'`, () => {
  const actual = covertToCamelCase("AnD meEEeeE");
  const expected = "andMeeeeee";
  expect(actual).toBe(expected);
});

test(`Given a string of '', returns null`, () => {
  const actual = covertToCamelCase("");
  const expected = null;
  expect(actual).toBe(expected);
});

test(`Given a string of 'HELLO', returns null`, () => {
  const actual = covertToCamelCase("HELLO");
  const expected = null;
  expect(actual).toBe(expected);
});

test(`Given a string of 'world', returns null`, () => {
  const actual = covertToCamelCase("world");
  const expected = null;
  expect(actual).toBe(expected);
});

test(`Given a string of 'SoC', returns null`, () => {
  const actual = covertToCamelCase("SoC");
  const expected = null;
  expect(actual).toBe(expected);
});
