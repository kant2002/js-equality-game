# JavaScript Equality Table Game…

…or why you should prefer the `===` operator".

* Inspired by [JavaScript Equality Table][table]
* [Discussion about value order][reorder]
* [Weak typing][wikipedia] in Wikipedia

## Trivia

Brendan Eich was asked to add the loose equality checking rules by a coworker in Netscape and considers it a mistake.<sup>[citation needed]</sup>

## Motivation

The initial reason to make this game was to try out state management with [immer-wieder][wieder], but it's also to demonstrate that the `==` rules are easy to get wrong even if you feel like you're familiar with them. It's in response to claims like this one by the well-known author [getify][getify]:

> However, implicit coercion is a mechanism that can be learned, and moreover should be learned by anyone wishing to take JavaScript programming seriously. Not only is it not confusing once you learn the rules, it can actually make your programs better! The effort is well worth it.

[table]: https://github.com/dorey/Javascript-Equality-Table/
[wikipedia]: https://en.wikipedia.org/wiki/Strong_and_weak_typing
[reorder]: http://algassert.com/visualization/2014/03/27/Better-JS-Equality-Table.html
[wieder]: https://github.com/drcmda/immer-wieder
[getify]: https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md#converting-between-types
