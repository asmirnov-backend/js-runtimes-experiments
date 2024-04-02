"use strict"
import { quickSort } from './quickSort.js'
import { bench } from './bench.js'

bench(quickSort, new Array(10000).fill().map(Math.random))
