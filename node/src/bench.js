"use strict"
import { factorial } from './factorial.js'
import { appendFile } from 'node:fs'

performance.mark('start')
factorial(1000)
performance.mark('end')
const measure = performance.measure('Measurement', 'start', 'end')
appendFile('results/out.csv', measure.duration.toString() + '\r\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
});