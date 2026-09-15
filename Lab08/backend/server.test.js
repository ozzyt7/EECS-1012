import { describe, it, expect } from "vitest";
import { getResult } from "server.js";

describe('test of getResult function in lab8', () => {
    it('when input is ENFP, should return: Extraverted, Intuitive, Feeling, Percieving people like JAZZ', () => {
        expect(getResult({ one: 'E', two: 'N', three: 'F', four: 'P' }).title).toBe('Extraverted, Intuitive, Feeling, Percieving people like JAZZ');
    })
    /* you may want to write your own tests too! */
})

describe('test of getResult function in lab8', () => {
    it('when input is ESTP, should return: Extraverted, Sensing, Thinking, Percieving people like METAL', () => {
        expect(getResult({ one: 'E', two: 'S', three: 'T', four: 'P' }).title).toBe('Extraverted, Sensing, Thinking, Percieving people like METAL');
    })
    /* you may want to write your own tests too! */
})

