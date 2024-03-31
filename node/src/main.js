"use strict"
import { factorial } from './factorial.js'

performance.mark('start')
factorial(1000)
performance.mark('end')
const measure = performance.measure('Measurement', 'start', 'end')
console.log(measure.duration)