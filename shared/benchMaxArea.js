"use strict"
import { maxArea } from './maxArea.js'
import { bench } from './bench.js'

const input = new Array(10000).fill().map(_ => Math.round(Math.random() * 10000))
await bench(maxArea, input)
