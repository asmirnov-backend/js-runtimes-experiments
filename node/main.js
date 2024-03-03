"use strict"
import { factorial } from './factorial.js'

console.time('T');
factorial(1000)
console.timeEnd('T');
