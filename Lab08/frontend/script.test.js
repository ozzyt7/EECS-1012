import { describe, it, expect } from "vitest";
import { isComplete, select } from "script.js";

describe('test of isComplete function in lab8', () => {
    it('when all checkboxes are filled, should return: true', () => {
        select("one", "something");
        select("two", "something");
        select("three", "something");
        select("four", "something");        
        expect(isComplete()).toBe(true);
    })
    /* you may want to write your own tests too! */
})

describe('test of isComplete function in lab8', () => {
    it('when no checkboxes are filled, should return: false', () => {
        select("one", null);
        select("two", null);
        select("three",null);
        select("four", null);
        expect(isComplete()).toBe(false);
    })
    /* you may want to write your own tests too! */
})
