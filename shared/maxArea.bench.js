"use strict"
import { maxArea } from './maxArea.js'
import { bench } from './bench.js'

const input = new Array(100000).fill().map(_ => Math.round(Math.random() * 100000))
await bench(maxArea, input)
