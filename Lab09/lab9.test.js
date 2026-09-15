import { describe, it, expect } from "vitest";

import { gcd, isSolved, intersection, isIsomorphic, ceasar, isPalindrome } from "lab9.js";

describe('test of gcd function in lab9', () => {
    it('when input is [12, 15, 21, 30], should return: 6', () => {
        expect(gcd([12, 15, 21, 30])).toBe(6);
    })
})

describe('test of intersection function in lab9', () => {
    it('when input is [1,2,3,4,5] and [5,4,7,8,9], should return: 4 and 5', () => {
        let a = [1,2,3,4,5];
        let b = [5,4,7,8,9];
        expect(intersection(a,b)).toContain(4);
        expect(intersection(a,b)).toContain(5);
    })
})

describe('test of isSolved function in lab9', () => {
    it('when input board contains no repetitions in rows, columns or subsquares, should return: true', () => {
        let board =
        [ [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ] ,
        [ 7 , 8 , 9 , 1 , 2 , 3 , 4 , 5 , 6 ] ,
        [ 4 , 5 , 6 , 7 , 8 , 9 , 1 , 2 , 3 ] ,
        [ 5 , 1 , 2 , 6 , 4 , 7 , 9 , 3 , 8 ] ,
        [ 9 , 3 , 4 , 8 , 1 , 5 , 2 , 6 , 7 ] ,
        [ 8 , 6 , 7 , 9 , 3 , 2 , 5 , 1 , 4 ] ,
        [ 2 , 4 , 8 , 3 , 7 , 1 , 6 , 9 , 5 ] ,
        [ 3 , 9 , 5 , 2 , 6 , 4 , 8 , 7 , 1 ] ,
        [ 6 , 7 , 1 , 5 , 9 , 8 , 3 , 4 , 2 ] ]
        expect(isSolved(board)).toBe(true);
    })
})

describe('test of isSolved function in lab9', () => {
    it('when input is has a row with 2 9s, should return: false', () => {
        let board =
        [ [ 1 , 2 , 9 , 4 , 5 , 6 , 7 , 8 , 9 ] ,
        [ 7 , 8 , 9 , 1 , 2 , 3 , 4 , 5 , 6 ] ,
        [ 4 , 5 , 6 , 7 , 8 , 9 , 1 , 2 , 3 ] ,
        [ 5 , 1 , 2 , 6 , 4 , 7 , 9 , 3 , 8 ] ,
        [ 9 , 3 , 4 , 8 , 1 , 5 , 2 , 6 , 7 ] ,
        [ 8 , 6 , 7 , 9 , 3 , 2 , 5 , 1 , 4 ] ,
        [ 2 , 4 , 8 , 3 , 7 , 1 , 6 , 9 , 5 ] ,
        [ 3 , 9 , 5 , 2 , 6 , 4 , 8 , 7 , 1 ] ,
        [ 6 , 7 , 1 , 5 , 9 , 8 , 3 , 4 , 2 ] ]
        expect(isSolved(board)).toBe(false);
    })
})

describe('test of isIsomorphic function in lab9', () => {
    it('when input is food, should return: false', () => {
        expect(isIsomorphic("food")).toBe(false);
    })
})

describe('test of isIsomorphic function in lab9', () => {
    it('when input is fork, should return: true', () => {
        expect(isIsomorphic("fork")).toBe(true);
    })
})

describe('test of ceasar function in lab9', () => {
    it('when input is york, should return: zpsl', () => {
        expect(ceasar("york")).toBe("zpsl");
    })
})

describe('test of isPalindrome function in lab9', () => {
    it('when input is "A man, a plan, a canal: Panama", should return: true', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    })
})
