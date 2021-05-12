# Test instructions

## Which are in

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns [] Notes:

    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

    Beware: r must be without duplicates.
    Don't mutate the inputs.

## Bouncing balls

A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing? Three conditions must be met for a
valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1. Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter. Examples:

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1

(Condition 2) not fulfilled).

## Longest

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken
only once - coming from s1 or s2. Examples:

a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
